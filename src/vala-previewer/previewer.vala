namespace Workbench {

    [DBus (name="re.sonny.Workbench.vala_previewer")]
    public class Previewer : Object {

        public void update_ui (string content, string target_id) {
            this.builder = new Gtk.Builder.from_string (content, content.length);
            var target = this.builder.get_object (target_id) as Gtk.Widget;
            if (target == null) {
                stderr.printf (@"Widget with target_id='$target_id' could not be found.\n");
                return;
            }
            this.window.child = target;
        }

        public void update_css (string content) {
            if (this.css != null)
                Gtk.StyleContext.remove_provider_for_display (Gdk.Display.get_default (), this.css);
            this.css = new Gtk.CssProvider ();
            this.css.load_from_data (content.data);
            Gtk.StyleContext.add_provider_for_display (Gdk.Display.get_default (), this.css , Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        }

        // filename to loadable module or empty string ("") to just run it again
        // also builder_symbol can be empty. Then the builder object is not handed over to the module
        public void run (string filename, string run_symbol, string builder_symbol) {
            if (filename == "") {
                if (this.module == null) {
                    stderr.printf ("No Module specified yet.\n");
                    return;
                }
            } else {
                if (!Module.supported ()) {
                    stderr.printf ("This system does not support loadable modules.\n");
                    return;
                }

                this.module.close ();
                this.module = Module.open (filename, ModuleFlags.LAZY);
                if (this.module == null) {
                    stderr.printf ("Module loading failed.\n");
                    return;
                }
            }

            if (builder_symbol != "") {
                if (this.builder == null) {
                    stderr.printf ("No UI definition loaded yet.\n");
                    return;
                }

                this.window.present ();
                this.presented = true;

                void* function;
                this.module.symbol (builder_symbol, out function);
                if (function == null) {
                    stderr.printf (@"Module does not contain symbol '$builder_symbol'.\n");
                    return;
                }

                var set_builder = (BuilderFunction) function;
                set_builder (this.builder);
            }

            void* function;
            this.module.symbol (run_symbol, out function);
            if (function == null) {
                stderr.printf (@"Module does not contain symbol '$run_symbol'.\n");
                return;
            }

            var run = (RunFunction) function;
            run ();
        }

        [CCode (has_target=false)]
        private delegate void RunFunction ();

        [CCode (has_target=false)]
        private delegate void BuilderFunction (Gtk.Builder builder);

        private Gtk.Window window = new Gtk.Window () {
            hide_on_close = true
        };
        private Gtk.CssProvider? css = null;
        private Module module;
        private bool presented = false;
        private Gtk.Builder? builder = null;
    }

    async void main (string[] args) {
        Gtk.init ();
        Adw.init ();

        Bus.own_name (BusType.SESSION,
                      "re.sonny.Workbench.vala_previewer",
                      BusNameOwnerFlags.NONE,
                      null,
                      (connection, name) => {
                          try {
                              connection.register_object ("/re/sonny/workbench/vala_previewer", new Previewer ());
                          } catch (IOError e) {
                              stderr.printf ("Could not register service\n");
                          }
                      },
                      (connection, name) => { stderr.printf ("Couldn't obtain the bus name.\n"); });

        yield;
    }
}

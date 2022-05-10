namespace Workbench {

    [DBus (name="re.sonny.Workbench.vala_previewer")]
    public class Previewer : Object {

        public void update_ui (string content, string target_id) {
            print("hello\n");
            var builder = new Gtk.Builder.from_string (content, content.length);
            var target = builder.get_object (target_id) as Gtk.Widget;
            if (target == null) {
                stderr.printf (@"Widget with target_id='$target_id' could not be found.\n");
                return;
            }
            this.window.content = target;
            if (!this.presented) {
                this.window.present ();
                this.presented = true;
            }
        }

        public void update_css (string content) {
            Gtk.StyleContext.remove_provider_for_display (Gdk.Display.get_default (), this.css);
            this.css = new Gtk.CssProvider ();
            this.css.load_from_data (content.data);
            Gtk.StyleContext.add_provider_for_display (Gdk.Display.get_default (), this.css , Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        }

        // filename to loadable module or empty string ("") to just run it again
        public void run (string filename, string symbol) {
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

                this.module = Module.open (filename, ModuleFlags.LAZY);
                if (this.module == null) {
                    stderr.printf ("Module loading failed.\n");
                    return;
                }
            }

            void* function;
            this.module.symbol (symbol, out function);
            if (function == null) {
                stderr.printf (@"Module does not contain function '$symbol'.\n");
                return;
            }

            var run = (RunFunction) function;
            run ();
        }

        [CCode (has_target=false)]
        private delegate void RunFunction ();

        private Adw.Window window = new Adw.Window ();
        private Gtk.CssProvider css;
        private Module module;
        private bool presented = false;
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

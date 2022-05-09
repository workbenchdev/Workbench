namespace Workbench {

    [GtkTemplate (ui="/re/sonny/Workbench/previewer.ui")]
    public class PreviewerWindow : Gtk.Widget {
        //
    }

    [DBus (name="re.sonny.Workbench.vala-previewer")]
    public class Previewer : Object {
        // filename to .ui file
        public void update_ui (string filename, string target_id) {
            var builder = new Gtk.Builder.from_file (filename);
            var target = builder.get_object (target_id) as Gtk.Widget;
            if (target == null) {
                stderr.printf (@"Widget with target_id='$target_id' could not be found.\n");
                return;
            }
            this.window.child = target;
            this.window.present ();
        }

        // filename to .css file
        public void update_css (string filename) {
            Gtk.StyleContext.remove_provider_for_display (Gdk.Display.get_default (), this.css);
            this.css = new Gtk.CssProvider ();
            this.css.load_from_file (File.new_for_path (filename));
            Gtk.StyleContext.add_provider_for_display (Gdk.Display.get_default (), this.css , Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
        }

        // filename to loadable module or null to just run it again
        public void run (string? filename, string symbol) {
            if (filename == null) {
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
    }

    async void main (string[] args) {
        Gtk.init ();
        Adw.init ();

        Bus.own_name (BusType.SESSION,
                      "re.sonny.Workbench.vala-previewer",
                      BusNameOwnerFlags.NONE,
                      null,
                      (connection, name) => {
                          try {
                              connection.register_object ("/re/sonny/workbench/vala-previewer", new Previewer ());
                          } catch (IOError e) {
                              stderr.printf ("Could not register service\n");
                          }
                      },
                      (connection, name) => { stderr.printf ("Couldn't obtain the bus name.\n"); });
    }
}

namespace Workbench {

  [DBus (name="re.sonny.Workbench.vala_previewer")]
  public class Previewer : Object {
    construct {
      this.notify["ColorScheme"].connect (() => {
        this.style_manager.color_scheme = this.ColorScheme;
      });
    }

    private void ensure_window() {
      if (this.window != null) {
        return;
      }
      var window = new Gtk.Window () {
        // Ensure the header bar has the same height as the one on Workbench main window
        titlebar = new Gtk.HeaderBar (),
        title = "Preview",
        default_width = 600,
        default_height = 800
      };
      this.set_window(window);
    }

    private void set_window(Gtk.Window window) {
      this.window?.destroy ();
      this.window = window;
      this.window.close_request.connect (this.on_window_closed);
    }

    private bool on_window_closed () {
      this.window_open (false);
      this.window = null;
      return false;
    }

    public bool screenshot (string path) {
      Gtk.Widget widget = this.target;
      var paintable = new Gtk.WidgetPaintable (widget);
      int width = widget.get_allocated_width ();
      int height = widget.get_allocated_height ();
      var snapshot = new Gtk.Snapshot ();
      paintable.snapshot (snapshot, width, height);
      Gsk.RenderNode? node = snapshot.to_node ();
      if (node == null) {
        debug (@"Could not get node snapshot, width: $width, height: $height");
        return false;
      }
      Gsk.Renderer? renderer = widget.get_native ()?.get_renderer ();
      var rect = Graphene.Rect () {
        origin = Graphene.Point.zero (),
        size = Graphene.Size () {
          width = width,
          height = height
        }
      };
      Gdk.Texture texture = renderer.render_texture (node, rect);
      texture.save_to_png (path);
      return true;
    }

    public void update_ui (string content, string target_id, string original_id = "") {
      typeof (Shumate.SimpleMap).ensure();
      this.builder = new Gtk.Builder.from_string (content, content.length);

      var target = this.builder.get_object (target_id) as Gtk.Widget;
      if (target == null) {
        stderr.printf (@"Widget with target_id='$target_id' could not be found.\n");
        return;
      }

      this.target = target;

      if (original_id != "") {
        this.builder.expose_object(original_id, target);
      }

      // Not a Root/Window
      if (!(target is Gtk.Root)) {
        this.ensure_window();
        this.window.child = target;
        return;
      }

      // Set target as window directly
      if (this.window == null || this.window.get_type () != target.get_type ()) {
        this.set_window(target as Gtk.Window);
        return;
      }

      if (target is Adw.Window) {
        var child = ((Adw.Window) target).content;
        ((Adw.Window) target).content = null;
        ((Adw.Window) this.window).content = child;
      } else if (target is Adw.ApplicationWindow) {
        var child = ((Adw.ApplicationWindow) target).content;
        ((Adw.ApplicationWindow) target).content = null;
        ((Adw.ApplicationWindow) this.window).content = child;
      } else if (target is Gtk.Window) {
        var child = ((Gtk.Window) target).child;
        ((Gtk.Window) target).child = null;
        this.window.child = child;
      }

      // Toplevel windows returned by these functions will stay around
      // until the user explicitly destroys them with gtk_window_destroy().
      // https://docs.gtk.org/gtk4/class.Builder.html
      if (target is Gtk.Window) {
        ((Gtk.Window) target).destroy();
      }
    }

    public void update_css (string content) {
      if (this.css != null)
        Gtk.StyleContext.remove_provider_for_display (Gdk.Display.get_default (), this.css);
      this.css = new Gtk.CssProvider ();
      this.css.parsing_error.connect((self, section, error) => {
        var start = section.get_start_location();
        var end = section.get_end_location();
        this.css_parser_error(error.message, (int)start.lines, (int)start.line_chars, (int)end.lines, (int)end.line_chars);
      });
      this.css.load_from_data (content.data);
      Gtk.StyleContext.add_provider_for_display (Gdk.Display.get_default (), this.css , Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
    }

    public void run (string filename, string uri) {
      if (this.module != null) {
        this.module.close ();
      }

      this.module = Module.open (filename, ModuleFlags.LAZY);
      if (this.module == null) {
        stderr.printf ("Module loading failed.\n");
        return;
      }

      void* function;

      this.module.symbol ("set_base_uri", out function);
      var set_base_uri = (BaseUriFunction) function;
      set_base_uri (uri);

      this.module.symbol ("set_builder", out function);
      var set_builder = (BuilderFunction) function;
      if (this.builder != null) {
        set_builder (this.builder);
      }

      this.module.symbol ("set_window", out function);
      var set_window = (WindowFunction) function;
      if (this.window != null) {
        set_window (this.window);
      }

      this.module.symbol ("main", out function);
      if (function == null) {
        stderr.printf (@"Function 'main' not found.\n");
        return;
      }
      var main_function = (MainFunction) function;
      main_function ();
    }

    public void close_window () {
      if (this.window == null) {
        return;
      }
      this.window.close ();
    }

    public async void open_window (int width, int height) {
      this.window.default_width = width;
      this.window.default_height = height;
      this.window.present ();
      this.window_open (true);
    }

    public void enable_inspector (bool enabled) {
      Gtk.Window.set_interactive_debugging (enabled);
    }

    public Adw.ColorScheme ColorScheme { get; set; default = Adw.ColorScheme.DEFAULT; }

    public signal void window_open (bool open);

    public signal void css_parser_error (string message, int start_line, int start_char, int end_line, int end_char);

    [CCode (has_target=false)]
    private delegate void MainFunction ();

    [CCode (has_target=false)]
    private delegate void BuilderFunction (Gtk.Builder builder);

    [CCode (has_target=false)]
    private delegate void WindowFunction (Gtk.Window window);

    [CCode (has_target=false)]
    private delegate void BaseUriFunction (string uri);

    private Gtk.Window? window;
    private Gtk.Widget? target;
    private Gtk.CssProvider? css = null;
    private Module module;
    private Gtk.Builder? builder = null;
    private Adw.StyleManager style_manager = Adw.StyleManager.get_default ();
  }

  void main (string[] args) {
    if (!Module.supported ()) {
      stderr.printf ("This system does not support loadable modules.\n");
      Process.exit (1);
    }

    var loop = new MainLoop();

    Adw.init();

    var connection = new DBusConnection.for_address_sync(
      args[1],
      DBusConnectionFlags.AUTHENTICATION_CLIENT,
      null,
      null
    );

    var previewer = new Previewer ();

    connection.on_closed.connect(() => {
      loop.quit();
    });

    connection.register_object ("/re/sonny/workbench/vala_previewer", previewer);

    loop.run();
  }
}


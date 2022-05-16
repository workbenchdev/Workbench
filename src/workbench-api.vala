namespace Workbench {
    public static Gtk.Builder builder;
    public static Gtk.Window window;
}

public void set_builder (Gtk.Builder b) {
	  Workbench.builder = b;
}

public void set_window (Gtk.Window w) {
    Workbench.window = w;
}

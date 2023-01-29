namespace workbench {
    public static Gtk.Builder builder;
    public static Gtk.Window window;
    public static Adw.Application application;
}

public void set_builder (Gtk.Builder b) {
	  workbench.builder = b;
}

public void set_window (Gtk.Window w) {
    workbench.window = w;
}

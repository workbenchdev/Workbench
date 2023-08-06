namespace workbench {
    public static Gtk.Builder builder;
    public static Gtk.Window window;
    public static string uri;
    public string resolve (string path) {
        return File.new_for_uri(workbench.uri).resolve_relative_path(path).get_uri();
    }
}

public void set_builder (Gtk.Builder b) {
    workbench.builder = b;
}

public void set_window (Gtk.Window w) {
    workbench.window = w;
}

public void set_base_uri (string uri) {
    workbench.uri = uri;
}

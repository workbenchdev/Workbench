namespace workbench {
    public static Gtk.Builder builder;
    public static Gtk.Window window;
    public static string uri;
    public void preview (Gtk.Widget widget) {
      // TODO: We would now need to actually somehow communicate back to the
      //       previewer.vala itself to set it's target and ensure_window...
      // this.target = widget;
      // this.ensure_window();
      // this.window.set_child(widget);
    }
    public string resolve (string path) {
        return File.new_for_uri(workbench.uri).resolve_relative_path(path).get_uri();
    }
}

public void set_builder (Gtk.Builder builder) {
    workbench.builder = builder;
}

public void set_window (Gtk.Window window) {
    workbench.window = window;
}

public void set_base_uri (string uri) {
    workbench.uri = uri;
}

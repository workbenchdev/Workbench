#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.FileFilter file_filter_image;

public void main () {
    var button_single = (Gtk.Button) workbench.builder.get_object ("button_single");
    var button_image = (Gtk.Button) workbench.builder.get_object ("button_image");
    var button_multiple = (Gtk.Button) workbench.builder.get_object ("button_multiple");
    file_filter_image = (Gtk.FileFilter) workbench.builder.get_object ("file_filter_image");

    button_single.clicked.connect (open_single.begin);
    button_image.clicked.connect (open_image.begin);
    button_multiple.clicked.connect (open_multiple.begin);
}

private async void open_single () {
    var file_dialog = new Gtk.FileDialog ();

    try {
        File file = yield file_dialog.open (workbench.window, null);

        message (@"Selected File: $( get_file_name (file))");
    } catch (Error e) {
        critical (e.message);
    }
}

private async void open_image () {
    var file_dialog = new Gtk.FileDialog () {
        default_filter = file_filter_image
    };

    try {
        File file = yield file_dialog.open (workbench.window, null);

        message (@"Selected Image: $( get_file_name (file))");
    } catch (Error e) {
        critical (e.message);
    }
}

private async void open_multiple () {
    var file_dialog = new Gtk.FileDialog ();
    try {
        ListModel files = yield file_dialog.open_multiple (workbench.window, null);

        message (@"Selected Files ($(files.get_n_items())):");
        for (int i = 0; i < files.get_n_items (); i++) {
            var file = (File) files.get_item (i);
            message (@"  $(get_file_name(file))");
        }
    } catch (Error e) {
        critical (e.message);
    }
}

private static string get_file_name (File file) {
    try {
        var info = file.query_info ("standard::name", NONE, null);
        return info.get_name ();
    } catch (Error e) {
        critical (e.message);
    }
    return "";
}

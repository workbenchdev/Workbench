#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

async void select_folder () {
    var dialog_for_folder = new Gtk.FileDialog ();
    try {
        File file = yield dialog_for_folder.select_folder (workbench.window, null);

        FileInfo info = file.query_info (
                                         "standard::name",
                                         FileQueryInfoFlags.NONE,
                                         null
        );
        string name = info.get_name ();
        message (@"$(name) selected");
    } catch (Error e) {
        message (@"$(e.message)");
    }
}

async void multiple_folders () {
    var dialog = new Gtk.FileDialog ();
    try {
        ListModel folders = yield dialog.select_multiple_folders (workbench.window, null);

        uint selected_items_count = folders.get_n_items ();

        message (@"$(selected_items_count) selected folders");
    } catch (Error e) {
        message (@"$(e.message)");
    }
}

public void main () {
    var button_single = (Gtk.Button) workbench.builder.get_object ("button_single");
    var button_multiple = (Gtk.Button) workbench.builder.get_object ("button_multiple");

    button_single.clicked.connect (() => {
        select_folder.begin ();
    });

    button_multiple.clicked.connect (() => {
        multiple_folders.begin ();
    });
}

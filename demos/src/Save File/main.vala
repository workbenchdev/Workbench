#! /usr/bin/env -S vala workbench.vala --pkg gtk4

async void save_file () {
    var file_dialog = new Gtk.FileDialog () {
        initial_name = "Workbench.txt"
    };
    try {
        File file = yield file_dialog.save (workbench.window, null);

        uint8[] contents = ("Hello from Workbench!").data;

        yield file.replace_contents_async (contents, // contents
            null, // etag
            false, // make_backup
            FileCreateFlags.NONE, // flags
            null, // cancellable
            null // callback
        );

        message (@"File $(file.get_basename()) saved");
    } catch (Error e) {
        message (@"$(e.message)");
    }
}

public void main () {
    var button = (Gtk.Button) workbench.builder.get_object ("button");

    button.clicked.connect (() => {
        save_file.begin ();
    });
}

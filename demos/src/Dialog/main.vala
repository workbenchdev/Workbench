#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gio-2.0

public void main () {
    var dialog = (Adw.Dialog) workbench.builder.get_object ("dialog");
    var button = (Gtk.Button) workbench.builder.get_object ("button");
    var image = (Gtk.Image) workbench.builder.get_object ("image");

    image.file = File.new_for_uri (workbench.resolve ("./image.svg")).get_path ();

    button.clicked.connect (() => {
        dialog.present (workbench.window);
    });

    dialog.close_attempt.connect (() => {
        dialog.force_close ();
        message ("Close Attempt");
    });

    dialog.closed.connect (() => {
        message ("Closed");
    });
}

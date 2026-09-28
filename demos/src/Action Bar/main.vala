#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var action_bar = (Gtk.ActionBar) workbench.builder.get_object ("action_bar");
    var button = (Gtk.Button) workbench.builder.get_object ("button");
    var start_widget = (Gtk.Button) workbench.builder.get_object ("start_widget");
    var end_widget = (Gtk.Button) workbench.builder.get_object ("end_widget");

    button.clicked.connect (() => {
        action_bar.revealed = !action_bar.revealed;
    });

    start_widget.clicked.connect (() => {
        message ("Start widget");
    });

    end_widget.clicked.connect (() => {
        message ("End widget");
    });
}

#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var checkbox_1 = (Gtk.CheckButton) workbench.builder.get_object ("checkbox_1");
    var checkbox_2 = (Gtk.CheckButton) workbench.builder.get_object ("checkbox_2");

    checkbox_1.toggled.connect (() => {
        if (checkbox_1.active) {
            stdout.printf ("Notifications Enabled\n");
        } else {
            stdout.printf ("Notifications Disabled\n");
        }
    });

    checkbox_2.toggled.connect (() => {
        if (checkbox_2.active) {
            stdout.printf ("Changes will be auto-saved\n");
        } else {
            stdout.printf ("Changes will not be auto-saved\n");
        }
    });
}

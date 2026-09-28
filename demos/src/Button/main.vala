#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
    string[] button_ids = {
        "regular",
        "flat",
        "suggested",
        "destructive",
        "custom",
        "disabled",
        "circular-plus",
        "circular-minus",
        "pill",
        "osd-left",
        "osd-right",
    };

    foreach (string id in button_ids) {
        var button = (Gtk.Button) workbench.builder.get_object (id);
        button.clicked.connect (() => message (@"$(button.name) clicked"));
    }
}

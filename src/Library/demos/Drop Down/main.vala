#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
    var drop_down = workbench.builder.get_object("drop_down") as Gtk.DropDown;

    drop_down.notify["selected-item"].connect (() => {
        var selected_item = drop_down.get_selected_item() as Gtk.StringObject;

        print("%s\n", selected_item.string);

    });
}

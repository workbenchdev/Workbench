#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var circular_switch = (Adw.SwitchRow) workbench.builder.get_object ("circular_switch");
    var secondary_button = (Gtk.MenuButton) workbench.builder.get_object ("secondary");

    circular_switch.notify["active"].connect (() => {
        if (circular_switch.active) {
            secondary_button.add_css_class ("circular");
        } else {
            secondary_button.remove_css_class ("circular");
        }
    });
}

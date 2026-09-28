#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main() {
    var radio_button_1 = (Gtk.CheckButton) workbench.builder.get_object("radio_button_1");
    var radio_button_2 = (Gtk.CheckButton) workbench.builder.get_object("radio_button_2");

    radio_button_1.toggled.connect(() => {
        if (radio_button_1.active) {
            print("Force Light Mode\n");
        }
    });

    radio_button_2.toggled.connect(() => {
        if (radio_button_2.active) {
            print("Force Dark Mode\n");
        }
    });
}

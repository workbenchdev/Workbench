#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main() {
    var switch_on = (Gtk.Switch) workbench.builder.get_object("switch_on");
    var label_on = (Gtk.Label) workbench.builder.get_object("label_on");

    var switch_off = (Gtk.Switch) workbench.builder.get_object("switch_off");
    var label_off = (Gtk.Label) workbench.builder.get_object("label_off");

    switch_on.notify["active"].connect(() => {
        label_on.label = switch_on.active ? "On" : "Off";
        switch_off.active = !switch_on.active;
    });

    switch_off.notify["active"].connect(() => {
        label_off.label = switch_off.active ? "On" : "Off";
        switch_on.active = !switch_off.active;
    });
}

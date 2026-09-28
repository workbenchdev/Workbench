#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main () {
    var basic_label = (Gtk.Label) workbench.builder.get_object ("basic_label");
    basic_label.add_css_class ("my_custom_class");
}

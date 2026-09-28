#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main () {
    var picture_one = (Gtk.Picture) workbench.builder.get_object ("picture_one");
    var picture_two = (Gtk.Picture) workbench.builder.get_object ("picture_two");

    var file = File.new_for_uri (workbench.resolve ("./image.png"));

    picture_one.file = file;
    picture_two.file = file;
}

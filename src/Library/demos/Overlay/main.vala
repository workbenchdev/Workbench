#! /usr/bin/env -S vala workbench.vala --pkg gio-2.0 --pkg gtk4

public void main () {
  var file = File.new_for_uri(workbench.resolve("./image.png"));

  var picture = (Gtk.Picture) workbench.builder.get_object("picture");
  picture.file = file;
}

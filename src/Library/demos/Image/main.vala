#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var image_file = File.new_for_uri (workbench.resolve ("workbench.png"));
  string path = image_file.get_path ();

  var icon1 = (Gtk.Image) workbench.builder.get_object ("icon1");
  var icon2 = (Gtk.Image) workbench.builder.get_object ("icon2");
  var icon3 = (Gtk.Image) workbench.builder.get_object ("icon3");

  icon1.file = path;
  icon2.file = path;
  icon3.file = path;
}

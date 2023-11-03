#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var picture_fill = (Gtk.Picture) workbench.builder.get_object ("picture_fill");
  var picture_contain = (Gtk.Picture) workbench.builder.get_object ("picture_contain");
  var picture_cover = (Gtk.Picture) workbench.builder.get_object ("picture_cover");
  var picture_scale_down = (Gtk.Picture) workbench.builder.get_object ("picture_scale_down");

  var file = File.new_for_uri (workbench.resolve ("./keys.png"));

  picture_fill.file = file;
  picture_contain.file = file;
  picture_cover.file = file;
  picture_scale_down.file = file;
}

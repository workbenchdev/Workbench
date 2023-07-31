#!/usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
  Gtk.init ();

  var button = (Gtk.Button) workbench.builder.get_object ("button");
  var spinner = (Gtk.Spinner) workbench.builder.get_object ("spinner");

  button.clicked.connect (() => {
    if (spinner.spinning) {
      button.icon_name = "media-playback-start";
      spinner.spinning = false;
    } else {
      button.icon_name = "media-playback-pause";
      spinner.spinning = true;
    }
  });
}

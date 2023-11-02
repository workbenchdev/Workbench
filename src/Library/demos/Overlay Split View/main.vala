#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var split_view = (Adw.OverlaySplitView) workbench.builder.get_object ("split_view");
  var start_toggle = (Gtk.ToggleButton) workbench.builder.get_object ("start_toggle");
  var end_toggle = (Gtk.ToggleButton) workbench.builder.get_object ("end_toggle");

  start_toggle.toggled.connect (() => split_view.sidebar_position = START);
  end_toggle.toggled.connect (() => split_view.sidebar_position = END);
}

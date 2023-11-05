#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.Box interactive_box;
private int count = 0;

public void main () {
  interactive_box = (Gtk.Box) workbench.builder.get_object ("interactive_box");
  var button_append = (Gtk.Button) workbench.builder.get_object ("button_append");
  var button_prepend = (Gtk.Button) workbench.builder.get_object ("button_prepend");
  var button_remove = (Gtk.Button) workbench.builder.get_object ("button_remove");

  button_append.clicked.connect (append);
  button_prepend.clicked.connect (prepend);
  button_remove.clicked.connect (remove_child);

  var toggle_orientation_horizontal = (Gtk.ToggleButton) workbench.builder.get_object (
    "toggle_orientation_horizontal"
  );

  toggle_orientation_horizontal.toggled.connect (() => {
    if (toggle_orientation_horizontal.active) {
      interactive_box.orientation = HORIZONTAL;
    } else {
      interactive_box.orientation = VERTICAL;
    }
  });

  var highlight = (Gtk.CheckButton) workbench.builder.get_object ("highlight");
  highlight.toggled.connect (() => {
    if (highlight.active) {
      interactive_box.add_css_class ("border");
    } else {
      interactive_box.remove_css_class ("border");
    }
  });

  var halign_toggle_fill = (Gtk.ToggleButton) workbench.builder.get_object ("halign_toggle_fill");
  var halign_toggle_start = (Gtk.ToggleButton) workbench.builder.get_object ("halign_toggle_start");
  var halign_toggle_end = (Gtk.ToggleButton) workbench.builder.get_object ("halign_toggle_end");
  var halign_toggle_center = (Gtk.ToggleButton) workbench.builder.get_object ("halign_toggle_center");

  halign_toggle_fill.toggled.connect (() => {
    if (halign_toggle_fill.active) {
      interactive_box.halign = FILL;
    }
  });

  halign_toggle_start.toggled.connect (() => {
    if (halign_toggle_start.active) {
      interactive_box.halign = START;
    }
  });

  halign_toggle_end.toggled.connect (() => {
    if (halign_toggle_end.active) {
      interactive_box.halign = END;
    }
  });

  halign_toggle_center.toggled.connect (() => {
    if (halign_toggle_center.active) {
      interactive_box.halign = CENTER;
    }
  });

  var valign_toggle_fill = (Gtk.ToggleButton) workbench.builder.get_object ("valign_toggle_fill");
  var valign_toggle_start = (Gtk.ToggleButton) workbench.builder.get_object ("valign_toggle_start");
  var valign_toggle_end = (Gtk.ToggleButton) workbench.builder.get_object ("valign_toggle_end");
  var valign_toggle_center = (Gtk.ToggleButton) workbench.builder.get_object ("valign_toggle_center");

  valign_toggle_fill.toggled.connect (() => {
    if (valign_toggle_fill.active) {
      interactive_box.valign = FILL;
    }
  });

  valign_toggle_start.toggled.connect (() => {
    if (valign_toggle_start.active) {
      interactive_box.valign = START;
    }
  });

  valign_toggle_end.toggled.connect (() => {
    if (valign_toggle_end.active) {
      interactive_box.valign = END;
    }
  });

  valign_toggle_center.toggled.connect (() => {
    if (valign_toggle_center.active) {
      interactive_box.valign = CENTER;
    }
  });
}

private void append () {
  count++;
  var label = new Gtk.Label (@"Item $count") {
    name = "card",
    css_classes = { "card" }
  };
  interactive_box.append (label);
}

private void prepend () {
  count++;
  var label = new Gtk.Label (@"Item $count") {
    name = "card",
    css_classes = { "card" }
  };
  interactive_box.prepend (label);
}

private void remove_child () {
  if (count > 0) {
    interactive_box.remove (interactive_box.get_last_child ());
    count--;
  } else {
    message ("This box has no child widget to remove");
  }
}

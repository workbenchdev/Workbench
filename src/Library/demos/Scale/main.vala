#!/usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

private Gtk.Scale scale_one;
private Gtk.Scale scale_two;
private Gtk.ScaleButton scale_button;

public void main () {
  scale_one = (Gtk.Scale) workbench.builder.get_object ("one");
  scale_two = (Gtk.Scale) workbench.builder.get_object ("two");
  scale_button = (Gtk.ScaleButton) workbench.builder.get_object("button");

  string[] marks = { "A", "B", "C" };
  string[] volume_icons = {
    "audio-volume-muted-symbolic",
    "audio-volume-high-symbolic",
    "audio-volume-low-symbolic",
    "audio-volume-medium-symbolic"
  };

  for (int i = 0; i < marks.length; i++) {
    scale_two.add_mark(i * 50, Gtk.PositionType.RIGHT, marks[i]);
  }

  scale_two.set_increments(25, 100);

  scale_one.value_changed.connect(() => {
    var scale_value = scale_one.get_value ();
    if (scale_value == scale_one.adjustment.upper) {
      message ("Maximum value reached");
    } else if (scale_value == scale_one.adjustment.lower) {
      message ("Minimum value reached");
    }
  });

  scale_two.value_changed.connect(() => {
    double scale_value = scale_two.get_value ();

    // Check if indicator is on mark
    scale_value /= 50;
    if (scale_value % 1 != 0) return;

    var label = marks[(int) scale_value];
    if (label == null) return;

    message (@"Mark $(label) reached");
  });

  scale_button.set_icons(volume_icons);
}

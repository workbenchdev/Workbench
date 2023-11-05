#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

/*
 * Pango is a text layout library. It can e.g. be used for formatting text
 * https://valadoc.org/pango/Pango.html
 */

private Gtk.Label label;

public void main () {
  label = (Gtk.Label) workbench.builder.get_object ("label");
  label.notify["label"].connect (update_attributes);
  update_attributes ();
}

private void update_attributes () {
  label.attributes = rainbow_attributes (label.label);
}

private Pango.AttrList rainbow_attributes (string text) {
  string[] rainbow_colors = { "#D00", "#C50", "#E90", "#090", "#24E", "#55E", "#C3C" };

  var color_array = new GenericArray<string> ();
  int i = 0;

  // Create a color array with the length neeed to color all the letters
  while (i < text.length) {
    foreach (string color in rainbow_colors) {
      color_array.add (color);
    }
    i += rainbow_colors.length;
  }

  // Independent variable from `index` in the following loop to avoid spaces "consuming" a color
  int color_index = 0;
  var builder = new StringBuilder ();

  for (int index = 0; index < text.length; index++) {
    // Skip space characters
    if (text[index].isspace ()) {
      continue;
    }

    int start_index = index, end_index = index + 1;
    string color = color_array[color_index];
    builder.append (@"$start_index $end_index foreground $color,");

    color_index++;
  }

  return Pango.AttrList.from_string (builder.str);
}

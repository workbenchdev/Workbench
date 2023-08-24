#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Xdp.Portal portal;
private Xdp.Parent parent;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);

  var button = (Gtk.Button) workbench.builder.get_object ("button");
  button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  try {
    // result is a variant of the form (ddd), containing red green and blue components in the range [0,1]
    Variant result = yield portal.pick_color (parent, null);

    double r, g, b;
    VariantIter iter = result.iterator ();             // Iterate over the array in the variant
    iter.next ("d", out r);
    iter.next ("d", out g);
    iter.next ("d", out b);

    var color = Gdk.RGBA () {
      red = (float) r,
      green = (float) g,
      blue = (float) b,
      alpha = 1.0f
    };

    message (@"Selected color is $color");
  } catch (Error e) {
    critical (e.message);
  }
}

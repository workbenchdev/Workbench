#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Xdp.Portal portal;
private Xdp.Parent parent;
private string image_uri;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);
  image_uri = workbench.resolve ("./wallpaper.png");

  var button = (Gtk.Button) workbench.builder.get_object ("button");
  button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  try {
    bool success = yield portal.set_wallpaper (
      parent,
      image_uri,
      PREVIEW | BACKGROUND | LOCKSCREEN,
      null
      );

    if (success) {
      message ("Wallpaper set successfully");
      return;
    }
    message ("Could not set wallpaper");
  } catch (Error e) {
    critical (e.message);
  }
}

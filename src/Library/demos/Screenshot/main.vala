#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Xdp.Portal portal;
private Xdp.Parent parent;
private Gtk.Picture picture;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);
  picture = (Gtk.Picture) workbench.builder.get_object ("picture");

  var button = (Gtk.Button) workbench.builder.get_object ("button");
  button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  try {
    string uri = yield portal.take_screenshot (parent, NONE, null);
    picture.file = File.new_for_uri (uri);
  } catch (Error e) {
    show_permission_error ();
  }
}

private void show_permission_error () {
  var dialog = new Adw.MessageDialog (
    workbench.window,
    "Permission Error",
    "Ensure Screenshot permission is enabled in\nSettings → Apps → Workbench"
    ) {
    close_response = "ok",
    modal = true,
  };

  dialog.add_response ("ok", "OK");
  dialog.present ();
}

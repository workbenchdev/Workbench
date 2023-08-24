#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Xdp.Portal portal;
private Xdp.Parent parent;
private Gtk.Entry entry;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);

  entry = (Gtk.Entry) workbench.builder.get_object ("entry");
  var button = (Gtk.Button) workbench.builder.get_object ("button");
  button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  string email_address = entry.text;

  try {
    bool success = yield portal.compose_email (
      parent,
      { email_address },                   // addresses
      null,                   // cc
      null,                   // bcc
      "Email from Workbench",                   // subject
      "Hello World!",                   // body
      null,
      NONE,
      null
      );

    if (success) {
      message ("Success");
      return;
    }
    message ("Failure: verify that you have an email application.");
  } catch (Error e) {
    critical (e.message);
  }
}

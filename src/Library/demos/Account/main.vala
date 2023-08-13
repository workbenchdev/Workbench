#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Gtk.Revealer revealer;
private Adw.EntryRow entry;
private Adw.Avatar avatar;
private Gtk.Label username;
private Gtk.Label display;
private Xdp.Portal portal;
private Xdp.Parent parent;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);

  revealer = (Gtk.Revealer) workbench.builder.get_object ("revealer");
  entry = (Adw.EntryRow) workbench.builder.get_object ("entry");
  avatar = (Adw.Avatar) workbench.builder.get_object ("avatar");
  username = (Gtk.Label) workbench.builder.get_object ("username");
  display = (Gtk.Label) workbench.builder.get_object ("name");

  var button = (Gtk.Button) workbench.builder.get_object ("button");
  button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  try {
    string reason = entry.text;
    Variant result = yield portal.get_user_information (parent, reason, NONE, null);

    /*
    * result is a Variant dictionary containing the following fields:
    * id (s): the user id
    * name (s): the users real name
    * image (s): the uri of an image file for the users avatar picture
    */

    var id = (string) result.lookup_value ("id", VariantType.STRING);
    var name = (string) result.lookup_value ("name", VariantType.STRING);
    var uri = (string) result.lookup_value ("image", VariantType.STRING);

    var file = File.new_for_uri (uri);
    var texture = Gdk.Texture.from_file (file);

    username.label = id;
    display.label = name;
    avatar.custom_image = texture;
    revealer.reveal_child = true;

    entry.text = "";
    message ("Information Retrieved");
  } catch (Error e) {
    critical (e.message);
  }
}

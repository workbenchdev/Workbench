#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
  var button_confirmation = workbench.builder.get_object("button_confirmation") as Gtk.Button;
  var button_error = workbench.builder.get_object("button_error") as Gtk.Button;
  var button_advanced = workbench.builder.get_object("button_advanced") as Gtk.Button;

  button_confirmation.clicked.connect(_create_confirmation_dialog);
  button_error.clicked.connect(_create_error_dialog);
  button_advanced.clicked.connect(_create_advanced_dialog);
}

private void _create_confirmation_dialog (Gtk.Button button) {
  // Get the parent window
  var window_type = GLib.Type.from_name("GtkWindow");
  Gtk.Window window = button.get_ancestor(window_type) as Gtk.Window;

  Adw.MessageDialog dialog = new Adw.MessageDialog
    (window,
    "Replace File?",
    """A file named "example.png" already exists. Do you want to replace it?""");

  dialog.close_response = "replace";

  dialog.add_response("cancel", "Cancel");
  dialog.add_response("replace", "Replace");

  //Use DESTRUCTIVE to draw attention to the potentially damaging consequences of using response.
  dialog.set_response_appearance("replace", Adw.ResponseAppearance.DESTRUCTIVE);

  dialog.response.connect((response) => {
    message("Selected \"%s\" response.\n", response);
  });

dialog.present();

}

private void _create_error_dialog (Gtk.Button button) {
  // Get the parent window
  var window_type = GLib.Type.from_name("GtkWindow");
  Gtk.Window window = button.get_ancestor(window_type) as Gtk.Window;

  Adw.MessageDialog dialog = new Adw.MessageDialog
    (window,
    "Critical Error",
    "You did something you should not have");

  dialog.close_response = "okay";

  dialog.add_response("okay", "Okay");

  dialog.response.connect((response) => {
    message("Selected \"%s\" response.\n", response);
  });

dialog.present();

}

private void _create_advanced_dialog(Gtk.Button button) {
  // Get the parent window
  var window_type = GLib.Type.from_name("GtkWindow");
  Gtk.Window window = button.get_ancestor(window_type) as Gtk.Window;

  Adw.MessageDialog dialog = new Adw.MessageDialog (
    window,
    "Login",
    "A valid password is needed to continue");

  dialog.close_response = "cancel";
  dialog.add_response("cancel", "Cancel");
  dialog.add_response("login", "Login");
  dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED);

  var entry = new Gtk.PasswordEntry() {show_peek_icon = true};

  dialog.set_extra_child(entry);

  dialog.response.connect((response) => {
    if (dialog.get_response_label(response) == "Login") {
      message("Selected \"%s\" response with password \"%s\".", response, entry.get_text());
    } else {
      message("Selected \"%s\" response.", response);
    }
  });

  dialog.present();
}

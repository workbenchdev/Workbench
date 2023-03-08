#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
  var button_simple = workbench.builder.get_object("button_simple") as Gtk.Button;
  var button_advanced = workbench.builder.get_object("button_advanced") as Gtk.Button;

  button_simple.clicked.connect(create_simple_dialog);
  button_advanced.clicked.connect(create_advanced_dialog);
}

private void create_simple_dialog (Gtk.Button button) {
  // Get the parent window
  var window_type = GLib.Type.from_name("GtkWindow");
  Gtk.Window window = button.get_ancestor(window_type) as Gtk.Window;

  Adw.MessageDialog dialog = new Adw.MessageDialog
    (window,
    "Save Changes?",
    "Opened files have unsaved changes. Unsaved changes will be lost forever!");

  dialog.close_response = "cancel";

  //Negative responses like Cancel or Close should use the default appearance.
  dialog.add_response("cancel", "Cancel");

  //Use DESTRUCTIVE to draw attention to the potentially damaging consequences of using response.
  dialog.add_response("discard", "Discard");
  dialog.set_response_appearance("discard", Adw.ResponseAppearance.DESTRUCTIVE);

  //Use SUGGESTED to mark important responses such as the affirmative action, like the Save button in the example.
  dialog.add_response("save", "Save");
  dialog.set_response_appearance("save", Adw.ResponseAppearance.SUGGESTED);

  dialog.response.connect((response) => {
    message("Clicked \"%s\" response.\n",
    dialog.get_response_label(response));
  });

dialog.present();

}

static void create_advanced_dialog(Gtk.Button button) {
  // Get the parent window
  var window_type = GLib.Type.from_name("GtkWindow");
  Gtk.Window window = button.get_ancestor(window_type) as Gtk.Window;

  Adw.MessageDialog dialog = new Adw.MessageDialog (
    window,
    "Login",
    "A valid password is needed to continue!");

  dialog.close_response = "cancel";
  dialog.add_response("cancel", "Cancel");
  dialog.add_response("login", "Login");
  dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED);

  var entry = new Gtk.PasswordEntry();
  entry.set_show_peek_icon(true);
  dialog.set_extra_child(entry);

  dialog.response.connect((response) => {
    if (dialog.get_response_label(response) == "Login") {
      message("Clicked \"%s\" response with password \"%s\".", dialog.get_response_label(response), entry.get_text());
    } else {
      message("Clicked \"%s\" response.", dialog.get_response_label(response));
    }
  });

  dialog.present();
}


import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const button_confirmation = workbench.builder.get_object("button_confirmation");
const button_error = workbench.builder.get_object("button_error");
const button_advanced = workbench.builder.get_object("button_advanced");
const window = button_confirmation.get_ancestor(Gtk.Window);

function createConfirmationDialog() {
  let dialog = new Adw.MessageDialog({
    heading: "Replace File?",
    body: 'A file named "example.png" already exists. Do you want to replace it?',
    close_response: "cancel",
    modal: true,
    transient_for: window,
  });

  dialog.add_response("cancel", "Cancel");
  dialog.add_response("replace", "Replace");

  // Use DESTRUCTIVE appearance to draw attention to the potentially damaging consequences of this action
  dialog.set_response_appearance("replace", Adw.ResponseAppearance.DESTRUCTIVE);

  dialog.connect("response", (dialog, response) => {
    console.log(`Selected "${response}" response.`);
  });

  dialog.present();
}

function createErrorDialog() {
  let dialog = new Adw.MessageDialog({
    heading: "Critical Error",
    body: "You did something you should not have",
    close_response: "okay",
    modal: true,
    transient_for: window,
  });

  dialog.add_response("okay", "Okay");

  dialog.connect("response", (dialog, response) => {
    console.log(`Selected "${response}" response.`);
  });

  dialog.present();
}

//Creates a message dialog with an extra child
function createAdvancedDialog() {
  let dialog = new Adw.MessageDialog({
    heading: "Login",
    body: "A valid password is needed to continue",
    close_response: "cancel",
    modal: true,
    transient_for: window,
  });

  dialog.add_response("cancel", "Cancel");
  dialog.add_response("login", "Login");

  // Use SUGGESTED appearance to mark important responses such as the affirmative action
  dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED);

  let entry = new Gtk.PasswordEntry({
    show_peek_icon: true,
  });

  dialog.set_extra_child(entry);

  dialog.connect("response", (dialog, response) => {
    if (dialog.get_response_label(response) === "Login") {
      console.log(
        `Selected "${response}" response with password "${entry.get_text()}"`,
      );
    } else {
      console.log(`Selected "${response}" response.`);
    }
  });

  dialog.present();
}

button_confirmation.connect("clicked", createConfirmationDialog);
button_error.connect("clicked", createErrorDialog);
button_advanced.connect("clicked", createAdvancedDialog);

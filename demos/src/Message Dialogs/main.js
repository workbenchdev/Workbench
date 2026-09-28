import Adw from "gi://Adw";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk?version=4.0";

Gio._promisify(Adw.AlertDialog.prototype, "choose", "choose_finish");

const button_confirmation = workbench.builder.get_object("button_confirmation");
const button_error = workbench.builder.get_object("button_error");
const button_advanced = workbench.builder.get_object("button_advanced");

async function createConfirmationDialog() {
  const dialog = new Adw.AlertDialog({
    heading: "Replace File?",
    body: "A file named “example.png” already exists. Do you want to replace it?",
    close_response: "cancel",
  });

  dialog.add_response("cancel", "Cancel");
  dialog.add_response("replace", "Replace");

  // Use DESTRUCTIVE appearance to draw attention to the potentially damaging consequences of this action
  dialog.set_response_appearance("replace", Adw.ResponseAppearance.DESTRUCTIVE);

  const response = await dialog.choose(workbench.window, null);
  console.log(`Selected "${response}" response.`);
}

async function createErrorDialog() {
  const dialog = new Adw.AlertDialog({
    heading: "Critical Error",
    body: "Something unexpected happened",
    close_response: "okay",
  });

  dialog.add_response("okay", "Okay");

  const response = await dialog.choose(workbench.window, null);
  console.log(`Selected "${response}" response.`);
}

async function createAdvancedDialog() {
  const dialog = new Adw.AlertDialog({
    heading: "Login",
    body: "A valid password is needed to continue",
    close_response: "cancel",
  });

  dialog.add_response("cancel", "Cancel");
  dialog.add_response("login", "Login");

  // Use SUGGESTED appearance to mark important responses such as the affirmative action
  dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED);

  const entry = new Gtk.PasswordEntry({
    show_peek_icon: true,
  });

  dialog.set_extra_child(entry);

  const response = await dialog.choose(workbench.window, null);
  if (response === "login") {
    console.log(
      `Selected "${response}" response with password "${entry.get_text()}"`,
    );
  } else {
    console.log(`Selected "${response}" response.`);
  }
}

button_confirmation.connect("clicked", () => {
  createConfirmationDialog().catch(console.error);
});
button_error.connect("clicked", () => {
  createErrorDialog().catch(console.error);
});
button_advanced.connect("clicked", () => {
  createAdvancedDialog().catch(console.error);
});

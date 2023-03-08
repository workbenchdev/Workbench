import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const button_simple = workbench.builder.get_object("button_simple");
const button_advanced = workbench.builder.get_object("button_advanced");
const window = button_simple.get_ancestor(Gtk.Window);

function createSimpleDialog() {
  let dialog = new Adw.MessageDialog({
    heading: "Save Changes?",
    body: "Opened files have unsaved changes. Unsaved changes will be lost forever!",
    close_response: "cancel",
    modal: true,
  });

  // Make the dialog transient over the main window
  dialog.set_transient_for(window);

  //Negative responses like Cancel or Close should use the default appearance.
  dialog.add_response("cancel", "Cancel");

  //Use DESTRUCTIVE to draw attention to the potentially damaging consequences of using response.
  dialog.add_response("discard", "Discard");
  dialog.set_response_appearance("discard", Adw.ResponseAppearance.DESTRUCTIVE);

  dialog.add_response("save", "Save");
  // Use SUGGESTED appearance to mark important responses such as the affirmative action
  dialog.set_response_appearance("save", Adw.ResponseAppearance.SUGGESTED);

  dialog.connect("response", (dialog, response) => {
    console.log(`Clicked "${dialog.get_response_label(response)}" response.`);
  });

  dialog.present();
}

//Creates a message dialog with an extra child
function createAdvancedDialog() {
  let dialog = new Adw.MessageDialog({
    heading: "Login",
    body: "A valid password is needed to continue!",
    close_response: "cancel",
    modal: true,
  });

  dialog.set_transient_for(window);
  dialog.add_response("cancel", "Cancel");
  dialog.add_response("login", "Login");
  dialog.set_response_appearance("login", Adw.ResponseAppearance.SUGGESTED);

  let entry = new Gtk.PasswordEntry();
  entry.set_show_peek_icon(true);

  dialog.set_extra_child(entry);

  dialog.connect("response", (dialog, response) => {
    if (dialog.get_response_label(response) === "Login") {
      console.log(`Clicked "${dialog.get_response_label(response)}" response with password "${entry.get_text()}"`);
    } else {
      console.log(`Clicked "${dialog.get_response_label(response)}" response.`);
    }
  });

  dialog.present();
}

button_simple.connect("clicked", createSimpleDialog);
button_advanced.connect("clicked", createAdvancedDialog);


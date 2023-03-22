import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

Gio._promisify(Gtk.AlertDialog.prototype, "choose", "choose_finish");

const custom_button = workbench.builder.get_object("custom_button");

const dialog_custom = new Gtk.AlertDialog({
  message: "Alert",
  modal: true,
  detail: "This is an alert message",
  buttons: ["OK", "Cancel"],
  default_button: 0,
  cancel_button: 1,
});

custom_button.connect("clicked", async () => {
  try {
    const index = await dialog_custom.choose(workbench.window, null);
    if (index === 0) {
      console.log("Ok was pressed");
    } else if (index === 1) {
      console.log("Cancel was pressed");
    }
  } catch (err) {
    logError(err);
  }
});

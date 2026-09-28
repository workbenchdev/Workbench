import Adw from "gi://Adw";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk?version=4.0";

Gio._promisify(Adw.AlertDialog.prototype, "choose", "choose_finish");

const box = workbench.builder.get_object("subtitle");

const button = new Gtk.Button({
  label: "Press me",
  margin_top: 6,
  css_classes: ["suggested-action"],
});
button.connect("clicked", () => {
  greet().catch(console.error);
});
box.append(button);

console.log("Welcome to Workbench!");

async function greet() {
  const dialog = new Adw.AlertDialog({
    body: "Hello World!",
  });

  dialog.add_response("ok", "OK");

  const response = await dialog.choose(workbench.window, null);
  console.log(response);
}

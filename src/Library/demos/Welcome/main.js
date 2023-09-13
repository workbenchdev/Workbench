import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gio from "gi://Gio";

Gio._promisify(Adw.MessageDialog.prototype, "choose", "choose_finish");

const box = workbench.builder.get_object("subtitle");

// https://gjs-docs.gnome.org/gtk40/gtk.button
const button = new Gtk.Button({
  label: "Press me",
  margin_top: 6,
  css_classes: ["suggested-action"],
});
button.connect("clicked", () => {
  greet().catch((err)=>{
    console.error(err);
  });
});
box.append(button);

console.log("Welcome to Workbench!");

async function greet() {
  // https://gjs-docs.gnome.org/adw1~1/adw.messagedialog
  const dialog = new Adw.MessageDialog({
    body: "Hello World!",
    transient_for: workbench.window,
  });

  dialog.add_response("ok", "OK");

  const response = await dialog.choose(null);
  console.log(response);
}

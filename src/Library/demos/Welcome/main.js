import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

const subtitle_box = workbench.builder.get_object("subtitle");

// https://gjs-docs.gnome.org/gtk40/gtk.button
const button = new Gtk.Button({
  label: "Press me",
  margin_top: 6,
  css_classes: ["suggested-action"],
});
button.connect("clicked", greet);
subtitle_box.append(button);

console.log("Welcome to Workbench!");

function greet() {
  // https://gjs-docs.gnome.org/gtk40/gtk.messagedialog
  const dialog = new Gtk.MessageDialog({
    text: "Hello World!",
    transient_for: workbench.window,
    modal: true,
    // https://gjs-docs.gnome.org/gtk40/gtk.buttonstype
    buttons: Gtk.ButtonsType.OK,
  });

  /*
   * Gtk.MessageDialog inherits from Gtk.Dialog
   * which possess a "response" signal
   * https://gjs-docs.gnome.org/gtk40/gtk.dialog#signal-response
   */
  dialog.connect("response", () => {
    dialog.close();
  });

  dialog.present();
}

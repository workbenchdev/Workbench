import Gtk from "gi://Gtk";

const main = workbench.builder.get_object("main");

// https://gjs-docs.gnome.org/gtk40/gtk.button
const button = new Gtk.Button({
  label: "Press me",
});
button.connect("clicked", greet);
main.append(button);

function greet() {
  // https://gjs-docs.gnome.org/gtk40/gtk.messagedialog
  const dialog = new Gtk.MessageDialog({
    text: "Hello World!",
    transient_for: workbench.window,
  });
  dialog.present();
}

console.log("Welcome to Workbench!");

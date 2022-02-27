import Gtk from "gi://Gtk";

// https://gjs-docs.gnome.org/gtk40/gtk.button
const button = new Gtk.Button({
  label: "Press me",
});
button.connect("clicked", greet);
workbench.get_child().get_first_child().append(button);

function greet() {
  // https://gjs-docs.gnome.org/gtk40/gtk.messagedialog
  const dialog = new Gtk.MessageDialog({
    text: "Hello World!",
  });
  dialog.present();
}

console.log("Welcome to Workbench!");

import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

Gio._promisify(Gtk.FileDialog.prototype, "save", "save_finish");
const button = workbench.builder.get_object("button");

async function saveFile() {
  const dialog = new Gtk.FileDialog({
    initial_name: "Workbench.txt",
  });
  // "save" returns a Gio.File you can write to
  const file = await dialog.save(workbench.window, null);
  console.log(`Save file to ${file.get_path()}`);
}

// Handle button click
button.connect("clicked", () => {
  saveFile().catch(logError);
});

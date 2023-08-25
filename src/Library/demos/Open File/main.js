import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");
Gio._promisify(
  Gtk.FileDialog.prototype,
  "open_multiple",
  "open_multiple_finish",
);
const button = workbench.builder.get_object("button");

async function openFile() {
  const default_dir = Gio.File.new_for_path(
    GLib.get_user_special_dir(GLib.UserDirectory.DIRECTORY_DOWNLOAD),
  );
  const dialog_for_file = new Gtk.FileDialog({
    initial_folder: default_dir,
  });
  const file = await dialog_for_file.open(workbench.window, null);
  const info = file.query_info(
    "standard::name",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );
  console.log(`Selected File: ${info.get_name()}`);
}

// Handle button click
button.connect("clicked", () => {
  openFile().catch(logError);
});

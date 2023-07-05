import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");

const button = workbench.builder.get_object("button");

const dialog = new Gtk.FileDialog({
  title: "Select an Avatar",
  modal: true,
});

button.connect("clicked", () => {
  onClicked().catch(logError);
});

async function onClicked() {
  const file = await dialog.open(workbench.window, null);
  const info = file.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected File: ${info.get_name()}`);
}

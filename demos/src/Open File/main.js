import Gio from "gi://Gio";
import Gtk from "gi://Gtk?version=4.0";

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");
Gio._promisify(
  Gtk.FileDialog.prototype,
  "open_multiple",
  "open_multiple_finish",
);

const button_single = workbench.builder.get_object("button_single");
const button_image = workbench.builder.get_object("button_image");
const button_multiple = workbench.builder.get_object("button_multiple");
const file_filter_image = workbench.builder.get_object("file_filter_image");

async function openFile() {
  const file_dialog = new Gtk.FileDialog();
  const file = await file_dialog.open(workbench.window, null);
  console.log("Selected File:", getFileName(file));
}

async function openImageFile() {
  const file_dialog = new Gtk.FileDialog({ default_filter: file_filter_image });
  const file = await file_dialog.open(workbench.window, null);
  console.log("Selected Image:", getFileName(file));
}

async function openMultipleFiles() {
  const file_dialog = new Gtk.FileDialog();
  const files = await file_dialog.open_multiple(workbench.window, null);
  console.log(`Selected Files (${files.get_n_items()}):`);
  for (const file of files) {
    console.log("  ", getFileName(file));
  }
}

button_single.connect("clicked", () => {
  openFile().catch(console.error);
});

button_image.connect("clicked", () => {
  openImageFile().catch(console.error);
});

button_multiple.connect("clicked", () => {
  openMultipleFiles().catch(console.error);
});

function getFileName(file) {
  const info = file.query_info(
    "standard::name",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );
  return info.get_name();
}

import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

Gio._promisify(
  Gtk.FileDialog.prototype,
  "select_folder",
  "select_folder_finish",
);
Gio._promisify(
  Gtk.FileDialog.prototype,
  "select_multiple_folders",
  "select_multiple_folders_finish",
);

const button_single = workbench.builder.get_object("button_single");
const button_multiple = workbench.builder.get_object("button_multiple");

async function selectFolder() {
  const dialog_for_folder = new Gtk.FileDialog();
  const file = await dialog_for_folder.select_folder(workbench.window, null);
  const info = file.query_info(
    "standard::name",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );
  console.log(`"${info.get_name()}" selected`);
}

async function selectMultipleFolders() {
  const dialog = new Gtk.FileDialog();
  const folders = await dialog.select_multiple_folders(workbench.window, null);
  const selected_items_count = folders.get_n_items();
  console.log(`${selected_items_count} selected folders`);
}

button_single.connect("clicked", () => {
  selectFolder().catch(console.error);
});

button_multiple.connect("clicked", () => {
  selectMultipleFolders().catch(console.error);
});

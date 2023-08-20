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
Gio._promisify(Gtk.FileDialog.prototype, "save", "save_finish");
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

const button = workbench.builder.get_object("button");
const dropdown_mode = workbench.builder.get_object("dropdown_mode");

button.connect("clicked", () => {
  switch (dropdown_mode.selected) {
    case 0:
      openFile().catch(logError);
      break;
    case 1:
      openMultipleFiles().catch(logError);
      break;
    case 2:
      selectFolder().catch(logError);
      break;
    case 3:
      selectMultipleFolders().catch(logError);
      break;
    case 4:
      saveFile().catch(logError);
      break;
  }
});

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

async function openMultipleFiles() {
  const dialog_for_multiple_files = new Gtk.FileDialog();
  const files = await dialog_for_multiple_files.open_multiple(
    workbench.window,
    null,
  );
  const selected_items_count = files.get_n_items();
  console.log(`No of selected files: ${selected_items_count}`);
}

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

async function saveFile() {
  const dialog = new Gtk.FileDialog({
    initial_name: "Workbench.txt",
  });
  // "save" returns a Gio.File you can write to
  const file = await dialog.save(workbench.window, null);
  console.log(`Save file to ${file.get_path()}`);
}


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
const select_mode = workbench.builder.get_object("select_mode");

let selected_mode = select_mode.selected_item.get_string();
select_mode.connect("notify::selected-item", () => {
  selected_mode = select_mode.selected_item.get_string();
  console.log(`Mode: ${selected_mode}`);
});

button.connect("clicked", () => {
  switch (selected_mode) {
    case "Select File":
      openFile().catch(logError);
      break;
    case "Select Multiple Files":
      openMultipleFiles().catch(logError);
      break;
    case "Select Folder":
      selectFolder().catch(logError);
      break;
    case "Select Multiple Folders":
      selectMultipleFolders().catch(logError);
      break;
    case "Save File":
      saveFile().catch(logError);
      break;
    default:
      console.log("Invalid mode selected.");
  }
});

async function openFile() {
  const default_dir = Gio.File.new_for_path(
    GLib.get_user_special_dir(GLib.UserDirectory.DIRECTORY_DOWNLOAD),
  );
  const dialog_for_file = new Gtk.FileDialog({
    title: _("Select File"),
    modal: true,
    initial_folder: default_dir,
  });
  const file = await dialog_for_file.open(workbench.window, null);
  const info = file.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected File: ${info.get_name()}`);
}

async function openMultipleFiles() {
  const dialog_for_multiple_files = new Gtk.FileDialog({
    title: _("Select File(s)"),
    modal: true,
  });
  const files = await dialog_for_multiple_files.open_multiple(
    workbench.window,
    null,
  );
  const selected_items_count = files.get_n_items();
  console.log(`No of selected files: ${selected_items_count}`);
}

async function selectFolder() {
  const dialog_for_folder = new Gtk.FileDialog({
    title: _("Select Folder"),
    modal: true,
  });
  const folder = await dialog_for_folder.select_folder(workbench.window, null);
  const info = folder.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected Folder: ${info.get_name()}`);
}

async function selectMultipleFolders() {
  const dialog_for_multiple_folders = new Gtk.FileDialog({
    title: _("Select Folder(s)"),
    modal: true,
  });
  const folders = await dialog_for_multiple_folders.select_multiple_folders(
    workbench.window,
    null,
  );
  const selected_items_count = folders.get_n_items();
  console.log(`No of selected folders: ${selected_items_count}`);
}

async function saveFile() {
  const dialog_for_save = new Gtk.FileDialog({
    title: _("Save File"),
    modal: true,
  });
  const file = await dialog_for_save.save(workbench.window, null);
  console.log("Operation complete");
}

import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

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

const dialog_for_file = new Gtk.FileDialog({
  title: _("Select File(s)"),
  modal: true,
});

const dialog_for_folder = new Gtk.FileDialog({
  title: _("Select Folder(s)"),
  modal: true,
});

const dialog_for_save = new Gtk.FileDialog({
  title: _("Save File"),
  modal: true,
});

button.connect("clicked", () => {
  switch (selected_mode) {
    case "Select File":
      open_file().catch(logError);
      break;
    case "Select File (Folder pre-defined)":
      open_file_folder().catch(logError);
      break;
    case "Select Multiple Files":
      open_multiple_files().catch(logError);
      break;
    case "Select Folder":
      select_folder().catch(logError);
      break;
    case "Select Multiple Folders":
      select_multiple_folders().catch(logError);
      break;
    case "Save File":
      save_file().catch(logError);
      break;
    default:
      console.log("Invalid mode selected.");
  }
});

async function open_file() {
  const file = await dialog_for_file.open(workbench.window, null);
  const info = file.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected File: ${info.get_name()}`);
}

async function open_file_folder() {
  const folder = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
    "Library/demos/File Dialog/main.blp",
  );
  const parent_folder = folder.get_parent();
  dialog_for_file.initial_folder = parent_folder;
  const file = await dialog_for_file.open(workbench.window, null);
  const info = file.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected File: ${info.get_name()}`);
}

async function open_multiple_files() {
  const files = await dialog_for_file.open_multiple(workbench.window, null);
  const selected_items_count = files.get_n_items();
  console.log(`No of selected files: ${selected_items_count}`);
}

async function select_folder() {
  const folder = await dialog_for_folder.select_folder(workbench.window, null);
  const info = folder.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`Selected Folder: ${info.get_name()}`);
}

async function select_multiple_folders() {
  const folders = await dialog_for_folder.select_multiple_folders(
    workbench.window,
    null,
  );
  const selected_items_count = folders.get_n_items();
  console.log(`No of selected folders: ${selected_items_count}`);
}

async function save_file() {
  const file = await dialog_for_save.save(workbench.window, null);
  console.log("Operation complete");
}

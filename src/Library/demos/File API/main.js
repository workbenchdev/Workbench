import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

const file_name = workbench.builder.get_object("file_name");
const file_path = workbench.builder.get_object("file_path");
const file_size = workbench.builder.get_object("file_size");
const subfolders = workbench.builder.get_object("subfolders");
const subfiles = workbench.builder.get_object("subfiles");
const date_created = workbench.builder.get_object("date_created");
const date_modified = workbench.builder.get_object("date_modified");

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");

const button = workbench.builder.get_object("button");
const filter = new Gtk.FileFilter({
  name: "File",
});

const dialog = new Gtk.FileDialog({
  title: "Select a File",
  modal: true,
  default_filter: filter,
});

function getSubFolders_and_subfiles_info(File) {
  let file = File.get_parent();
  let enumerator = file.enumerate_children(
    "standard::name,standard::type",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );

  let subFoldersCount = 0;
  let subFilesCount = 0;

  let info = enumerator.next_file(null);
  while (info !== null) {
    let type = info.get_file_type();
    if (type === Gio.FileType.DIRECTORY) {
      subFoldersCount++;
    } else if (type === Gio.FileType.REGULAR) {
      subFilesCount++;
    }
    info = enumerator.next_file(null);
  }

  return {
    subFoldersCount,
    subFilesCount,
  };
}

function getDatecreatedandDatemodified(file) {
  let info = file.query_info(
    "standard::ctime,standard::mtime",
    Gio.FileQueryInfoFlags.NONE,
    null,
  );

  let createdTime = info.get_attribute_uint64(Gio.FILE_ATTRIBUTE_TIME_CREATED);
  let modifiedTime = info.get_attribute_uint64(
    Gio.FILE_ATTRIBUTE_TIME_MODIFIED,
  );

  return {
    createdTime: new Date(createdTime / 1000),
    modifiedTime: new Date(modifiedTime / 1000),
  };
}

function getDetails(file) {
  const info = file.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );

  let count_filesandfolders = getSubFolders_and_subfiles_info(file);
  let time_created_and_modified_info = getDatecreatedandDatemodified(file);
  const fileName = info.get_name();
  const fileSize = info.get_size();
  const filePath = file.get_path();

  file_name.label = fileName;
  file_path.subtitle = filePath;
  file_size.subtitle = `${fileSize.toString()} bytes`;
  subfolders.subtitle = count_filesandfolders.subFoldersCount.toString();
  subfiles.subtitle = count_filesandfolders.subFilesCount.toString();
  date_created.subtitle = time_created_and_modified_info.createdTime.toString();
  date_modified.subtitle =
    time_created_and_modified_info.modifiedTime.toString();
}

button.connect("clicked", async () => {
  try {
    const file = await dialog.open(workbench.window, null);
    getDetails(file);
    console.log(`Selected File: ${file_name.label}`);
  } catch (err) {
    logError(err);
  }
});

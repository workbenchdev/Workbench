import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

const launch_file = workbench.builder.get_object("launch_file");
const file_details = workbench.builder.get_object("file_details");
const file_location = workbench.builder.get_object("file_location");
const change_file = workbench.builder.get_object("change_file");
const uri_launch = workbench.builder.get_object("uri_launch");
const uri_details = workbench.builder.get_object("uri_details");
const change_uri = workbench.builder.get_object("change_uri");

Gio._promisify(Gtk.FileLauncher.prototype, "launch", "launch_finish");
Gio._promisify(
  Gtk.FileLauncher.prototype,
  "open_containing_folder",
  "open_containing_folder_finish",
);
Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");
Gio._promisify(Gtk.UriLauncher.prototype, "launch", "launch_finish");

const file_launcher = new Gtk.FileLauncher();
const uri_launcher = new Gtk.UriLauncher();
const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Launcher/workbench.txt",
);
file_launcher.set_file(file);
let text = "";

//File Launcher
launch_file.connect("clicked", () => {
  file_launcher.launch(workbench.window, null).catch(logError);
});

file_details.connect("clicked", () => {
  const file_info = file_launcher.get_file();
  const details = file_info.query_info(
    "standard::*",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  );
  console.log(`File: ${details.get_name()}`);
});

file_location.connect("clicked", () => {
  file_launcher.open_containing_folder(workbench.window, null).catch(logError);
});

change_file.connect("clicked", () => {
  try {
    const dialog_for_file = new Gtk.FileDialog({
      title: _("Select File"),
      modal: true,
    });
    const new_file = dialog_for_file.open(workbench.window, null);
    if (file) {
      file_launcher.set_file(new_file);
      console.log("File Changed");
    }
  } catch (err) {
    logError(err);
  }
});

// URI Launcher
uri_launch.connect("clicked", () => {
  uri_launcher.launch(workbench.window, null).catch(logError);
});
uri_details.connect("changed", () => {
  text = uri_details.get_text();

  uri_launcher.set_uri(text);

  try {
    uri_launch.sensitive = GLib.Uri.is_valid(text, GLib.UriFlags.NONE);
  } catch {
    uri_launch.sensitive = false;
  }
});

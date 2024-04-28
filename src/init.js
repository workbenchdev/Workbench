import "gi://GIRepository?version=2.0";
import Gtk from "gi://Gtk";
import Source from "gi://GtkSource";
import Adw from "gi://Adw";
import Vte from "gi://Vte";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";

Adw.init();
GObject.type_ensure(Vte.Terminal);

Gio._promisify(Adw.AlertDialog.prototype, "choose", "choose_finish");
Gio._promisify(Xdp.Portal.prototype, "trash_file", "trash_file_finish");
Gio._promisify(Xdp.Portal.prototype, "open_uri", "open_uri_finish");
Gio._promisify(Xdp.Portal.prototype, "open_file", "open_file_finish");
Gio._promisify(Xdp.Portal.prototype, "open_directory", "open_directory_finish");
Gio._promisify(Xdp.Portal.prototype, "save_files", "save_files_finish");

Gio._promisify(
  Gtk.FileDialog.prototype,
  "select_folder",
  "select_folder_finish",
);
Gio._promisify(Gtk.UriLauncher.prototype, "launch", "launch_finish");
Gio._promisify(Gtk.FileLauncher.prototype, "launch", "launch_finish");

Gio._promisify(
  Gio.InputStream.prototype,
  "read_bytes_async",
  "read_bytes_finish",
);
Gio._promisify(Gio.InputStream.prototype, "read_all_async", "read_all_finish");
Gio._promisify(Gio.InputStream.prototype, "close_async", "close_finish");
Gio._promisify(
  Gio.DataInputStream.prototype,
  "read_line_async",
  "read_line_finish",
);

Gio._promisify(Gio.OutputStream.prototype, "close_async", "close_finish");
Gio._promisify(
  Gio.OutputStream.prototype,
  "write_all_async",
  "write_all_finish",
);

Gio._promisify(Gio.Subprocess.prototype, "wait_async", "wait_finish");
Gio._promisify(
  Gio.Subprocess.prototype,
  "wait_check_async",
  "wait_check_finish",
);

Gio._promisify(
  Gio.File.prototype,
  "replace_contents_async",
  "replace_contents_finish",
);
Gio._promisify(
  Gio.File.prototype,
  "make_directory_async",
  "make_directory_finish",
);
Gio._promisify(Gio.File.prototype, "delete_async", "delete_finish");
Gio._promisify(Gio.File.prototype, "move_async", "move_finish");

Gio._promisify(Source.FileSaver.prototype, "save_async", "save_finish");
Gio._promisify(Source.FileLoader.prototype, "load_async", "load_finish");

Gio._promisify(Gio.DBusProxy, "new", "new_finish");
Gio._promisify(Gio.DBusConnection.prototype, "close", "close_finish");

Gio._promisify(
  Gio.File.prototype,
  "enumerate_children_async",
  "enumerate_children_finish",
);

Gio._promisify(
  Gio.File.prototype,
  "load_contents_async",
  "load_contents_finish",
);

Gio._promisify(
  Gio.FileEnumerator.prototype,
  "next_files_async",
  "next_files_finish",
);

Gio._promisify(Gio.File.prototype, "copy_async", "copy_finish");

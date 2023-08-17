import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Adw from "gi://Adw";

Gio._promisify(Gtk.FileLauncher.prototype, "launch", "launch_finish");

const edit_file = workbench.builder.get_object("edit_file");
const file_name = workbench.builder.get_object("file_name");
const file = Gio.File.new_for_uri(workbench.resolve("workbench.txt"));
const file_launcher = new Gtk.FileLauncher({
  always_ask: true,
  file,
});
const monitor = file.monitor(Gio.FileMonitorFlags.NONE, null);
const overlay = workbench.builder.get_object("overlay");
const details = file.query_info(
  "standard::display-name",
  Gio.FileQueryInfoFlags.NONE,
  null,
);
file_name.label = details.get_display_name();

monitor.connect("changed", () => {
  const toast = new Adw.Toast({
    title: "File modified",
    timeout: 2,
  });
  overlay.add_toast(toast);
});

edit_file.connect("clicked", () => {
  file_launcher.launch(workbench.window, null).catch(logError);
});

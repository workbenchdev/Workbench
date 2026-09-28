import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Adw, GLib, Gio, Gtk
import workbench

edit_entry = workbench.builder.get_object("edit_entry")
view_file = workbench.builder.get_object("view_file")
delete_file = workbench.builder.get_object("delete_file")
edit_file = workbench.builder.get_object("edit_file")
file_name = workbench.builder.get_object("file_name")
buffer = edit_entry.get_buffer()
file = Gio.File.new_for_uri(workbench.resolve("workbench.txt"))
file_dir = file.get_parent()
overlay = workbench.builder.get_object("overlay")
file_launcher = Gtk.FileLauncher(always_ask=True, file=file)
details = file.query_info(
    "standard::display-name",
    Gio.FileQueryInfoFlags.NONE,
    None,
)
file_name.set_label(details.get_display_name())
buffer.set_text("Start editing ... ", -1)

monitor_for_dir = file_dir.monitor(
    Gio.FileMonitorFlags.WATCH_MOVES,
    None,
)
monitor_for_file = file.monitor(Gio.FileMonitorFlags.NONE, None)


def on_file_changed(_self, _file, _other_file, event):
    if event == Gio.FileMonitorEvent.CHANGES_DONE_HINT:
        toast = Adw.Toast(title="File modified", timeout=2)
        overlay.add_toast(toast)


def on_dir_changed(_self, child, other_file, event):
    toast = Adw.Toast(
        timeout=2,
    )

    match event:
        case Gio.FileMonitorEvent.RENAMED:
            toast.set_title(
                f"{child.get_basename()} was renamed to {other_file.get_basename()}"
            )
        case Gio.FileMonitorEvent.DELETED:
            toast.set_title(f"{child.get_basename()} was deleted from the directory")
        case Gio.FileMonitorEvent.CREATED:
            toast.set_title(f"{child.get_basename()} created in the directory")

    if toast.get_title():
        overlay.add_toast(toast)


def on_edit_clicked(_button):
    bytes = GLib.Bytes(buffer.props.text.encode())
    file.replace_contents_async(
        bytes.unref_to_array(),
        None,
        False,
        Gio.FileCreateFlags.REPLACE_DESTINATION,
        None,
        None,
    )


delete_file.connect("clicked", lambda _: file.delete_async(GLib.PRIORITY_DEFAULT, None))

view_file.connect("clicked", lambda _: file_launcher.launch(workbench.window, None))

monitor_for_file.connect("changed", on_file_changed)

monitor_for_dir.connect("changed", on_dir_changed)

edit_file.connect("clicked", on_edit_clicked)

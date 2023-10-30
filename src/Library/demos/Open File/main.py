import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk, Gio, GLib
import workbench

button_single = workbench.builder.get_object("button_single")
button_multiple = workbench.builder.get_object("button_multiple")


def on_file_opened(dialog, result):
    file = dialog.open_finish(result)
    info = file.query_info(
        "standard::name",
        Gio.FileQueryInfoFlags.NONE,
        None,
    )
    print(f"Selected File: {info.get_name()}")


def open_file():
    default_dir = Gio.File.new_for_path(
        GLib.get_user_special_dir(GLib.UserDirectory.DIRECTORY_DOWNLOAD),
    )
    dialog_for_file = Gtk.FileDialog(initial_folder=default_dir)
    dialog_for_file.open(workbench.window, None, on_file_opened)


def on_multiple_files_opened(dialog, result):
    files = dialog.open_multiple_finish(result)
    selected_items_count = files.get_n_items()
    print(f"No of selected files: {selected_items_count}")


def open_multiple_files():
    dialog_for_multiple_files = Gtk.FileDialog()
    dialog_for_multiple_files.open_multiple(
        workbench.window, None, on_multiple_files_opened
    )


button_single.connect("clicked", lambda *_: open_file())
button_multiple.connect("clicked", lambda *_: open_multiple_files())

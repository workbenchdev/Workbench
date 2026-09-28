import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench


button_single = workbench.builder.get_object("button_single")
button_multiple = workbench.builder.get_object("button_multiple")


def on_single_selected(file_dialog, result):
    file = file_dialog.select_folder_finish(result)
    print(f"Selected Folder: {get_file_name(file)}")


def select_folder(_button):
    file_dialog = Gtk.FileDialog()
    file_dialog.select_folder(workbench.window, None, on_single_selected)


def on_multiple_selected(file_dialog, result):
    files = file_dialog.select_multiple_folders_finish(result)
    print(f"Selected Folders ({files.get_n_items()}):")
    for file in files:
        print(f"  {get_file_name(file)}")


def select_multiple_folders(_button):
    file_dialog = Gtk.FileDialog()
    file_dialog.select_multiple_folders(workbench.window, None, on_multiple_selected)


def get_file_name(file):
    info = file.query_info("standard::name", Gio.FileQueryInfoFlags.NONE, None)
    return info.get_name()


button_single.connect("clicked", select_folder)
button_multiple.connect("clicked", select_multiple_folders)

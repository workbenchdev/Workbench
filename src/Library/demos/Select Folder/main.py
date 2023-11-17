import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench


button_single = workbench.builder.get_object("button_single")
button_multiple = workbench.builder.get_object("button_multiple")


def on_single_selected(dialog, result):
    file = dialog.select_folder_finish(result)
    info = file.query_info(
        "standard::name",
        Gio.FileQueryInfoFlags.NONE,
        None,
    )
    print(f'"{info.get_name()}" selected')


def select_folder(button):
    dialog_for_folder = Gtk.FileDialog()
    dialog_for_folder.select_folder(workbench.window, None, on_single_selected)


button_single.connect("clicked", select_folder)


def on_multiple_selected(dialog, result):
    folders = dialog.select_multiple_folders_finish(result)
    selected_items_count = folders.get_n_items()
    print(f"{selected_items_count} selected folders")


def select_multiple_folders(button):
    dialog_for_folders = Gtk.FileDialog()
    dialog_for_folders.select_multiple_folders(
        workbench.window, None, on_multiple_selected
    )


button_multiple.connect("clicked", select_multiple_folders)

import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench

button = workbench.builder.get_object("button")


def on_output_path_selected(_dialog, result):
    # "save_finish" returns a Gio.File you can write to
    file = _dialog.save_finish(result)
    print(f"Save file to {file.get_path()}")


def save_file(button):
    dialog = Gtk.FileDialog(initial_name="Workbench.txt")
    dialog.save(workbench.window, None, on_output_path_selected)


# Handle button click
button.connect("clicked", save_file)

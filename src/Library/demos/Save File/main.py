import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench

button = workbench.builder.get_object("button")


def on_output_path_selected(dialog, result):
    # "save_finish" returns a Gio.File you can write to
    file = dialog.save_finish(result)

    contents = "Hello from Workbench!".encode("UTF-8")
    file.replace_contents(
        contents,
        etag=None,
        make_backup=False,
        flags=Gio.FileCreateFlags.NONE,
        cancellable=None,
    )
    print(f"File {file.get_basename()} saved")


def save_file(button):
    dialog = Gtk.FileDialog(initial_name="Workbench.txt")
    dialog.save(workbench.window, None, on_output_path_selected)


# Handle button click
button.connect("clicked", save_file)

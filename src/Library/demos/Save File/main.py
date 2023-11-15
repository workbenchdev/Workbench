import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench

button = workbench.builder.get_object("button")


def save_file(button):
    dialog = Gtk.FileDialog(initial_name="Workbench.txt")
    dialog.save(parent=workbench.window, cancellable=None, callback=on_save)


def on_save(dialog, result):
    # "save_finish" returns a Gio.File you can write to
    file = dialog.save_finish(result)
    contents = "Hello from Workbench!".encode("UTF-8")
    file.replace_contents_async(
        contents,
        etag=None,
        make_backup=False,
        flags=Gio.FileCreateFlags.NONE,
        cancellable=None,
        callback=on_replace_contents,
    )


def on_replace_contents(file, result):
    file.replace_contents_finish(result)
    print(f"File {file.get_basename()} saved")


# Handle button click
button.connect("clicked", save_file)

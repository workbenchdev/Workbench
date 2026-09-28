import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gly", "2")

import workbench
from gi.repository import Gdk, Gly, Gtk

file_filter = Gtk.FileFilter(name="Images", mime_types=Gly.Loader.get_mime_types())

file_dialog = Gtk.FileDialog(
    title="Select an Avatar",
    modal=True,
    default_filter=file_filter,
)

avatar_image = workbench.builder.get_object("avatar_image")
button = workbench.builder.get_object("button")

button.connect("clicked", lambda *_: on_clicked())


def on_selected(file_dialog, result):
    file = file_dialog.open_finish(result)
    texture = Gdk.Texture.new_from_file(file)
    avatar_image.set_custom_image(texture)


def on_clicked():
    file_dialog.open(workbench.window, None, on_selected)

import gi

gi.require_version("Gtk", "4.0")

from gi.repository import Gtk, Gdk, Gio
import workbench


filter = Gtk.FileFilter(name="Images")
filter.add_pixbuf_formats()

dialog = Gtk.FileDialog(
    title="Select an Avatar",
    modal=True,
    default_filter=filter,
)

avatar_image = workbench.builder.get_object("avatar_image")
button = workbench.builder.get_object("button")

button.connect("clicked", lambda *_: on_clicked())

def on_selected(_dialog, result):
    file = _dialog.open_finish(result)
    texture = Gdk.Texture.new_from_file(file)
    avatar_image.set_custom_image(texture)

def on_clicked():
    file = dialog.open(workbench.window, None, on_selected)

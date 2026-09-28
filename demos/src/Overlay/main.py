import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gio", "2.0")
from gi.repository import Gtk, Gio
import workbench

file: Gio.File = Gio.File.new_for_uri(workbench.resolve("./image.png"))

picture: Gtk.Picture = workbench.builder.get_object("picture")
picture.set_file(file)

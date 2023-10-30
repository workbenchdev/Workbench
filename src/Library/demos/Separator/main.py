import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gio", "2.0")
from gi.repository import Gtk, Gio
import workbench

picture_one: Gtk.Picture = workbench.builder.get_object("picture_one")
picture_two: Gtk.Picture = workbench.builder.get_object("picture_two")

file: Gio.File = Gio.File.new_for_uri(workbench.resolve("./image.png"))

picture_one.set_file(file)
picture_two.set_file(file)

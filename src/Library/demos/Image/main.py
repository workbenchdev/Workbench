import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gio", "2.0")
from gi.repository import Gtk, Gio
import workbench

path: Gio.File = Gio.File.new_for_uri(workbench.resolve("workbench.png")).get_path()

workbench.builder.get_object("icon1").set_from_file(path)
workbench.builder.get_object("icon2").set_from_file(path)
workbench.builder.get_object("icon3").set_from_file(path)

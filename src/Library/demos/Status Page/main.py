import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

status_page: Adw.StatusPage = workbench.builder.get_object("status_page")
child: Gtk.Box = workbench.builder.get_object("child")

status_page.set_child(child)

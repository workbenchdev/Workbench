import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

basic_label: Gtk.Label = workbench.builder.get_object("basic_label")

basic_label.add_css_class("css_text")

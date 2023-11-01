import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

radio_button_1: Gtk.CheckButton = workbench.builder.get_object("radio_button_1")
radio_button_2: Gtk.CheckButton = workbench.builder.get_object("radio_button_2")

radio_button_1.connect("toggled", lambda widget: on_toggled(widget, "Force Light Mode"))
radio_button_2.connect("toggled", lambda widget: on_toggled(widget, "Force Dark Mode"))


def on_toggled(radio_button: Gtk.CheckButton, message):
    if radio_button.get_active():
        print(message)

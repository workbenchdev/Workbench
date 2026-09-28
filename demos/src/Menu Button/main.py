import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

circular_switch: Adw.SwitchRow = workbench.builder.get_object("circular_switch")
secondary_button: Gtk.MenuButton = workbench.builder.get_object("secondary")


def update_css(_widget, _params):
    if circular_switch.get_active():
        secondary_button.add_css_class("circular")
    else:
        secondary_button.remove_css_class("circular")


circular_switch.connect("notify::active", update_css)

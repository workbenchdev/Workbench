import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

root_box: Gtk.Box = workbench.builder.get_object("root_box")
stack: Gtk.Stack = workbench.builder.get_object("stack")
navigation_row: Adw.ComboRow = workbench.builder.get_object("navigation_row")

navigation_widget = None
separator = None


def on_connect(*args):
    global navigation_widget, separator

    if navigation_row.get_selected() == 0:
        root_box.remove(navigation_widget)
        root_box.remove(separator)
        navigation_widget = Gtk.StackSwitcher(stack=stack)
        root_box.prepend(navigation_widget)
        root_box.set_orientation(Gtk.Orientation.VERTICAL)
    else:
        root_box.remove(navigation_widget)
        navigation_widget = Gtk.StackSidebar(stack=stack)
        separator = Gtk.Separator()
        root_box.prepend(separator)
        root_box.prepend(navigation_widget)
        root_box.set_orientation(Gtk.Orientation.HORIZONTAL)


if navigation_row.get_selected() == 0:
    navigation_widget = Gtk.StackSwitcher(stack=stack)
    root_box.prepend(navigation_widget)
else:
    navigation_widget = Gtk.StackSidebar(stack=stack)
    root_box.prepend(navigation_widget)

navigation_row.connect("notify::selected-item", on_connect)

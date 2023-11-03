import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

button: Gtk.Button = workbench.builder.get_object("button")


def on_query_tooltip(button, x, y, mode, tooltip):
    custom_tooltip = Gtk.Box(spacing=6)
    label = Gtk.Label(label="This is a custom tooltip")
    icon = Gtk.Image(icon_name="penguin-alt-symbolic")
    custom_tooltip.append(label)
    custom_tooltip.append(icon)

    tooltip.set_custom(custom_tooltip)
    return True


button.connect("query-tooltip", on_query_tooltip)

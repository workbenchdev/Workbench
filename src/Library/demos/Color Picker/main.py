import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
gi.require_version("Gdk", "4.0")
from gi.repository import Gdk, Gio, Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)
button = workbench.builder.get_object("button")


def on_selected(_portal, task):
    color = Gdk.RGBA()

    color.red, color.green, color.blue = _portal.pick_color_finish(task)
    color.alpha = 1

    print(f"Selected color is: {color.to_string()}")


def on_clicked(_button):
    # result is a GVariant of the form (ddd), containing red, green and blue components in the range [0,1]
    portal.pick_color(parent, None, on_selected)


button.connect("clicked", on_clicked)

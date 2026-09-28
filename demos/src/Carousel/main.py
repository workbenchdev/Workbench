import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")

from gi.repository import Adw, Gtk
import workbench

root_box = workbench.builder.get_object("root_box")
carousel = workbench.builder.get_object("carousel")
ls_switch = workbench.builder.get_object("ls_switch")
sw_switch = workbench.builder.get_object("sw_switch")
indicator_row = workbench.builder.get_object("indicator_row")
orientation_row = workbench.builder.get_object("orientation_row")

carousel.connect("page-changed", lambda *_: print("Page Changed"))

# Scroll Wheel Switch
sw_switch.set_active(carousel.get_allow_scroll_wheel())

sw_switch.connect(
    "notify::active", lambda *_: carousel.set_allow_scroll_wheel(sw_switch.get_active())
)

# Long Swipe Switch
ls_switch.set_active(carousel.get_allow_long_swipes())

ls_switch.connect(
    "notify::active", lambda *_: carousel.set_allow_long_swipes(ls_switch.get_active())
)

if indicator_row.get_selected() == 0:
    indicators = Adw.CarouselIndicatorDots(carousel=carousel)
else:
    indicators = Adw.CarouselIndicatorLines(carousel=carousel)

indicators.set_orientation(carousel.get_orientation())
root_box.append(indicators)


def on_indicator_selected(_widget, _item):
    global indicators
    root_box.remove(indicators)

    if indicator_row.get_selected() == 0:
        indicators = Adw.CarouselIndicatorDots(carousel=carousel)
    else:
        indicators = Adw.CarouselIndicatorLines(carousel=carousel)

    indicators.set_orientation(carousel.get_orientation())
    root_box.append(indicators)


def on_orientation_selected(_widget, _item):
    if orientation_row.get_selected() == 0:
        root_box.set_orientation(Gtk.Orientation.VERTICAL)
        carousel.set_orientation(Gtk.Orientation.HORIZONTAL)
        indicators.set_orientation(Gtk.Orientation.HORIZONTAL)
    else:
        root_box.set_orientation(Gtk.Orientation.HORIZONTAL)
        carousel.set_orientation(Gtk.Orientation.VERTICAL)
        indicators.set_orientation(Gtk.Orientation.VERTICAL)


indicator_row.connect("notify::selected-item", on_indicator_selected)
orientation_row.connect("notify::selected-item", on_orientation_selected)

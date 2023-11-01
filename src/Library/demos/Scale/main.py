import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

scale_one = workbench.builder.get_object("one")
scale_two = workbench.builder.get_object("two")
scale_button = workbench.builder.get_object("button")

marks = {
    0: "A",
    50: "B",
    100: "C",
}

volume_icons = [
    "audio-volume-muted-symbolic",
    "audio-volume-high-symbolic",
    "audio-volume-low-symbolic",
    "audio-volume-medium-symbolic",
]

for value, label in marks.items():
    scale_two.add_mark(value, Gtk.PositionType.RIGHT, label)

scale_two.set_increments(25, 100)


def callback1(scale):
    scale_value = scale_one.get_value()
    if scale_value == scale_one.get_adjustment().get_upper():
        print("Maximum value reached")
    elif scale_value == scale_one.get_adjustment().get_lower():
        print("Minimum value reached")

scale_one.connect("value-changed", callback1)


def callback2(scale):
    scale_value = scale_two.get_value()
    label = marks.get(scale_value)
    if label:
        print(f"Mark {label} reached")

scale_two.connect("value-changed", callback2)

scale_button.set_icons(volume_icons)

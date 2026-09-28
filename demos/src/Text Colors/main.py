# Pango is a text layout library. It can e.g. be used for formatting text
# https://gjs-docs.gnome.org/pango10~1.0/
import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Pango", "1.0")
from gi.repository import Gtk, Pango
import workbench

label: Gtk.Label = workbench.builder.get_object("label")


def update_attributes():
    # A Pango Attribute List is used to style the label
    label.set_attributes(rainbow_attributes(label.get_label()))


# Generates an Attribute List that styles the label in rainbow colors.
# The `text` parameter is needed to detect string length + position of spaces
def rainbow_attributes(text):
    rainbow_colors = (
        "#D00",
        "#C50",
        "#E90",
        "#090",
        "#24E",
        "#55E",
        "#C3C",
    )

    # Create a color array with the length needed to color all the letters
    color_array = []
    i = 0
    while i < len(text):
        color_array += rainbow_colors
        i = len(color_array)

    # Independent variable from `i` in the following loop to avoid spaces "consuming" a color
    color_idx = 0

    attr_list_string = ""
    for i in range(len(text)):
        # Skip space characters
        if text[i] != " ":
            start_idx = i
            end_idx = i + 1

            color = color_array[color_idx]
            color_idx += 1
            # See comment below
            attr_list_string += f"{start_idx} {end_idx} foreground {color},"

    # For more info about the syntax for this function, see:
    # https://docs.gtk.org/Pango/method.AttrList.to_string.html
    return Pango.attr_list_from_string(attr_list_string)


label.connect("notify::label", lambda _, __: update_attributes())
update_attributes()

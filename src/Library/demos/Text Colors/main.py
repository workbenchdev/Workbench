# Pango is a text layout library. It can e.g. be used for formatting text
# https://gjs-docs.gnome.org/pango10~1.0/
import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Pango", "1.0")
from gi.repository import Gtk, Pango
import workbench

label: Gtk.Label = workbench.builder.get_object("label")


def updateAttributes():
    # A Pango Attribute List is used to style the label
    label.set_attributes(rainbowAttributes(label.get_label()))


# Generates an Attribute List that styles the label in rainbow colors.
# The `text` parameter is needed to detect string length + position of spaces
def rainbowAttributes(text):
    RAINBOW_COLORS = (
        "#D00",
        "#C50",
        "#E90",
        "#090",
        "#24E",
        "#55E",
        "#C3C",
    )

    # Create a color array with the length needed to color all the letters
    colorArray = []
    i = 0
    while i < len(text):
        colorArray += RAINBOW_COLORS
        i = len(colorArray)

    # Independent variable from `i` in the following loop to avoid spaces "consuming" a color
    colorIdx = 0

    attrListString = ""
    for i in range(len(text)):
        # Skip space characters
        if text[i] != " ":
            startIdx = i
            endIdx = i + 1

            color = colorArray[colorIdx]
            colorIdx += 1
            # See comment below
            attrListString += f"{startIdx} {endIdx} foreground {color},"

    # For more info about the syntax for this function, see:
    # https://docs.gtk.org/Pango/method.AttrList.to_string.html
    print(attrListString)
    return Pango.attr_list_from_string(attrListString)


label.connect("notify::label", lambda _, __: updateAttributes())
updateAttributes()

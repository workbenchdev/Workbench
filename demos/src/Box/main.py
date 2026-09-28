import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

interactive_box = workbench.builder.get_object("interactive_box")
button_append = workbench.builder.get_object("button_append")
button_prepend = workbench.builder.get_object("button_prepend")
button_remove = workbench.builder.get_object("button_remove")

count = 0


def append(_button=None):
    global count
    label = Gtk.Label(
        name="card",
        label=f"Item {count + 1}",
        css_classes=["card"],
    )
    interactive_box.append(label)
    count += 1


def prepend(_button):
    global count
    label = Gtk.Label(
        name="card",
        label=f"Item {count + 1}",
        css_classes=["card"],
    )
    interactive_box.prepend(label)
    count += 1


def remove(_button):
    global count
    if count:
        interactive_box.remove(interactive_box.get_last_child())
        count -= 1
    else:
        print("The box has no child widget to remove")


button_append.connect("clicked", append)
button_prepend.connect("clicked", prepend)
button_remove.connect("clicked", remove)


def on_horizontal_toggled(_check_button):
    if toggle_orientation_horizontal.get_active():
        interactive_box.set_orientation(Gtk.Orientation.HORIZONTAL)


def on_vertical_toggled(_check_button):
    if toggle_orientation_vertical.get_active():
        interactive_box.set_orientation(Gtk.Orientation.VERTICAL)


def on_highlight_toggled(_check_button):
    if highlight.get_active():
        interactive_box.add_css_class("border")
    else:
        interactive_box.remove_css_class("border")


def on_hfill_toggled(_check_button):
    if halign_toggle_fill.get_active():
        interactive_box.set_halign(Gtk.Align.FILL)


def on_hstart_toggled(_check_button):
    if halign_toggle_start.get_active():
        interactive_box.set_halign(Gtk.Align.START)


def on_hcenter_toggled(_check_button):
    if halign_toggle_center.get_active():
        interactive_box.set_halign(Gtk.Align.CENTER)


def on_hend_toggled(_check_button):
    if halign_toggle_end.get_active():
        interactive_box.set_halign(Gtk.Align.END)


def on_vfill_toggled(_check_button):
    if valign_toggle_fill.get_active():
        interactive_box.set_valign(Gtk.Align.FILL)


def on_vstart_toggled(_check_button):
    if valign_toggle_start.get_active():
        interactive_box.set_valign(Gtk.Align.START)


def on_vcenter_toggled(_check_button):
    if valign_toggle_center.get_active():
        interactive_box.set_valign(Gtk.Align.CENTER)


def on_vend_toggled(_check_button):
    if valign_toggle_end.get_active():
        interactive_box.set_valign(Gtk.Align.END)


toggle_orientation_horizontal = workbench.builder.get_object(
    "toggle_orientation_horizontal",
)
toggle_orientation_vertical = workbench.builder.get_object(
    "toggle_orientation_vertical",
)
toggle_orientation_horizontal.connect("toggled", on_horizontal_toggled)
toggle_orientation_vertical.connect("toggled", on_vertical_toggled)

highlight = workbench.builder.get_object("highlight")
highlight.connect("toggled", on_highlight_toggled)

halign_toggle_fill = workbench.builder.get_object("halign_toggle_fill")
halign_toggle_start = workbench.builder.get_object("halign_toggle_start")
halign_toggle_center = workbench.builder.get_object("halign_toggle_center")
halign_toggle_end = workbench.builder.get_object("halign_toggle_end")

halign_toggle_fill.connect("toggled", on_hfill_toggled)
halign_toggle_start.connect("toggled", on_hstart_toggled)
halign_toggle_center.connect("toggled", on_hcenter_toggled)
halign_toggle_end.connect("toggled", on_hend_toggled)

valign_toggle_fill = workbench.builder.get_object("valign_toggle_fill")
valign_toggle_start = workbench.builder.get_object("valign_toggle_start")
valign_toggle_center = workbench.builder.get_object("valign_toggle_center")
valign_toggle_end = workbench.builder.get_object("valign_toggle_end")

valign_toggle_fill.connect("toggled", on_vfill_toggled)
valign_toggle_start.connect("toggled", on_vstart_toggled)
valign_toggle_center.connect("toggled", on_vcenter_toggled)
valign_toggle_end.connect("toggled", on_vend_toggled)


append()

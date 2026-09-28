import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gdk", "4.0")

from gi.repository import Gdk, Gio, Gtk
from gettext import gettext as _
import workbench

window = workbench.window
ctrl_button = workbench.builder.get_object("ctrl_button")
stack = workbench.builder.get_object("stack")
stack_picture_1 = workbench.builder.get_object("stack_picture_1")
stack_picture_2 = workbench.builder.get_object("stack_picture_2")
primary_button = workbench.builder.get_object("primary_button")
middle_button = workbench.builder.get_object("middle_button")
secondary_button = workbench.builder.get_object("secondary_button")

stack_picture_1.set_file(Gio.File.new_for_uri(workbench.resolve("image1.png")))
stack_picture_2.set_file(Gio.File.new_for_uri(workbench.resolve("image2.png")))

ctrl_pressed = False


def on_key_pressed(_self, keyval, _keycode, _state):
    if keyval == Gdk.KEY_Control_L or keyval == Gdk.KEY_Control_R:
        global ctrl_pressed
        ctrl_pressed = True


def on_key_released(_self, keyval, _keycode, _state):
    if keyval == Gdk.KEY_Control_L or keyval == Gdk.KEY_Control_R:
        global ctrl_pressed
        ctrl_pressed = False


def on_clicked(_self):
    if ctrl_pressed:
        ctrl_button.set_label(_("Click to Deactivate"))
        ctrl_button.add_css_class("suggested-action")
    else:
        ctrl_button.set_label(_("Ctrl + Click to Activate"))
        ctrl_button.remove_css_class("suggested-action")


def on_pressed(_self, _n_press, _x, _y):
    match gesture_click.get_current_button():
        case Gdk.BUTTON_PRIMARY:
            primary_button.add_css_class("suggested-action")

        case Gdk.BUTTON_MIDDLE:
            middle_button.add_css_class("suggested-action")

        case Gdk.BUTTON_SECONDARY:
            secondary_button.add_css_class("suggested-action")


def on_released(_self, _n_press, _x, _y):
    match gesture_click.get_current_button():
        case Gdk.BUTTON_PRIMARY:
            primary_button.remove_css_class("suggested-action")

        case Gdk.BUTTON_MIDDLE:
            middle_button.remove_css_class("suggested-action")

        case Gdk.BUTTON_SECONDARY:
            secondary_button.remove_css_class("suggested-action")


def on_swipe(_self, vel_x, _vel_y):
    if vel_x > 0:
        stack.set_visible_child_name("stack_picture_1")
    else:
        stack.set_visible_child_name("stack_picture_2")


# Key controller to detect when the Ctrl key is pressed and released
key_controller = Gtk.EventControllerKey()
window.add_controller(key_controller)
key_controller.connect("key-pressed", on_key_pressed)
key_controller.connect("key-released", on_key_released)

ctrl_button.connect("clicked", on_clicked)

# Detect pointer button press and release events
gesture_click = Gtk.GestureClick(button=0)
gesture_click.set_propagation_phase(Gtk.PropagationPhase.CAPTURE)
window.add_controller(gesture_click)
gesture_click.connect("pressed", on_pressed)
gesture_click.connect("released", on_released)

gesture_swipe = Gtk.GestureSwipe()
stack.add_controller(gesture_swipe)
gesture_swipe.connect("swipe", on_swipe)

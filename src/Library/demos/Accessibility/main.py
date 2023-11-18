import gi

gi.require_version("Gtk", "4.0")
from gi.repository import GObject, Gdk, Gtk
import workbench

custom_button = workbench.builder.get_object("custom_button")


def toggle_button(button):
    checked = button.get_state_flags() & Gtk.StateFlags.CHECKED != 0

    # Invert the current state
    checked = not checked
    pressed = Gtk.AccessibleTristate.TRUE if checked else Gtk.AccessibleTristate.FALSE

    # Update the accessible state
    state = GObject.Value()
    state.init(GObject.TYPE_INT)
    state.set_int(pressed)
    button.update_state([Gtk.AccessibleState.PRESSED], [state])

    # Update the widget state (i.e. CSS pseudo-class)
    if checked:
        button.set_state_flags(Gtk.StateFlags.CHECKED, False)
    else:
        button.unset_state_flags(Gtk.StateFlags.CHECKED)

    # Grab the focus
    button.grab_focus()


clicker = Gtk.GestureClick()
clicker.connect(
    "released", lambda _clicker, _n_press, _x, _y: toggle_button(custom_button)
)
custom_button.add_controller(clicker)


def on_key_released(_controller, keyval, _keycode, _state):
    keyvals = [
        Gdk.KEY_space,
        Gdk.KEY_KP_Space,
        Gdk.KEY_Return,
        Gdk.KEY_ISO_Enter,
        Gdk.KEY_KP_Enter,
    ]

    if keyval in keyvals:
        toggle_button(custom_button)


key_controller = Gtk.EventControllerKey()
key_controller.connect("key-released", on_key_released)
custom_button.add_controller(key_controller)

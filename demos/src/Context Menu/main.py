import gi

gi.require_version("Gdk", "4.0")
from gi.repository import Gio, GLib, Gdk
import workbench

box_menu_parent = workbench.builder.get_object("box_menu_parent")
label_emoji = workbench.builder.get_object("label_emoji")
gesture_click = workbench.builder.get_object("gesture_click")
popover_menu = workbench.builder.get_object("popover_menu")


def on_right_click(x, y):
    position = Gdk.Rectangle()
    position.x = x
    position.y = y
    popover_menu.set_pointing_to(position)
    popover_menu.popup()


gesture_click.connect("pressed", lambda _gesture, _n_press, x, y: on_right_click(x, y))

mood_group = Gio.SimpleActionGroup()
box_menu_parent.insert_action_group("mood", mood_group)


def on_action(parameter):
    emoji = parameter.get_string()
    label_emoji.set_label(emoji)


emoji_action = Gio.SimpleAction(
    name="emoji",
    parameter_type=GLib.VariantType("s"),
)

emoji_action.connect("activate", lambda _action, parameter: on_action(parameter))
mood_group.add_action(emoji_action)

import GLib from "gi://GLib";
import Gdk from "gi://Gdk?version=4.0";
import Gio from "gi://Gio";

const box_menu_parent = workbench.builder.get_object("box_menu_parent");
const label_emoji = workbench.builder.get_object("label_emoji");
const gesture_click = workbench.builder.get_object("gesture_click");
const popover_menu = workbench.builder.get_object("popover_menu");

gesture_click.connect("pressed", (_self, _n_press, x, y) => {
  const position = new Gdk.Rectangle({ x: x, y: y });
  popover_menu.pointing_to = position;
  popover_menu.popup();
});

const mood_group = new Gio.SimpleActionGroup();
box_menu_parent.insert_action_group("mood", mood_group);

const emoji_action = new Gio.SimpleAction({
  name: "emoji",
  parameter_type: new GLib.VariantType("s"),
});

emoji_action.connect("activate", (_action, parameter) => {
  label_emoji.label = parameter.deepUnpack().toString();
});
mood_group.add_action(emoji_action);

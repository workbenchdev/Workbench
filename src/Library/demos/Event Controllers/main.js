import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";

const window = workbench.window;
const button = workbench.builder.get_object("button");
let ctrl_pressed = false;

// Key controller to detect when the Ctrl key is pressed
const key_controller = new Gtk.EventControllerKey();
window.add_controller(key_controller);
key_controller.connect("key-pressed", (controller, keyval, keycode, state) => {
  if (keyval === Gdk.KEY_Control_L || keyval === Gdk.KEY_Control_R) {
    ctrl_pressed = true;
    console.log(ctrl_pressed);
  }
});

key_controller.connect("key-released", (controller, keyval, keycode, state) => {
  if (keyval === Gdk.KEY_Control_L || keyval === Gdk.KEY_Control_R) {
    ctrl_pressed = false;
    console.log(ctrl_pressed);
  }
});

// Gesture controller to detect when the button is clicked
const gesture_primary_click = new Gtk.GestureClick();

button.add_controller(gesture_primary_click);
gesture_primary_click.connect("pressed", (gesture, n_press, x, y) => {
  if (ctrl_pressed) {
    button.label = _("Ctrl+Click detected");
    button.add_css_class("suggested-action");
    console.log("aaaaa")
  } else {
    button.label = _("Click detected");
    button.remove_css_class("suggested-action");
  }
});
/*
const gesture_secondary_click = new Gtk.GestureClick({
  button: Gdk.BUTTON_SECONDARY,
});

button.add_controller(gesture_secondary_click);
gesture_secondary_click.connect("pressed", (gesture, n_press, x, y) => {
  button.label =_("Right Click detected");
  console.log("right-click");
}); */

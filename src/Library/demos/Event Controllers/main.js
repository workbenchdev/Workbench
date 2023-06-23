import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

const window = workbench.window;
const ctrl_button = workbench.builder.get_object("ctrl_button");
const click_button = workbench.builder.get_object("click_button");
const stack = workbench.builder.get_object("stack");
const pic1 = workbench.builder.get_object("pic1");
const pic2 = workbench.builder.get_object("pic2");

const pic1_file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Event Controllers/image1.png",
);

const pic2_file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Event Controllers/image2.png",
);

pic1.file = pic1_file;
pic2.file = pic2_file;

let ctrl_pressed = false;
let right_clicks = 0;

// Key controller to detect when the Ctrl key is pressed and released
const key_controller = new Gtk.EventControllerKey();
window.add_controller(key_controller);
key_controller.connect("key-pressed", (controller, keyval, keycode, state) => {
  if (keyval === Gdk.KEY_Control_L || keyval === Gdk.KEY_Control_R) {
    ctrl_pressed = true;
  }
});

key_controller.connect("key-released", (controller, keyval, keycode, state) => {
  if (keyval === Gdk.KEY_Control_L || keyval === Gdk.KEY_Control_R) {
    ctrl_pressed = false;
  }
});

// Gesture controller to detect when the button is clicked
const gesture_primary_click = new Gtk.GestureClick();

ctrl_button.connect("clicked", () => {
  if (ctrl_pressed) {
    ctrl_button.label = _("Ctrl+Click detected");
    ctrl_button.add_css_class("suggested-action");
  } else {
    ctrl_button.label = _("Click detected");
    ctrl_button.remove_css_class("suggested-action");
  }
});

const gesture_secondary_click = new Gtk.GestureClick({
  button: Gdk.BUTTON_SECONDARY,
});

click_button.add_controller(gesture_secondary_click);
gesture_secondary_click.connect("pressed", (gesture, n_press, x, y) => {
  right_clicks += 1;
  click_button.label = right_clicks.toString();
});

const single = new Gtk.GestureSwipe();

stack.add_controller(single);

single.connect("swipe", (controller, vel_x, vel_y) => {
  if (vel_x > 0) {
    stack.set_visible_child_name("pic1");
  } else {
    stack.set_visible_child_name("pic2");
  }
});

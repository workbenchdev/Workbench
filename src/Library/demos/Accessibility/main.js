import GObject from "gi://GObject";
import Gdk from "gi://Gdk";
import Gtk from "gi://Gtk";

const button = workbench.builder.get_object("custom_button");

const clicker = new Gtk.GestureClick();
clicker.connect("released", () => toggleButton(button));
button.add_controller(clicker);

const key_controller = new Gtk.EventControllerKey();
key_controller.connect("key-released", (controller, keyval) => {
  const keyvals = [
    Gdk.KEY_space,
    Gdk.KEY_KP_Space,
    Gdk.KEY_Return,
    Gdk.KEY_ISO_Enter,
    Gdk.KEY_KP_Enter,
  ];

  if (keyvals.includes(keyval)) toggleButton(button);
});
button.add_controller(key_controller);

function toggleButton(button) {
  let checked = (button.get_state_flags() & Gtk.StateFlags.CHECKED) !== 0;
  let pressed = Gtk.AccessibleTristate.FALSE;

  // Invert the current state
  if (checked) {
    checked = false;
    pressed = Gtk.AccessibleTristate.FALSE;
  } else {
    checked = true;
    pressed = Gtk.AccessibleTristate.TRUE;
  }

  // Update the accessible state
  const state = new GObject.Value();
  state.init(GObject.TYPE_INT);
  state.set_int(pressed);
  button.update_state([Gtk.AccessibleState.PRESSED], [state]);

  // Update the widget state (i.e. CSS pseudo-class)
  if (checked) button.set_state_flags(Gtk.StateFlags.CHECKED, false);
  else button.unset_state_flags(Gtk.StateFlags.CHECKED);

  // Grab the focus
  button.grab_focus();
}


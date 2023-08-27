import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

const button = workbench.builder.get_object("custom_button");

const clicker = new Gtk.GestureClick();
clicker.connect("released", () => {
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
});

button.add_controller(clicker);

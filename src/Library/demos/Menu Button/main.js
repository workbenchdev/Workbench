import Gtk from "gi://Gtk";

const circular_switch = workbench.builder.get_object("circular_switch");
const primary_button = workbench.builder.get_object("primary");
const secondary_button = workbench.builder.get_object("secondary");

circular_switch.connect("notify::active", () => {
  if (circular_switch.active) {
    secondary_button.add_css_class("circular");
  } else {
    secondary_button.remove_css_class("circular");
  }
});

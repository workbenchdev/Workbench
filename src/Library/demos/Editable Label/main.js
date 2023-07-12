import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const edit_label = workbench.builder.get_object("edit_label");
const edit_switch = workbench.builder.get_object("edit_switch");

edit_switch.connect("notify::active", () => {
  if (edit_switch.active) {
    edit_label.grab_focus();
    edit_label.start_editing();
  } else {
    edit_label.stop_editing(true);
  }
});

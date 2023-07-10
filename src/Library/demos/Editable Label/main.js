import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const edit_label = workbench.builder.get_object("edit_label");
const edit_button = workbench.builder.get_object("edit_button");

edit_button.connect("clicked", () => {
  edit_label.grab_focus();
  edit_label.start_editing();
});

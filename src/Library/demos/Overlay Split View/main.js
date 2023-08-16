import Gtk from "gi://Gtk";

const split_view = workbench.builder.get_object("split_view");
const start_toggle = workbench.builder.get_object("start_toggle");
const end_toggle = workbench.builder.get_object("end_toggle");

start_toggle.connect("toggled", () => {
  split_view.sidebar_position = Gtk.PackType.START;
});

end_toggle.connect("toggled", () => {
  split_view.sidebar_position = Gtk.PackType.END;
});

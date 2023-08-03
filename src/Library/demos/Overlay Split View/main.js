import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const split_view = workbench.builder.get_object("split_view");
const sidebar_toggle = workbench.builder.get_object("sidebar_toggle");
const header = workbench.builder.get_object("header");
const start_toggle = workbench.builder.get_object("start_toggle");
const end_toggle = workbench.builder.get_object("end_toggle");

start_toggle.connect("toggled", () => {
  split_view.sidebar_position = Gtk.PackType.START;
  header.remove(sidebar_toggle);
  header.pack_start(sidebar_toggle);
});

end_toggle.connect("toggled", () => {
  split_view.sidebar_position = Gtk.PackType.END;
  header.remove(sidebar_toggle);
  header.pack_end(sidebar_toggle);
});

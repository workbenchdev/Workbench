import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const drop_down = workbench.builder.get_object("drop_down");

drop_down.connect("notify", () => {
  const selected_item = drop_down.selected_item.get_string();

  console.log(selected_item);
});

import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const action_bar = workbench.builder.get_object("action_bar");
const show_content = workbench.builder.get_object("show_content");
const start_widget = workbench.builder.get_object("start_widget");
const end_widget = workbench.builder.get_object("end_widget");

show_content.connect("clicked", () => {
  action_bar.revealed = true;
});

start_widget.connect("clicked", () => {
  console.log("I am start widget");
});

end_widget.connect("clicked", () => {
  console.log("I am end widget");
});

import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const root_box = workbench.builder.get_object("root_box");
const stack = workbench.builder.get_object("stack");
const navigation_row = workbench.builder.get_object("navigation_row");
const transition_row = workbench.builder.get_object("transition_row");
let navigation_widget;

if (navigation_row.get_selected() === 0) {
  navigation_widget = new Gtk.StackSwitcher({ stack: stack });
  root_box.prepend(navigation_widget);
} else {
  navigation_widget = new Gtk.StackSidebar({ stack: stack });
  root_box.prepend(navigation_widget);
}

navigation_row.connect("notify::selected-item", () => {
  if (navigation_row.get_selected() === 0) {
    root_box.remove(navigation_widget);
    navigation_widget = new Gtk.StackSwitcher({ stack: stack });
    root_box.prepend(navigation_widget);
    root_box.orientation = Gtk.Orientation.HORIZONTAL;
  } else {
    root_box.remove(navigation_widget);
    navigation_widget = new Gtk.StackSidebar({ stack: stack });
    root_box.prepend(navigation_widget);
    root_box.orientation = Gtk.Orientation.VERTICAL;
  }
});


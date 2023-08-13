import Gtk from "gi://Gtk";

const root_box = workbench.builder.get_object("root_box");
const stack = workbench.builder.get_object("stack");
const navigation_row = workbench.builder.get_object("navigation_row");

let navigation_widget;
let separator;

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
    root_box.remove(separator);
    navigation_widget = new Gtk.StackSwitcher({ stack: stack });
    root_box.prepend(navigation_widget);
    root_box.orientation = Gtk.Orientation.VERTICAL;
  } else {
    root_box.remove(navigation_widget);
    navigation_widget = new Gtk.StackSidebar({ stack: stack });
    separator = new Gtk.Separator();
    root_box.prepend(separator);
    root_box.prepend(navigation_widget);
    root_box.orientation = Gtk.Orientation.HORIZONTAL;
  }
});

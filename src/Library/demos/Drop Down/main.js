import Gtk from "gi://Gtk";
import GObject from "gi://GObject";

const drop_down = workbench.builder.get_object("drop_down");
const advanced_drop_down = workbench.builder.get_object("advanced_drop_down");

drop_down.connect("notify::selected-item", () => {
  const selected_item = drop_down.selected_item.get_string();
  console.log(selected_item);
});

const expression = new Gtk.ClosureExpression(
  GObject.TYPE_STRING,
  (obj) => obj.string,
  null,
);

advanced_drop_down.expression = expression;

advanced_drop_down.connect("notify::selected-item", () => {
  const selected_item = advanced_drop_down.selected_item.get_string();
  console.log(selected_item);
});

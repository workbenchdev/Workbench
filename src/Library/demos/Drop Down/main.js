import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const drop_down = workbench.builder.get_object("drop_down");
const searchable_drop_down = workbench.builder.get_object("searchable_drop_down");
const advanced_drop_down = workbench.builder.get_object("advanced_drop_down");

drop_down.connect("notify::selected-item", () => {
  const selected_item = drop_down.selected_item.get_string();
  console.log(selected_item);
});

const search_expression = new Gtk.ClosureExpression(
  GObject.TYPE_STRING,
  (obj) => obj.string,
  null,
);

searchable_drop_down.expression = search_expression;

searchable_drop_down.connect("notify::selected-item", () => {
  const selected_item = searchable_drop_down.selected_item.get_string();
  console.log(selected_item);
});

const key_value_pair = GObject.registerClass(
  {
    Properties: {
      key: GObject.ParamSpec.string(
        "key",
        "Key",
        "Key",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      value: GObject.ParamSpec.string(
        "value",
        "Value",
        "Value",
        GObject.ParamFlags.READWRITE,
        "",
      ),
    },
  },
  class KeyValuePair extends GObject.Object {},
);

const model = new Gio.ListStore();

model.append(new key_value_pair({ key: "one", value: "One" }));
model.append(new key_value_pair({ key: "two", value: "Two" }));
model.append(new key_value_pair({ key: "three", value: "Three" }));

const custom_expression = Gtk.PropertyExpression.new(
  key_value_pair.$gtype,
  null,
  "value",
);

advanced_drop_down.expression = custom_expression;
advanced_drop_down.model = model;

advanced_drop_down.connect("notify::selected-item", () => {
  const selected_item = advanced_drop_down.selected_item;
  if (selected_item) {
    console.log(selected_item.key);
  }
});

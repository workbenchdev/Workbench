import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const drop_down = workbench.builder.get_object("drop_down");
const advanced_drop_down = workbench.builder.get_object("advanced_drop_down");

drop_down.connect("notify::selected-item", () => {
  const selected_item = drop_down.selected_item.get_string();
  console.log(selected_item);
});

const KeyValuePair = GObject.registerClass(
  {
    Properties: {
      key: GObject.ParamSpec.string(
        "key",
        null,
        null,
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

const model = new Gio.ListStore({ item_type: KeyValuePair });

model.splice(0, 0, [
  new KeyValuePair({ key: "lion", value: "Lion" }),
  new KeyValuePair({ key: "tiger", value: "Tiger" }),
  new KeyValuePair({ key: "leopard", value: "Leopard" }),
  new KeyValuePair({ key: "elephant", value: "Elephant" }),
  new KeyValuePair({ key: "giraffe", value: "Giraffe" }),
  new KeyValuePair({ key: "cheetah", value: "Cheetah" }),
  new KeyValuePair({ key: "zebra", value: "Zebra" }),
  new KeyValuePair({ key: "panda", value: "Panda" }),
  new KeyValuePair({ key: "koala", value: "Koala" }),
  new KeyValuePair({ key: "crocodile", value: "Crocodile" }),
  new KeyValuePair({ key: "hippo", value: "Hippopotamus" }),
  new KeyValuePair({ key: "monkey", value: "Monkey" }),
  new KeyValuePair({ key: "rhino", value: "Rhinoceros" }),
  new KeyValuePair({ key: "kangaroo", value: "Kangaroo" }),
  new KeyValuePair({ key: "dolphin", value: "Dolphin" }),
]);


const expression = Gtk.PropertyExpression.new(
  KeyValuePair,
  null,
  "value",
);

advanced_drop_down.expression = expression;
advanced_drop_down.model = model;

advanced_drop_down.connect("notify::selected-item", () => {
  const selected_item = advanced_drop_down.selected_item;
  if (selected_item) {
    console.log(selected_item.key);
  }
});

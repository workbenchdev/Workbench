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
  new KeyValuePair({ key: "win7", value: "Windows 7" }),
  new KeyValuePair({ key: "win10", value: "Windows 10" }),
  new KeyValuePair({ key: "win11", value: "Windows 11" }),
  new KeyValuePair({ key: "ubuntu", value: "Ubuntu" }),
  new KeyValuePair({ key: "fedora", value: "Fedora" }),
  new KeyValuePair({ key: "debian", value: "Debian" }),
  new KeyValuePair({ key: "mint", value: "Mint" }),
  new KeyValuePair({ key: "arch", value: "Arch Linux" }),
  new KeyValuePair({ key: "popos", value: "Pop!_OS" }),
  new KeyValuePair({ key: "opensuse", value: "OpenSUSE" }),
  new KeyValuePair({ key: "gentoo", value: "Gentoo" }),
  new KeyValuePair({ key: "freebsd", value: "FreeBSD" }),
  new KeyValuePair({ key: "macos", value: "macOS" }),
  new KeyValuePair({ key: "ios", value: "iOS" }),
  new KeyValuePair({ key: "android", value: "Android" }),
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

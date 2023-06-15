import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";

const drop_down = workbench.builder.get_object("drop_down");
const advanced_drop_down = workbench.builder.get_object("advanced_drop_down");

drop_down.connect("notify::selected-item", () => {
  const selected_item = drop_down.selected_item.get_string();
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

model.append(new key_value_pair({ key: "win7", value: "Windows 7" }));
model.append(new key_value_pair({ key: "win10", value: "Windows 10" }));
model.append(new key_value_pair({ key: "win11", value: "Windows 11" }));
model.append(new key_value_pair({ key: "ubuntu", value: "Ubuntu" }));
model.append(new key_value_pair({ key: "fedora", value: "Fedora" }));
model.append(new key_value_pair({ key: "debian", value: "Debian" }));
model.append(new key_value_pair({ key: "mint", value: "Mint" }));
model.append(new key_value_pair({ key: "arch", value: "Arch Linux" }));
model.append(new key_value_pair({ key: "popos", value: "Pop!_OS" }));
model.append(new key_value_pair({ key: "opensuse", value: "OpenSUSE" }));
model.append(new key_value_pair({ key: "gentoo", value: "Gentoo" }));
model.append(new key_value_pair({ key: "freebsd", value: "FreeBSD" }));
model.append(new key_value_pair({ key: "macos", value: "macOS" }));
model.append(new key_value_pair({ key: "ios", value: "iOS" }));
model.append(new key_value_pair({ key: "android", value: "Android" }));


const expression = Gtk.PropertyExpression.new(
  key_value_pair.$gtype,
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

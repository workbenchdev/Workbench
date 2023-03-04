import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const entry = workbench.builder.get_object("entry");
const buffer = entry.buffer;
const progress_entry = workbench.builder.get_object("progress_entry");
const icon_entry = workbench.builder.get_object("icon_entry");
const visibility_entry = workbench.builder.get_object("visibility_entry");

const invert_icons = {
  "eye-open-negative-filled-symbolic": "eye-not-looking-symbolic",
  "eye-not-looking-symbolic": "eye-open-negative-filled-symbolic",
};

buffer.connect("inserted-text", () => {
  console.log("Text is being inserted!");
});

entry.connect("activate", () => {
  console.log(`"${entry.text}" was entered!`);
});

setInterval(() => {
  progress_entry.progress_pulse();
}, 100);

icon_entry.connect("icon-press", () => {
  console.log("Icon Pressed!");
});

icon_entry.connect("icon-release", () => {
  console.log("Icon Released!");
});

visibility_entry.connect("icon-press", () => {
  visibility_entry["secondary-icon-name"] =
    invert_icons[visibility_entry["secondary-icon-name"]];

  visibility_entry.visibility
    ? (visibility_entry.visibility = false)
    : (visibility_entry.visibility = true);
});

const search_entry = workbench.builder.get_object("search_entry");
const items = workbench.builder.get_object("items");

search_entry.set_key_capture_widget(items);

const filter = (row) => {
  const re = new RegExp(search_entry.text, "i");
  return re.test(row.child.label);
};

search_entry.connect("search-changed", () => {
  items.set_filter_func(filter);
});

const passwd_entry = workbench.builder.get_object("passwd_entry");
const confirm_passwd_entry = workbench.builder.get_object(
  "confirm_passwd_entry",
);
const passwd_label = workbench.builder.get_object("passwd_label");

passwd_entry.connect("activate", () => {
  passwd_label.label = validate_password(
    passwd_entry.text,
    confirm_passwd_entry.text,
  );
});

confirm_passwd_entry.connect("activate", () => {
  passwd_label.label = validate_password(
    passwd_entry.text,
    confirm_passwd_entry.text,
  );
});

function validate_password(passwd, confirm_passwd) {
  if (passwd && confirm_passwd) {
    if (passwd === confirm_passwd) {
      return "Password made successfully!";
    } else {
      return "Both fields should be matching!";
    }
  } else {
    return "Both fields are mandatory!";
  }
}

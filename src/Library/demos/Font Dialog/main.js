import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Pango from "gi://Pango?version=1.0";

Gio._promisify(
  Gtk.FontDialog.prototype,
  "choose_font_and_features",
  "choose_font_and_features_finish",
);

Gio._promisify(
  Gtk.FontDialog.prototype,
  "choose_family",
  "choose_family_finish",
);

const parent = workbench.window;
const font_dialog_button = workbench.builder.get_object("font_dialog_button");
const custom_button = workbench.builder.get_object("custom_button");

const dialog_standard = new Gtk.FontDialog({
  title: "Select a font",
  modal: true,
});
font_dialog_button.set_dialog(dialog_standard);

font_dialog_button.connect("notify::font-desc", () => {
  const fontname = font_dialog_button.get_font_desc().to_string();
  console.log(`Font Dialog Button: The font selected is ${fontname}`);
});

const dialog_custom = new Gtk.FontDialog({
  title: "Select a font-family",
  modal: true,
});

async function getFamily() {
  let result;
  try {
    result = await dialog_custom.choose_family(parent, null, null);
  } catch (err) {
    logError(err);
    return;
  }
  console.log(`The selected Font Family is: ${result.get_name()}`);
}

custom_button.connect("clicked", () => {
  getFamily();
});

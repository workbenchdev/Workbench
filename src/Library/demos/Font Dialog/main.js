import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

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

const font_dialog_button = workbench.builder.get_object("font_dialog_button");
const custom_button = workbench.builder.get_object("custom_button");

const dialog_standard = new Gtk.FontDialog({
  title: "Select a Font",
  modal: true,
});
font_dialog_button.set_dialog(dialog_standard);

font_dialog_button.connect("notify::font-desc", () => {
  const font_name = font_dialog_button.get_font_desc().to_string();
  console.log(`Font: ${font_name}`);
});

const dialog_custom = new Gtk.FontDialog({
  title: "Select a Font Family",
  modal: true,
});

custom_button.connect("clicked", () => onClicked().catch((err)=>{
  console.error(err);
}));

async function onClicked() {
  const result = await dialog_custom.choose_family(
    workbench.window,
    null,
    null,
  );
  console.log(`Font Family: ${result.get_name()}`);
}

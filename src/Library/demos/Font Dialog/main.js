import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

Gio._promisify(
  Gtk.FontDialog.prototype,
  "choose_font_and_features",
  "choose_font_and_features_finish",
);

let font_dialog_button = workbench.builder.get_object("font_dialog_button");
let custom_button = workbench.builder.get_object("custom_button");

let dialog_standard = new Gtk.FontDialog({
  title: "Select a font",
  modal: true,
});
font_dialog_button.set_dialog(dialog_standard);

font_dialog_button.connect("notify::font-desc", () => {
  let fontname = font_dialog_button.get_font_desc().to_string();
  console.log(`Font Dialog Button: The font selected is ${fontname}`);
});

const dialog_custom = new Gtk.FontChooserDialog({
  title: "Select a font",
  modal: true,
  transient_for: workbench.window,
});

let signalId = 0;
custom_button.connect("clicked", () => {
  dialog_custom.show();

  signalId = dialog_custom.connect("response", (dialog, response_id) => {
    if (response_id == Gtk.ResponseType.OK) {
      const font_desc = dialog_custom.get_font_desc();
      const font_name = font_desc.to_string();
      console.log(`Custom Button: The font selected is ${font_name}`);
      dialog_custom.hide();
      dialog_custom.disconnect(signalId);
    }
  });
});

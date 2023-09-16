import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

Gio._promisify(Gtk.ColorDialog.prototype, "choose_rgba", "choose_rgba_finish");

const color_dialog_button = workbench.builder.get_object("color_dialog_button");
const custom_button = workbench.builder.get_object("custom_button");

const color = new Gdk.RGBA();
color.parse("red");

const dialog_standard = new Gtk.ColorDialog({
  title: "Select a color",
  modal: true,
  with_alpha: true,
});

color_dialog_button.dialog = dialog_standard;
color_dialog_button.rgba = color;

color_dialog_button.connect("notify::rgba", () => {
  console.log(
    `Color Dialog Button: The color selected is ${color_dialog_button.rgba.to_string()}`,
  );
});

const dialog_custom = new Gtk.ColorDialog({
  title: "Select a color",
  modal: true,
  with_alpha: false,
});

custom_button.connect("clicked", () => {
  onClicked().catch(console.error);
});

async function onClicked() {
  const color = await dialog_custom.choose_rgba(workbench.window, null, null);
  console.log(`Custom Button: The color selected is ${color.to_string()}`);
}
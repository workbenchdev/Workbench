import Gtk from "gi://Gtk";

const slider = workbench.builder.get_object("slider");
const label = workbench.builder.get_object("label");

slider.connect("value-changed", () => {
  const value = slider.get_value();
  label.set_text(`Value: ${value}`);
});

function main() {
  Gtk.init();
  const builder = Gtk.Builder.new_from_resource("./main.blp");
  const window = builder.get_object("window");
  window.show_all();
  Gtk.main();
}

main();

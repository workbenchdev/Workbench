import Gio from "gi://Gio";

const dialog = workbench.builder.get_object("dialog");
const button = workbench.builder.get_object("button");
const image = workbench.builder.get_object("image");

image.file = Gio.File.new_for_uri(workbench.resolve("image.svg")).get_path();

button.connect("clicked", () => {
  dialog.present(workbench.window);
});

dialog.connect("close-attempt", () => {
  console.log("Close Attempt");
  dialog.force_close();
});

dialog.connect("closed", () => {
  console.log("Closed");
});

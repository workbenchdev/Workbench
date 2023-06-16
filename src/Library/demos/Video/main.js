import Gtk from "gi://Gtk";

const page = workbench.builder.get_object("page");
const video = workbench.builder.get_object("video");
const file_button = workbench.builder.get_object("file_button");

let file;
video.autoplay = true;

file_button.connect("clicked", () => {
  const dialog = new Gtk.FileDialog({
    title: "Select a Video File",
    modal: true,
  });

  dialog.open(page.get_root(), null, file_callback);
});

function file_callback(dialog, response) {
  try {
    file = dialog.open_finish(response);
    if (file) {
      console.log(`Selected file: ${file.get_path()}`);
      video.file = file;
    }
  } catch (e) {
    console.logError(e);
  }
}

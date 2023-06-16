import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const page = workbench.builder.get_object("page");
const video = workbench.builder.get_object("video");
const file_button = workbench.builder.get_object("file_button");

let file;
video.set_autoplay(true);

file_button.connect("clicked", () => {
  const dialog = new Gtk.FileDialog({
    title: "Select a Video File",
    modal: true,
  });

  dialog.open(page.get_root(), null, file_callback);
});

function file_callback(dialog, res) {
  try {
    file = dialog.open_finish(res);
    if (file) {
      console.log(`Selected file: ${file.get_path()}`);
      video.file = file;
    }
  } catch (e) {
    console.logError(e);
  }
}

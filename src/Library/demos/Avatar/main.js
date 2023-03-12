import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");

const avatar_image = workbench.builder.get_object("avatar_image");
const button = workbench.builder.get_object("button");

const filter = new Gtk.FileFilter({
  name: "Images",
});
filter.add_pixbuf_formats();

const dialog = new Gtk.FileDialog({
  title: "Select an Avatar",
  modal: true,
  default_filter: filter,
});

button.connect("clicked", async () => {
  try {
    const file = await dialog.open(workbench.window, null);
    const texture = Gdk.Texture.new_from_file(file);
    avatar_image.set_custom_image(texture);
  } catch (err) {
    logError(err);
  }
});

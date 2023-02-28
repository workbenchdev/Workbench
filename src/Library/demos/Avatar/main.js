import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";

const avatar_image = workbench.builder.get_object("avatar_image");
const button = workbench.builder.get_object("button");

const dialog = new Gtk.FileDialog();

const filter = new Gtk.FileFilter();
filter.name = "Image files";
filter.add_pixbuf_formats();
dialog.default_filter = filter;

function on_open_cb(dialog, res) {
  try {
    const file = dialog.open_finish(res);
    const texture = Gdk.Texture.new_from_file(file);
    avatar_image.set_custom_image(texture);
  } catch {
    return;
  }
}

button.connect("clicked", () => {
  dialog.open(workbench.window, null, on_open_cb);
});


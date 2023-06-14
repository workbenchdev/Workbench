import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

Gio._promisify(Gtk.FileDialog.prototype, "open", "open_finish");
Gio._promisify(Xdp.Portal.prototype, "set_wallpaper", "set_wallpaper_finish");

const filter = new Gtk.FileFilter({
  name: "File",
});

const dialog = new Gtk.FileDialog({
  title: "Select a File",
  modal: true,
  default_filter: filter,
});

async function setWallpaper() {
  try {
    const file = await dialog.open(workbench.window, null);
    const path = file.get_path();
    const uri = "file:///" + path;
    portal.set_wallpaper(
      parent,
      uri,
      Xdp.WallpaperFlags.NONE || Xdp.WallpaperFlags.PREVIEW,
      null,
      (portal, result) => {
        try {
          portal.set_wallpaper_finish(result);
          console.log("Wallpaper set successfully");
        } catch (e) {
          logError(e);
        }
      },
    );
  } catch (err) {
    logError(err);
  }
}

button.connect("clicked", setWallpaper);

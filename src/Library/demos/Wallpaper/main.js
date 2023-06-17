import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Wallpaper/image.jpg",
);

Gio._promisify(Xdp.Portal.prototype, "set_wallpaper", "set_wallpaper_finish");

async function onClicked() {
  const success = await portal.set_wallpaper(
    parent,
    file.get_uri(),
    Xdp.WallpaperFlags.PREVIEW,
    null,
  );

  if (success) {
    console.log("Wallpaper set successfully");
  } else {
    console.log("Could not set wallpaper");
  }
}

button.connect("clicked", () => {
  onClicked().catch(logError);
});

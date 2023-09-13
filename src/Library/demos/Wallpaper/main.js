import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

Gio._promisify(Xdp.Portal.prototype, "set_wallpaper", "set_wallpaper_finish");

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

const uri = workbench.resolve("./wallpaper.png");

async function onClicked() {
  const success = await portal.set_wallpaper(
    parent,
    uri,
    Xdp.WallpaperFlags.PREVIEW |
      Xdp.WallpaperFlags.BACKGROUND |
      Xdp.WallpaperFlags.LOCKSCREEN,
    null,
  );

  if (success) {
    console.log("Wallpaper set successfully");
  } else {
    console.log("Could not set wallpaper");
  }
}

button.connect("clicked", () => {
  onClicked().catch((err)=>{
    console.error(err);
  });
});

import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";

const button = workbench.builder.get_object("button");
const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const picture = workbench.builder.get_object("picture");

function takeScreenshotAsync(parent, flags) {
  return new Promise((resolve, reject) => {
    portal.take_screenshot(parent, flags, null, (portal, result) => {
      try {
        const uri = portal.take_screenshot_finish(result);
        const file = Gio.File.new_for_uri(uri);
        resolve(file);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

async function fitPicture() {
  const flags = Xdp.ScreenshotFlags.NONE;
  try {
    const file = await takeScreenshotAsync(parent, flags);
    picture.width_request = 180;
    picture.height_request = 180;
    picture.set_file(file);
  } catch (error) {
    console.error("Error capturing screenshot:", error);
  }
}

button.connect("clicked", async () => {
  await fitPicture();
  console.log("Screenshot Captured");
});

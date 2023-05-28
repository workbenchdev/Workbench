import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";

const button = workbench.builder.get_object("button");
const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const picture = workbench.builder.get_object("picture");
function takeScreenshot() {
  let flags = Xdp.ScreenshotFlags.NONE;

  portal.take_screenshot(parent, flags, null, (portal, result) => {
    let path = null;

    try {
      const uri = portal.take_screenshot_finish(result);
      const file = Gio.File.new_for_uri(uri);
      picture.width_request = 180;
      picture.height_request = 180;
      picture.set_file(file);
    } catch (e) {
      logError(e);
      return;
    }
  });
}

button.connect("clicked", () => {
  takeScreenshot();
  console.log("Screenshot Captured");
});

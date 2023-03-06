import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
const { GdkPixbuf, Gio, GLib, GObject, Gst, Gtk, Pango, PangoCairo } =
  imports.gi;

const Screenshot = workbench.builder.get_object("Screenshot");
const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

function _takeScreenshot() {
  let flags = Xdp.ScreenshotFlags.NONE;

  portal.take_screenshot(parent, flags, null, (portal, result) => {
    let path = null;

    try {
      const uri = portal.take_screenshot_finish(result);
      const [path] = GLib.filename_from_uri(uri);
      const pixbuf = GdkPixbuf.Pixbuf.new_from_file_at_scale(
        path,
        60,
        40,
        true,
      );
      workbench.builder.get_object("picture").set_pixbuf(pixbuf);
    } catch (e) {
      logError(e);
      return;
    }
  });
}

Screenshot.connect("clicked", _takeScreenshot);


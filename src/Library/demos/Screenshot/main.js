import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const button = workbench.builder.get_object("button");
const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const picture = workbench.builder.get_object("picture");
const window = button.get_ancestor(Gtk.Window);

function createErrorDialog() {
  const dialog = new Adw.MessageDialog({
    heading: "Permission Error",
    body: "Ensure Screenshot permission is enabled in Settings>Apps>Workbench",
    close_response: "Okay",
    modal: true,
    transient_for: window,
  });

  dialog.add_response("Okay", "Okay");
  dialog.present();
}

button.connect("clicked", () => {
  const flags = Xdp.ScreenshotFlags.NONE;
  portal.take_screenshot(parent, flags, null, (portal, result) => {
    try {
      const uri = portal.take_screenshot_finish(result);
      const file = Gio.File.new_for_uri(uri);
      picture.width_request = 180;
      picture.height_request = 180;
      picture.set_file(file);
      console.log("Screenshot Captured");
    } catch (error) {
      if (error instanceof Gio.IOErrorEnum) {
        createErrorDialog();
      } else {
        logError(error);
      }
    }
  });
});

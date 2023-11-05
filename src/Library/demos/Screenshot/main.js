import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import Adw from "gi://Adw";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");
const picture = workbench.builder.get_object("picture");

Gio._promisify(
  Xdp.Portal.prototype,
  "take_screenshot",
  "take_screenshot_finish",
);

button.connect("clicked", () => {
  takeScreenshot().catch(console.error);
});

async function takeScreenshot() {
  const flags = Xdp.ScreenshotFlags.NONE;

  let uri;
  try {
    uri = await portal.take_screenshot(parent, flags, null);
  } catch (_err) {
    showPermissionError();
    return;
  }

  const file = Gio.File.new_for_uri(uri);
  picture.set_file(file);
}

function showPermissionError() {
  const dialog = new Adw.MessageDialog({
    heading: "Permission Error",
    body: "Ensure Screenshot permission is enabled in\nSettings → Apps → Workbench",
    close_response: "ok",
    modal: true,
    transient_for: workbench.window,
  });

  dialog.add_response("ok", "OK");
  dialog.present();
}

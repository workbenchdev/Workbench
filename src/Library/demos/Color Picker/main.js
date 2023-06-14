import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

Gio._promisify(Xdp.Portal.prototype, "pick_color", "pick_color_finish");

async function pickColor() {
  try {
    const color = await portal.pick_color(parent, null);
    const colorInfo = color.print(false);

    // The picked color is a GVariant of the form (ddd), containing red, green and blue components in the range [0,1].
    console.log(`Selected Color is: ${colorInfo}`);
  } catch (err) {
    logError(err);
  }
}

button.connect("clicked", pickColor);

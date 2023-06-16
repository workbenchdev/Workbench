import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

Gio._promisify(Xdp.Portal.prototype, "pick_color", "pick_color_finish");

async function onClicked() {
  // result is a GVariant of the form (ddd), containing red, green and blue components in the range [0,1]
  const result = await portal.pick_color(parent, null);
  const [r, g, b] = result.deepUnpack();

  const rgbColor = new Gdk.RGBA({ red: r, green: g, blue: b, alpha: 1.0 });
  const color = rgbColor.to_string();
  console.log(`Selected Color is: ${color}`);
}

button.connect("clicked", () => {
  onClicked().catch(logError);
});

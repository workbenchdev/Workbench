import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

Gio._promisify(Xdp.Portal.prototype, "pick_color", "pick_color_finish");

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);
const button = workbench.builder.get_object("button");

async function onClicked() {
  // result is a GVariant of the form (ddd), containing red, green and blue components in the range [0,1]
  const result = await portal.pick_color(parent, null);
  const [r, g, b] = result.deepUnpack();

  const color = new Gdk.RGBA({ red: r, green: g, blue: b, alpha: 1.0 });
  console.log(`Selected color is: ${color.to_string()}`);
}

button.connect("clicked", () => {
  onClicked().catch(console.error);
});
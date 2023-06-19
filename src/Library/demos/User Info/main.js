import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const button = workbench.builder.get_object("button");
const avatar = workbench.builder.get_object("avatar");
const entry = workbench.builder.get_object("entry");
const username = workbench.builder.get_object("username");
const display = workbench.builder.get_object("name");

Gio._promisify(
  Xdp.Portal.prototype,
  "get_user_information",
  "get_user_information_finish",
);

async function onClicked() {
  // call the portal function
  const reason = entry.get_text();
  let user_info = null;
  user_info = await portal.get_user_information(parent, reason, null, null);

  //retrieve values from GVariant
  user_info = user_info.deepUnpack();
  const id = user_info["id"].deepUnpack();
  const name = user_info["name"].deepUnpack();
  const uri = user_info["image"].deepUnpack();
  const file = Gio.File.new_for_uri(uri);
  const texture = Gdk.Texture.new_from_file(file);

  //update values
  username.label = id;
  display.label = name;
  avatar.set_custom_image(texture);

  //post-request updation
  entry.set_text("");
  console.log("Information retrieved");
}

button.connect("clicked", () => {
  onClicked().catch(logError);
});

import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

Gio._promisify(
  Xdp.Portal.prototype,
  "get_user_information",
  "get_user_information_finish",
);

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const revealer = workbench.builder.get_object("revealer");
const button = workbench.builder.get_object("button");
const avatar = workbench.builder.get_object("avatar");
const entry = workbench.builder.get_object("entry");
const username = workbench.builder.get_object("username");
const display = workbench.builder.get_object("name");

async function onClicked() {
  const reason = entry.get_text();
  const result = await portal.get_user_information(parent, reason, null, null);

  /*
  result is a GVariant dictionary containing the following fields
  id (s): the user ID
  name (s): the users real name
  image (s): the uri of an image file for the users avatar picture
  */

  const user_info = result.deepUnpack();
  const id = user_info["id"].deepUnpack();
  const name = user_info["name"].deepUnpack();
  const uri = user_info["image"].deepUnpack();
  const file = Gio.File.new_for_uri(uri);
  const texture = Gdk.Texture.new_from_file(file);

  username.label = id;
  display.label = name;
  avatar.set_custom_image(texture);
  revealer.reveal_child = true;

  entry.set_text("");
  console.log("Information retrieved");
}

button.connect("clicked", () => {
  onClicked().catch(console.error);
});

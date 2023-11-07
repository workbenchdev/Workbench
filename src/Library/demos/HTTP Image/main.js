import GLib from "gi://GLib";
import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import Soup from "gi://Soup";

// https://picsum.photos/
const IMAGE_URL = "https://picsum.photos/800";

Gio._promisify(
  Soup.Session.prototype,
  "send_and_read_async",
  "send_and_read_finish",
);

const image_bytes = await getImageBytes(IMAGE_URL);
const texture = Gdk.Texture.new_from_bytes(image_bytes);
workbench.builder.get_object("picture").set_paintable(texture);

async function getImageBytes(url) {
  const session = new Soup.Session();
  const message = new Soup.Message({
    method: "GET",
    uri: GLib.Uri.parse(url, GLib.UriFlags.NONE),
  });
  const bytes = await session.send_and_read_async(message, null, null);
  const { status_code, reason_phrase } = message;
  if (status_code !== 200) {
    throw new Error(`Got ${status_code}, ${reason_phrase}`);
  }
  return bytes;
}

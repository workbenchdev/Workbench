import GLib from "gi://GLib";
import Gdk from "gi://Gdk";
import GdkPixbuf from "gi://GdkPixbuf";
import Gio from "gi://Gio";
import Soup from "gi://Soup";

// https://picsum.photos/
const IMAGE_URL = "https://picsum.photos/800";

Gio._promisify(Soup.Session.prototype, "send_async", "send_finish");
Gio._promisify(
  GdkPixbuf.Pixbuf,
  "new_from_stream_async",
  "new_from_stream_finish",
);

const input_stream = await getInputStream(IMAGE_URL);
const pixbuf = await GdkPixbuf.Pixbuf.new_from_stream_async(input_stream, null);
const texture = Gdk.Texture.new_for_pixbuf(pixbuf);
workbench.builder.get_object("picture").set_paintable(texture);

async function getInputStream(url) {
  const session = new Soup.Session();
  const message = new Soup.Message({
    method: "GET",
    uri: GLib.Uri.parse(url, GLib.UriFlags.NONE),
  });
  const input_stream = await session.send_async(message, null, null);
  const { status_code, reason_phrase } = message;
  if (status_code !== 200) {
    throw new Error(`Got ${status_code}, ${reason_phrase}`);
  }
  return input_stream;
}

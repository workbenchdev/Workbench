import gi

gi.require_version("Gdk", "4.0")
gi.require_version("Soup", "3.0")
from gi.repository import GLib, Gdk, Soup
import workbench

# https://picsum.photos/
IMAGE_URL = "https://picsum.photos/800"


def on_receive_bytes(session, result, message):
    bytes = session.send_and_read_finish(result)
    if message.get_status() != Soup.Status.OK:
        raise Exception(f"Got {message.get_status()}, {message.get_reason_phrase()}")
    texture = Gdk.Texture.new_from_bytes(bytes)
    workbench.builder.get_object("picture").set_paintable(texture)


def get_image_bytes(url):
    session = Soup.Session()
    message = Soup.Message(
        method="GET",
        uri=GLib.Uri.parse(url, GLib.UriFlags.NONE),
    )
    session.send_and_read_async(
        message, GLib.PRIORITY_DEFAULT, None, on_receive_bytes, message
    )


get_image_bytes(IMAGE_URL)

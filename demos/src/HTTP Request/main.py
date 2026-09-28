import gi

gi.require_version("Soup", "3.0")
from gi.repository import GLib, Soup
import workbench
import json

http_session = Soup.Session()
article_text_view = workbench.builder.get_object("article_text_view")
article_title = workbench.builder.get_object("article_title")


def fetch_wikipedia_todays_featured_article():
    # https://gjs-docs.gnome.org/glib20~2.0/glib.datetime
    date = GLib.DateTime.new_now_local()

    # https://api.wikimedia.org/wiki/Feed_API/Reference/Featured_content
    language = "en"
    url = f"https://api.wikimedia.org/feed/v1/wikipedia/{language}/featured/{date.format('%Y/%m/%d')}"
    message = Soup.Message.new("GET", url)

    http_session.send_and_read_async(
        message, GLib.PRIORITY_DEFAULT, None, on_receive_bytes, message
    )


def on_receive_bytes(session, result, message):
    if message.get_status() != Soup.Status.OK:
        print(f"HTTP Status {message.get_status()}")
        return

    bytes = session.send_and_read_finish(result)
    decoded_text = bytes.unref_to_array().decode("utf-8")
    json_dict = json.loads(decoded_text)
    article_text_view.get_buffer().set_text(json_dict["tfa"]["extract"], -1)
    article_title.set_label(json_dict["tfa"]["titles"]["normalized"])


fetch_wikipedia_todays_featured_article()

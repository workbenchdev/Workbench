import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Soup from "gi://Soup";

Gio._promisify(
  Soup.Session.prototype,
  "send_and_read_async",
  "send_and_read_finish",
);

const http_session = new Soup.Session();
const article_text_view = workbench.builder.get_object("article_text_view");
const article_title = workbench.builder.get_object("article_title");

fetchWikipediaTodaysFeaturedArticle().catch(console.error);

async function fetchWikipediaTodaysFeaturedArticle() {
  // https://gjs-docs.gnome.org/glib20~2.0/glib.datetime
  const date = GLib.DateTime.new_now_local();

  // https://api.wikimedia.org/wiki/Feed_API/Reference/Featured_content
  const language = "en";
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/${language}/featured/${date.format(
    "%Y/%m/%d",
  )}`;
  const message = Soup.Message.new("GET", url);

  const bytes = await http_session.send_and_read_async(
    message,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  if (message.status_code !== 200) {
    console.error(`HTTP Status ${message.status_code}`);
    return;
  }

  const text_decoder = new TextDecoder("utf-8");
  const decoded_text = text_decoder.decode(bytes.toArray().buffer);
  const json = JSON.parse(decoded_text);

  article_text_view.buffer.set_text(json.tfa.extract, -1);
  article_title.label = json.tfa.titles.normalized;
}

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Soup from "gi://Soup";

Gio._promisify(Soup.Session.prototype, "send_async", "send_finish");
Gio._promisify(Gio.OutputStream.prototype, "splice_async", "splice_finish");

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

  const input_stream = await http_session.send_async(
    message,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  if (message.status_code !== 200) {
    console.error(`HTTP Status ${message.status_code}`);
    return;
  }

  const data = await readAsString(input_stream);
  const json = JSON.parse(data);

  article_text_view.buffer.set_text(json.tfa.extract, -1);
  article_title.label = json.tfa.titles.normalized;
}

async function readAsString(input_stream) {
  const output_stream = Gio.MemoryOutputStream.new_resizable();

  await output_stream.splice_async(
    input_stream,
    Gio.OutputStreamSpliceFlags.CLOSE_TARGET |
      Gio.OutputStreamSpliceFlags.CLOSE_SOURCE,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  const bytes = output_stream.steal_as_bytes();
  const text_decoder = new TextDecoder("utf-8");
  return text_decoder.decode(bytes.toArray().buffer);
}

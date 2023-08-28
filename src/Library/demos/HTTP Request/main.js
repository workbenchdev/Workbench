import Soup from "gi://Soup";
import GLib from "gi://GLib";
import Gio from "gi://Gio";

Gio._promisify(Soup.Session.prototype, "send_async", "send_finish");

const http_session = new Soup.Session();
const article_text_view = workbench.builder.get_object("article_text_view");
const article_title = workbench.builder.get_object("article_title");

async function fetchFeaturedArticle() {
  try {
    // Date
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    //Make request
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
    const message = Soup.Message.new("GET", url);

    const input_stream = await http_session.send_async(
      message,
      GLib.PRIORITY_DEFAULT,
      null,
    );

    if (message.status_code !== 200) {
      article_title.label = "Failed to fetch data";
      return;
    }

    const data = await inputStreamToString(input_stream);
    const json = JSON.parse(data);

    const text_buffer = article_text_view.get_buffer();
    text_buffer.set_text(json.tfa.extract, -1);

    const formatted_title = json.tfa.title
      ? json.tfa.title.replace(/_/g, " ")
      : "Today's Featured Article";

    article_title.label = formatted_title;
  } catch (error) {
    article_title.label = "Failed to fetch data";
    console.error("Error:", error);
  }
}

async function inputStreamToString(inputStream) {
  const dataInputStream = new Gio.DataInputStream({
    base_stream: inputStream,
  });

  let data = "";
  let [line, length] = await dataInputStream.read_line_async(
    GLib.PRIORITY_DEFAULT,
    null,
  );

  const textDecoder = new TextDecoder("utf-8"); // Initialize TextDecoder

  while (line !== null) {
    data += textDecoder.decode(line); // Decode the line to string
    [line, length] = await dataInputStream.read_line_async(
      GLib.PRIORITY_DEFAULT,
      null,
    );
  }
  return data;
}

// Fetch the featured article
fetchFeaturedArticle();

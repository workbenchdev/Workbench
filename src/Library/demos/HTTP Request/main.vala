#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libsoup-3.0 --pkg json-glib-1.0

public errordomain FetchError {
  FAILED_REQUEST,
  FAILED_TO_PARSE
}

private Gtk.TextView article_text_view;
private Gtk.Label article_title;

public async void main () {
  article_text_view = (Gtk.TextView) workbench.builder.get_object ("article_text_view");
  article_title = (Gtk.Label) workbench.builder.get_object ("article_title");
  try {
    yield fetch_wikipedia_todays_featured_article ();
  } catch (Error e) {
    critical (e.message);
  }
}

private async void fetch_wikipedia_todays_featured_article () throws Error {
  var date = new DateTime.now_local ();
  var http_session = new Soup.Session ();

  // https://api.wikimedia.org/wiki/Feed_API/Reference/Featured_content
  string language = "en";
  string url =
    @"https://api.wikimedia.org/feed/v1/wikipedia/$language/featured/$(date.format ("%Y/%m/%d"))";

  var message = new Soup.Message ("GET", url);
  InputStream input_stream = yield http_session.send_async (message, Priority.DEFAULT, null);

  if (message.status_code != 200) {
    throw new FetchError.FAILED_REQUEST (@"Failed Request. HTTP Status: $(message.status_code)");
  }

  string json_data = yield read_string (input_stream);
  parse_json_response (json_data);
}

private async string read_string (InputStream input_stream) throws Error {
  var output_stream = new MemoryOutputStream.resizable ();
  yield output_stream.splice_async (
    input_stream, // Source
    CLOSE_TARGET | CLOSE_SOURCE, // Flags
    Priority.DEFAULT, // Priority
    null // Cancellable
  );

  uint8[] data = output_stream.steal_data ();
  return (string) data;
}

private void parse_json_response (string json) throws Error {
  // https://valadoc.org/json-glib-1.0/Json.Parser.html
  var parser = new Json.Parser ();
  parser.load_from_data (json);

  // https://valadoc.org/json-glib-1.0/Json.Reader.html
  Json.Node root_node = parser.get_root ();
  var reader = new Json.Reader (root_node);

  // Read member `tfa` (Today's Featured Article), which contains the article extract and titles
  // Json.Reader.read_member () returns false in case of failure
  if (!reader.read_member ("tfa")) {
    throw new FetchError.FAILED_TO_PARSE ("`tfa` not found");
  }

  // Read `extract` member, which contains the content of the article
  if (!reader.read_member ("extract")) {
    throw new FetchError.FAILED_TO_PARSE ("Article's `extract` not found");
  }

  article_text_view.buffer.text = reader.get_string_value ();

  // Stop reading `extract` and go back to `tfa`
  reader.end_member ();

  // Read the `titles` member, which contains the article title in multiple formats
  if (!reader.read_member ("titles")) {
    throw new FetchError.FAILED_TO_PARSE ("Article's `titles` not found");
  }

  // Read the `normalized` member of `titles`, the article title
  if (!reader.read_member ("normalized")) {
    throw new FetchError.FAILED_TO_PARSE ("`normalized` title not found");
  }

  article_title.label = reader.get_string_value ();
}

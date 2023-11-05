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

  Bytes message_bytes = yield http_session.send_and_read_async (message, Priority.DEFAULT, null);
  if (message.status_code != 200) {
    throw new FetchError.FAILED_REQUEST (@"Failed Request. HTTP Status: $(message.status_code)");
  }

  unowned uint8[] data = message_bytes.get_data ();
  string json_data = (string) data;
  parse_json_response (json_data);
}


private void parse_json_response (string json) throws Error {
  // https://valadoc.org/json-glib-1.0/Json.Parser.html
  var parser = new Json.Parser ();
  parser.load_from_data (json);

  Json.Node root_node = parser.get_root ();
  // https://valadoc.org/json-glib-1.0/Json.Object.html
  Json.Object root_object = root_node.get_object ();

  /*
   * The JSON response must have the following structure:
   * {
   *   "tfa": {
   *      "extract": "Content of the Article",
   *      "titles": {
   *       "normalized": "Normalized Title",
   *       ...
   *     },
   *     ...
   *   },
   *   ...
   * }
   */
  Json.Object? tfa = root_object.get_object_member ("tfa");
  if (tfa == null) {
    throw new FetchError.FAILED_TO_PARSE ("`tfa` not found");
  }

  if (!tfa.has_member ("extract")) {
    throw new FetchError.FAILED_TO_PARSE ("Article's `extract` not found");
  }
  article_text_view.buffer.text = tfa.get_string_member ("extract");

  Json.Object? titles = tfa.get_object_member ("titles");
  if (titles == null || !titles.has_member ("normalized")) {
    throw new FetchError.FAILED_TO_PARSE ("Article's `titles` not found");
  }

  article_title.label = titles.get_string_member ("normalized");
}

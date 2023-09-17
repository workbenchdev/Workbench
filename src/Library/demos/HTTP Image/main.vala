#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gdk-pixbuf-2.0 --pkg libsoup-3.0

public errordomain MessageError {
  FAILED;
}

// https://picsum.photos/
private const string IMAGE_URL = "https://picsum.photos/800";

public async void main () {
  try {
    var input_stream = yield get_input_stream (IMAGE_URL);
    var pixbuf = yield new Gdk.Pixbuf.from_stream_async (input_stream, null);

    var picture = (Gtk.Picture) workbench.builder.get_object ("picture");
    picture.set_pixbuf (pixbuf);
  } catch (Error e) {
    critical (e.message);
  }
}

private async InputStream? get_input_stream (string url) throws Error {
  var session = new Soup.Session ();
  var message = new Soup.Message.from_uri ("GET", Uri.parse (url, NONE));

  InputStream input_stream = yield session.send_async (message, Priority.DEFAULT, null);

  uint status_code = message.status_code;
  string reason = message.reason_phrase;

  if (status_code != 200) {
    throw new MessageError.FAILED (@"Got $status_code: $reason");
  }

  return input_stream;
}

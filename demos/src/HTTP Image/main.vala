#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libsoup-3.0

public errordomain MessageError {
    FAILED;
}

// https://picsum.photos/
private const string IMAGE_URL = "https://picsum.photos/800";

public async void main () {
    try {
        var picture = (Gtk.Picture) workbench.builder.get_object ("picture");
        Bytes image_bytes = yield get_image_bytes (IMAGE_URL);

        picture.paintable = Gdk.Texture.from_bytes (image_bytes);
    } catch (Error e) {
        critical (e.message);
    }
}

private async Bytes ? get_image_bytes (string url) throws Error {
    var session = new Soup.Session ();
    var message = new Soup.Message.from_uri ("GET", Uri.parse (url, NONE));

    Bytes image_bytes = yield session.send_and_read_async (message, Priority.DEFAULT, null);

    Soup.Status status = message.get_status ();
    string reason = message.reason_phrase;

    if (status != Soup.Status.OK) {
        throw new MessageError.FAILED (@"Got $status: $reason");
    }

    return image_bytes;
}

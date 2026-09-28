#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg libsoup-3.0

private Gtk.Button button_connect;
private Gtk.Button button_disconnect;
private Gtk.Entry entry_url;
private Gtk.Button button_send;
private Soup.WebsocketConnection connection;

public void main () {
    entry_url = (Gtk.Entry) workbench.builder.get_object ("entry_url");
    button_connect = (Gtk.Button) workbench.builder.get_object ("button_connect");
    button_disconnect = (Gtk.Button) workbench.builder.get_object ("button_disconnect");
    button_send = (Gtk.Button) workbench.builder.get_object ("button_send");
    var entry_message = (Gtk.Entry) workbench.builder.get_object ("entry_message");

    button_connect.clicked.connect (connect.begin);

    button_disconnect.clicked.connect (() => {
        connection.close (Soup.WebsocketCloseCode.NORMAL, null);
    });

    button_send.clicked.connect (() => {
        send (entry_message.text);
    });
}

private async void connect () {
    try {
        string uri = GLib.Uri.parse (entry_url.text, NONE).to_string ();
        var session = new Soup.Session ();
        var message = new Soup.Message ("GET", uri);

        // https://valadoc.org/libsoup-3.0/Soup.Session.websocket_connect_async.html
        connection = yield session.websocket_connect_async (message,
            null,
            null,
            1,
            null);
    } catch (Error err) {
        stderr.printf (@"Error : $(err.message)\n");
        return;
    }

    connection.closed.connect (on_closed);
    connection.error.connect (on_error);
    connection.message.connect (on_message);

    on_open ();
}

private void on_open () {
    stdout.printf ("open\n");
    button_connect.sensitive = false;
    button_disconnect.sensitive = true;
    button_send.sensitive = true;
}

private void on_closed () {
    stdout.printf ("closed\n");
    connection = null;
    button_connect.sensitive = true;
    button_disconnect.sensitive = false;
    button_send.sensitive = false;
}

private void on_error (Error err) {
    stderr.printf (@"Error: $(err.message)\n");
}

private void on_message (int type, Bytes message) {
    if (type != Soup.WebsocketDataType.TEXT) {
        return;
    }

    string text = (string) message.get_data ();
    print (@"Received: $text\n");
}

private void send (string text) {
    print (@"Sent: $text\n");
    connection.send_text (text);
}

#!/usr/bin/vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg libsoup-3.0

private Gtk.Button button_connect;
private Gtk.Button button_disconnect;
private Gtk.Button button_send;
private Soup.WebsocketConnection connection;

public void main () {
  button_connect = workbench.builder.get_object ("button_connect") as Gtk.Button;
  button_disconnect = workbench.builder.get_object ("button_disconnect") as Gtk.Button;
  button_send = workbench.builder.get_object ("button_send") as Gtk.Button;
  var entry_url = workbench.builder.get_object ("entry_url") as Gtk.Entry;
  var entry_message = workbench.builder.get_object ("entry_message") as Gtk.Entry;

  button_connect.clicked.connect (() => {
    var message_uri = entry_url.get_text ();
    stdout.printf ("entry url: " + message_uri + "\n");

    try {
      var uri = GLib.Uri.parse (message_uri, GLib.UriFlags.NONE).to_string ();
      var session = new Soup.Session ();
      var message = new Soup.Message (
        "GET",
        uri
      );

      // https://libsoup.org/libsoup-3.0/SoupSession.html#soup-session-websocket-connect-async
      session.websocket_connect_async.begin (
        message,
        null,
        null,
        1,
        null,
        (obj, res) => {
          try {
            connection = session.websocket_connect_async.end (res);
          } catch (Error err) {
            onError (err);
            return;
          }

          connection.closed.connect (onClosed);
          connection.error.connect (onError);
          connection.message.connect (onMessage);

          onOpen();
        }
      );
    } catch (Error err) {
        stderr.printf ("error: " + err.message + "\n");
        return;
    }
  });

  button_disconnect.clicked.connect(() => {
    connection.close(Soup.WebsocketCloseCode.NORMAL, null);
  });

  button_send.clicked.connect (() => {
    var message_text = entry_message.get_text();
    stdout.printf ("preparing to send: " + message_text + "\n");
    send (message_text);
  });
}

private void onOpen () {
  stdout.printf ("open\n");
  button_connect.set_sensitive (false);
  button_disconnect.set_sensitive (true);
  button_send.set_sensitive (true);
}

private void onClosed () {
  stdout.printf ("closed");
  connection = null;
  button_connect.set_sensitive (true);
  button_disconnect.set_sensitive (false);
  button_send.set_sensitive (false);
}

private void onError (Error err) {
  stdout.printf ("error");
  stderr.printf (err.message);
}

private void onMessage (int type, Bytes msg) {
  if (type != Soup.WebsocketDataType.TEXT) return;
  StringBuilder str = new StringBuilder ();
  for (int i = 0; i < msg.length; i++) {
    str.append_c (((char)msg.get (i)));
  }
  stdout.printf ("received: " + str.str + "\n");
}

private void send (string msg) {
  stdout.printf ("sent: " + msg + "\n");
  connection.send_text (msg);
}


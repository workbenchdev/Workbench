import Soup from "gi://Soup?version=3.0";
import GLib from "gi://GLib";

const byteArray = imports.byteArray;

const text_decoder = new TextDecoder("utf-8");
const text_encoder = new TextEncoder("utf-8");

const { builder } = workbench;

const button_connect = builder.get_object("button_connect");
const button_disconnect = builder.get_object("button_disconnect");
const button_send = builder.get_object("button_send");
const entry_url = builder.get_object("entry_url");
const entry_message = builder.get_object("entry_message");

let connection = null;

function onOpen() {
  console.log("open");
  button_connect.sensitive = false;
  button_disconnect.sensitive = true;
  button_send.sensitive = true;
}

function onClosed() {
  console.log("closed");
  connection = null;
  button_connect.sensitive = true;
  button_disconnect.sensitive = false;
  button_send.sensitive = false;
}

function onError(self, err) {
  console.log("error");
  logError(err);
}

function onMessage(self, type, message) {
  if (type !== Soup.WebsocketDataType.TEXT) return;
  const str = text_decoder.decode(byteArray.fromGBytes(message));
  console.log("received:", str);
}

function send(message) {
  connection.send_message(
    Soup.WebsocketDataType.TEXT,
    byteArray.toGBytes(text_encoder.encode(message))
  );
  console.log("sent:", message);
}

button_connect.connect("clicked", () => {
  const session = new Soup.Session();
  const message = new Soup.Message({
    method: "GET",
    uri: GLib.Uri.parse(entry_url.get_text(), GLib.UriFlags.NONE),
  });
  // https://libsoup.org/libsoup-3.0/SoupSession.html#soup-session-websocket-connect-async
  session.websocket_connect_async(
    message,
    null,
    [],
    null,
    null,
    (self, result) => {
      try {
        // https://libsoup.org/libsoup-3.0/SoupSession.html#soup-session-websocket-connect-finish
        connection = session.websocket_connect_finish(result);
      } catch (err) {
        logError(err);
        return;
      }

      connection.connect("closed", onClosed);
      connection.connect("error", onError);
      connection.connect("message", onMessage);

      onOpen();
    }
  );
});

button_disconnect.connect("clicked", () => {
  connection.close(Soup.WebsocketCloseCode.NORMAL, null);
});

button_send.connect("clicked", () => {
  const message = entry_message.get_text();
  send(message);
});

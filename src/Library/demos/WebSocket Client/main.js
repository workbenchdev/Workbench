import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Soup from "gi://Soup";

Gio._promisify(
  Soup.Session.prototype,
  "websocket_connect_async",
  "websocket_connect_finish",
);

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

function onError(_self, err) {
  console.log("error");
  console.error(err);
}

function onMessage(_self, type, message) {
  if (type !== Soup.WebsocketDataType.TEXT) return;
  const str = text_decoder.decode(message.toArray());
  console.log("received:", str);
}

function send(message) {
  connection.send_message(
    Soup.WebsocketDataType.TEXT,
    new GLib.Bytes(text_encoder.encode(message)),
  );
  console.log("sent:", message);
}

button_connect.connect("clicked", () => {
  connect().catch(console.error);
});

button_disconnect.connect("clicked", () => {
  connection.close(Soup.WebsocketCloseCode.NORMAL, null);
});

button_send.connect("clicked", () => {
  const message = entry_message.get_text();
  send(message);
});

async function connect() {
  const session = new Soup.Session();
  const message = new Soup.Message({
    method: "GET",
    uri: GLib.Uri.parse(entry_url.get_text(), GLib.UriFlags.NONE),
  });

  // https://gjs-docs.gnome.org/soup30/soup.session#method-websocket_connect_async
  connection = await session.websocket_connect_async(
    message,
    null,
    [],
    null,
    null,
  );

  connection.connect("closed", onClosed);
  connection.connect("error", onError);
  connection.connect("message", onMessage);

  onOpen();
}

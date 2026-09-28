import gi

gi.require_version("Soup", "3.0")
from gi.repository import GLib, Soup
import sys
import workbench

builder = workbench.builder

button_connect = builder.get_object("button_connect")
button_disconnect = builder.get_object("button_disconnect")
button_send = builder.get_object("button_send")
entry_url = builder.get_object("entry_url")
entry_message = builder.get_object("entry_message")

connection = None


def on_open():
    print("open")
    button_connect.set_sensitive(False)
    button_disconnect.set_sensitive(True)
    button_send.set_sensitive(True)


def on_closed(_self):
    print("closed")
    global connection
    connection = None
    button_connect.set_sensitive(True)
    button_disconnect.set_sensitive(False)
    button_send.set_sensitive(False)


def on_error(_self, err):
    print("error")
    print(err, file=sys.stderr)


def on_message(_self, data_type, message):
    if data_type != Soup.WebsocketDataType.TEXT:
        return
    text = message.unref_to_array().decode("utf-8")
    print("received:", text)


def send(text):
    connection.send_message(
        Soup.WebsocketDataType.TEXT,
        GLib.Bytes(text.encode("utf-8")),
    )
    print("sent:", text)


def on_button_send_clicked(_button):
    text = entry_message.get_text()
    send(text)


def on_connected(session, result):
    global connection
    connection = session.websocket_connect_finish(result)
    connection.connect("closed", on_closed)
    connection.connect("error", on_error)
    connection.connect("message", on_message)

    on_open()


def connect(_button):
    session = Soup.Session()
    message = Soup.Message(
        method="GET",
        uri=GLib.Uri.parse(entry_url.get_text(), GLib.UriFlags.NONE),
    )

    session.websocket_connect_async(
        message, None, [], GLib.PRIORITY_DEFAULT, None, on_connected
    )


button_connect.connect("clicked", connect)
button_disconnect.connect(
    "clicked", lambda _: connection.close(Soup.WebsocketCloseCode.NORMAL, None)
)
button_send.connect("clicked", on_button_send_clicked)

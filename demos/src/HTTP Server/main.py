import gi

gi.require_version("Soup", "3.0")
from gi.repository import Soup
import workbench

button_server = workbench.builder.get_object("button_server")
linkbutton = workbench.builder.get_object("linkbutton")
label_greetings = workbench.builder.get_object("label_greetings")

port = 0


def handler(_server, msg, _path, _query):
    msg.set_status(Soup.Status.OK, None)
    msg.get_response_headers().set_content_type("text/html", {"charset": "UTF-8"})
    msg.get_response_body().append(
        b"""
    <html>
    <body>
      <form action="/hello">
        <label for="name">What is your name?</label>
        <input name="name">
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  """
    )


def hello_handler(_server, msg, _path, query):
    if not query:
        msg.set_redirect(Soup.Status.FOUND, "/")
        return

    user_agent = msg.get_request_headers().get_one("User-Agent")

    label_greetings.set_label(f"Hello {query['name']}, your browser is\n{user_agent}")

    msg.set_status(Soup.Status.OK, None)
    msg.get_response_headers().set_content_type("text/html", {"charset": "UTF-8"})
    msg.get_response_body().append(
        b"""
    <html>
    <body>
      Thank you, please go back to Workbench.
    </body>
    </html>
  """
    )


def start_server():
    global port
    server.listen_local(port, Soup.ServerListenOptions(0))
    port = server.get_uris()[0].get_port()
    linkbutton.set_uri(f"http://localhost:{port}")
    button_server.set_label("Stop Server")


def stop_server():
    server.disconnect()
    linkbutton.set_uri("")
    button_server.set_label("Start Server")


def on_clicked(button_server):
    if button_server.get_active():
        start_server()
    else:
        stop_server()


server = Soup.Server()

server.add_handler("/", handler)
server.add_handler("/hello", hello_handler)

button_server.connect("clicked", on_clicked)

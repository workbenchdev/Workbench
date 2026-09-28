import gi

gi.require_version("WebKit", "6.0")
from gi.repository import GLib, GObject, WebKit
import workbench

button_back = workbench.builder.get_object("button_back")
button_forward = workbench.builder.get_object("button_forward")
button_reload = workbench.builder.get_object("button_reload")
button_stop = workbench.builder.get_object("button_stop")
url_bar = workbench.builder.get_object("url_bar")
web_view = workbench.builder.get_object("web_view")

# URL bar displays the current loaded page
web_view.bind_property(
    "uri",
    url_bar.get_buffer(),
    "text",
    GObject.BindingFlags.DEFAULT,
)


def on_activate(_entry):
    url = url_bar.get_buffer().get_text()
    scheme = GLib.Uri.peek_scheme(url)
    if not scheme:
        url = f"http://{url}"

    web_view.load_uri(url)


def on_load_changed(_self, load_event):
    match load_event:
        case WebKit.LoadEvent.STARTED:
            print("Page loading started")
        case WebKit.LoadEvent.FINISHED:
            print("Page loading has finished ")


def on_load_failed(_self, _load_event, fail_url, error):
    # Loading failed as a result of calling stop_loading
    if error.matches(WebKit.NetworkError, WebKit.NetworkError.CANCELLED):
        return

    web_view.load_alternate_html(
        error_page(fail_url, error.message),
        fail_url,
        None,
    )


def on_timeout():
    url_bar.set_progress_fraction(0)
    return False


def on_estimated_load_progress(_widget, _load_progress):
    url_bar.set_progress_fraction(web_view.get_estimated_load_progress())
    if url_bar.get_progress_fraction() == 1:
        GLib.timeout_add(500, on_timeout)


def error_page(fail_url, msg):
    error = f"""
    <div style="text-align:center margin:24px">
    <h2>An error occurred while loading {fail_url}</h2>
    <p>{msg}</p>
    </div>
  """
    return error


web_view.load_uri("https://www.gnome.org/")

url_bar.connect("activate", on_activate)

button_forward.connect("clicked", lambda _: web_view.go_forward())
button_back.connect("clicked", lambda _: web_view.go_back())
button_reload.connect("clicked", lambda _: web_view.reload())
button_stop.connect("clicked", lambda _: web_view.stop_loading())

web_view.connect("load-changed", on_load_changed)
web_view.connect("load-failed", on_load_failed)
web_view.connect("notify::estimated-load-progress", on_estimated_load_progress)

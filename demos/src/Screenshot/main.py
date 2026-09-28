import gi

gi.require_version("Adw", "1")
gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Adw, Gio, Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)

button = workbench.builder.get_object("button")
picture = workbench.builder.get_object("picture")

button.connect("clicked", lambda _: take_screenshot())


def take_screenshot():
    flags = Xdp.ScreenshotFlags.NONE
    portal.take_screenshot(parent, flags, None, on_finished)


def on_finished(portal, result):
    try:
        uri = portal.take_screenshot_finish(result)
    except PermissionError:
        show_permission_error()
    file = Gio.File.new_for_uri(uri)
    picture.set_file(file)


def show_permission_error():
    dialog = Adw.AlertDialog(
        heading="Permission Error",
        body="Ensure Screenshot permission is enabled in\nSettings → Apps → Workbench",
        close_response="ok",
    )

    dialog.add_response("ok", "OK")
    dialog.present(workbench.window)

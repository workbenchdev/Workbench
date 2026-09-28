import gi

gi.require_version("Gtk", "4.0")
from gi.repository import GLib, Gio, Gtk
import workbench

launch_file = workbench.builder.get_object("launch_file")
file_name = workbench.builder.get_object("file_name")
file_location = workbench.builder.get_object("file_location")
change_file = workbench.builder.get_object("change_file")
uri_launch = workbench.builder.get_object("uri_launch")
uri_details = workbench.builder.get_object("uri_details")

# File Launcher

file = Gio.File.new_for_uri(workbench.resolve("workbench.txt"))
file_launcher = Gtk.FileLauncher(
    always_ask=True,
    file=file,
)


def on_file_changed(_launcher, _file):
    details = file_launcher.get_file().query_info(
        "standard::display-name",
        Gio.FileQueryInfoFlags.NONE,
        None,
    )
    file_name.set_label(details.get_display_name())


def on_uri_changed(_entry):
    text = uri_details.get_text()

    try:
        uri_launch.set_sensitive(GLib.Uri.is_valid(text, GLib.UriFlags.NONE))
    except Exception:
        uri_launch.set_sensitive(False)


def on_file_opened(dialog, result):
    file = dialog.open_finish(result)
    file_launcher.set_file(file)


launch_file.connect("clicked", lambda _: file_launcher.launch(workbench.window, None))

file_launcher.connect("notify::file", on_file_changed)

file_location.connect(
    "clicked", lambda _: file_launcher.open_containing_folder(workbench.window, None)
)

change_file.connect(
    "clicked", lambda _: Gtk.FileDialog().open(workbench.window, None, on_file_opened)
)

# URI Launcher

uri_launch.connect(
    "clicked",
    lambda _: Gtk.UriLauncher(uri=uri_details.get_text()).launch(
        workbench.window, None
    ),
)

uri_details.connect("changed", on_uri_changed)

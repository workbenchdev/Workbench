import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

button: Gtk.Button = workbench.builder.get_object("button")
spinner: Gtk.Spinner = workbench.builder.get_object("spinner")


def button_clicked(_widget):
    if spinner.get_visible():
        button.set_icon_name("media-playback-start")
        spinner.set_visible(False)
    else:
        button.set_icon_name("media-playback-stop")
        spinner.set_visible(True)


button.connect("clicked", button_clicked)

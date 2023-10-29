import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

button: Gtk.Button = workbench.builder.get_object("button")
spinner: Gtk.Spinner = workbench.builder.get_object("spinner")


def button_clicked(_widget):
    if spinner.get_spinning():
        button.set_icon_name("media-playback-start")
        spinner.set_spinning(False)
    else:
        button.set_icon_name("media-playback-pause")
        spinner.set_spinning(True)


button.connect("clicked", button_clicked)

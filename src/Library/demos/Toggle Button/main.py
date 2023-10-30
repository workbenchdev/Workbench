import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

buttons = {
    "button_no_look": "Don't look",
    "button_look": "Look",
    "button_camera": "Camera",
    "button_flashlight": "Flashlight",
    "button_console": "Console",
}


def on_active(name):
    return lambda button, _: print(f'{name} {"On" if button.get_active() else "Off"}')


for id, name in buttons.items():
    button: Gtk.Button = workbench.builder.get_object(id)
    button.connect("notify::active", on_active(name))

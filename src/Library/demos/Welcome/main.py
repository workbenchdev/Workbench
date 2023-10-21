import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench


def greet(_widget):
    dialog = Adw.MessageDialog(body="Hello World!", transient_for=workbench.window)

    dialog.add_response("ok", "Ok")
    dialog.connect("response", handle_response)
    dialog.present()


def handle_response(dialog: Adw.MessageDialog, response: str):
    print(response)
    dialog.close()


subtitle_box: Gtk.Box = workbench.builder.get_object("subtitle")
button = Gtk.Button.new_with_label("Press me")
button.set_margin_top(6)
button.add_css_class("suggested-action")

button.connect("clicked", greet)
subtitle_box.append(button)

print("Welcome to Workbench!")

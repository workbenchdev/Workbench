import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench


def greet(_button):
    dialog = Adw.AlertDialog(body="Hello World!")

    dialog.add_response("ok", "Ok")
    dialog.connect("response", dialog_response)
    dialog.present(workbench.window)


def dialog_response(dialog, response):
    print(response)
    dialog.close()


subtitle_box: Gtk.Box = workbench.builder.get_object("subtitle")

button = Gtk.Button(label="Press me", margin_top=6, css_classes=["suggested-action"])
button.connect("clicked", greet)

subtitle_box.append(button)

print("Welcome to Workbench!")

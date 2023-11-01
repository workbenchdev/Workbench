import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gdk, Gio, Gtk
import workbench


color_dialog_button = workbench.builder.get_object("color_dialog_button")
custom_button = workbench.builder.get_object("custom_button")

color = Gdk.RGBA()
color.parse("red")

dialog_standard = Gtk.ColorDialog(
    title="Select a color",
    modal=True,
    with_alpha=True,
)

color_dialog_button.set_dialog(dialog_standard)
color_dialog_button.set_rgba(color)

color_dialog_button.connect(
    "notify::rgba",
    lambda *_: print(
        f"Color Dialog Button: The color selected is {color_dialog_button.get_rgba().to_string()}",
    ),
)

dialog_custom = Gtk.ColorDialog(
    title="Select a color",
    modal=True,
    with_alpha=False,
)


def on_color_selected(_dialog, _result):
    color = _dialog.choose_rgba_finish(_result)
    print(f"Custom Button: The color selected is {color.to_string()}")


def on_clicked(_button):
    dialog_custom.choose_rgba(workbench.window, None, None, on_color_selected)


custom_button.connect("clicked", on_clicked)

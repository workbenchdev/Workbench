import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench


font_dialog_button = workbench.builder.get_object("font_dialog_button")
custom_button = workbench.builder.get_object("custom_button")

dialog_standard = Gtk.FontDialog(title="Select a Font", modal=True)
font_dialog_button.set_dialog(dialog_standard)


def on_font_description_changed(_button, _description):
    font_name = font_dialog_button.get_font_desc().to_string()
    print(f"Font: {font_name}")


def on_clicked(_button):
    dialog_custom.choose_family(workbench.window, None, None, on_family_chosen)


def on_family_chosen(_dialog, result):
    family = dialog_custom.choose_family_finish(result)
    print(f"Font Family: {family.get_name()}")


font_dialog_button.connect("notify::font-desc", on_font_description_changed)

dialog_custom = Gtk.FontDialog(
    title="Select a Font Family",
    modal=True,
)

custom_button.connect("clicked", on_clicked)

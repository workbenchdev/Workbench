import gi

gi.require_version("Gtk", "4.0")
gi.require_version("GLib", "2.0")
gi.require_version("Gio", "2.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, GLib, Gio, Adw
import workbench

overlay: Adw.ToastOverlay = workbench.builder.get_object("overlay")

button_simple: Gtk.Button = workbench.builder.get_object("button_simple")


def simple(_):
    toast = Adw.Toast(
        title="Toasts are delicious!",
        timeout=1,
    )
    toast.connect("dismissed", lambda _: button_simple.set_sensitive(True))
    overlay.add_toast(toast)
    button_simple.set_sensitive(False)


button_simple.connect("clicked", simple)


def advanced(_):
    message_id = "42"
    toast = Adw.Toast(
        title="Message sent",
        button_label="Undo",
        action_name="win.undo",
        action_target=GLib.Variant.new_string(message_id),
        priority=Adw.ToastPriority.HIGH,
    )
    overlay.add_toast(toast)


workbench.builder.get_object("button_advanced").connect("clicked", advanced)

action_console = Gio.SimpleAction(
    name="undo",
    parameter_type=GLib.VariantType("s"),
)


def on_activate(_self, target):
    value = target.unpack()
    print(f"undo ${value}")


action_console.connect("activate", on_activate)
workbench.window.add_action(action_console)

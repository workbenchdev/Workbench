import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

split_view = workbench.builder.get_object("split_view")
start_toggle = workbench.builder.get_object("start_toggle")
end_toggle = workbench.builder.get_object("end_toggle")

start_toggle.connect(
    "toggled", lambda _toggle: split_view.set_sidebar_position(Gtk.PackType.START)
)

end_toggle.connect(
    "toggled", lambda _toggle: split_view.set_sidebar_position(Gtk.PackType.END)
)

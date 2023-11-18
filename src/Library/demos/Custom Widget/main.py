import gi

gi.require_version("Gtk", "4.0")

from gi.repository import Gtk
import workbench


@Gtk.Template(string=workbench.template)
class AwesomeButton(Gtk.Button):
    # This is normally just "AwesomeButton" as defined in the XML/Blueprint.
    # In your actual code, just put that here. We need to do it like this for technical reasons.
    __gtype_name__ = workbench.template_gtype_name

    @Gtk.Template.Callback()
    def onclicked(self, _button):
        print("Clicked")


container = Gtk.ScrolledWindow()
flow_box = Gtk.FlowBox(hexpand=True)
container.set_child(flow_box)

for _ in range(100):
    widget = AwesomeButton()
    flow_box.append(widget)

workbench.preview(container)

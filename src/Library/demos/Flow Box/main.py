import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Adw, Gtk
import workbench

flowbox = workbench.builder.get_object("flowbox")


def addEmoji(_flowbox, unicode):
    item = Adw.Bin(
        child=Gtk.Label(
            vexpand=True,
            hexpand=True,
            label=unicode,
            css_classes=["emoji"],
        ),
        width_request=100,
        height_request=100,
        css_classes=["card"],
    )
    _flowbox.append(item)


for code in range(128513, 128591):
    addEmoji(flowbox, chr(code))


def on_item_selected(_flowbox, item):
    # FlowBoxChild -> AdwBin -> Label
    emoji = item.get_child().get_child().get_label()
    print("Unicode:", emoji.encode("unicode-escape"))


flowbox.connect("child-activated", on_item_selected)


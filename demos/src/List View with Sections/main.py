import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

list_view = workbench.builder.get_object("list_view")
item_factory = workbench.builder.get_object("item_factory")
header_factory = workbench.builder.get_object("header_factory")


class CustomModel(Gtk.StringList, Gtk.SectionModel):
    def do_get_section(self, position):
        start = position
        end = start + 5
        return (start, end)


def on_setup_item(_, list_item):
    list_item.set_child(Gtk.Label(margin_start=12, halign=Gtk.Align.START))


def on_bind_item(_, list_item):
    item = list_item.get_item()
    label = list_item.get_child()

    label.set_label(item.get_string())


def on_setup_header(_, list_item):
    list_item.set_child(Gtk.Label(label="Header", halign=Gtk.Align.START))


custom_model = CustomModel()

for i in range(1, 201):
    custom_model.append(f"Item {i}")

item_factory.connect("setup", on_setup_item)
item_factory.connect("bind", on_bind_item)

header_factory.connect("setup", on_setup_header)

selection_model = Gtk.NoSelection(model=custom_model)

list_view.set_model(selection_model)

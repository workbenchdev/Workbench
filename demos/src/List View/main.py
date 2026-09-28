import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk
import workbench

list_view = workbench.builder.get_object("list_view")
add = workbench.builder.get_object("add")
remove = workbench.builder.get_object("remove")

string_model = Gtk.StringList.new(
    ["Default Item 1", "Default Item 2", "Default Item 3"]
)

item = 1

model = Gtk.SingleSelection(model=string_model)


def on_item_changed(_list, position, removed, added):
    print(
        f"position: {position}, Item removed? {removed != 0}, Item added? {added != 0}"
    )


def on_selection_changed(*_):
    selected_item = model.get_selected()
    print(f"Model item selected from view: {string_model.get_string(selected_item)}")


string_model.connect("items-changed", on_item_changed)
model.connect("selection-changed", on_selection_changed)

list_view.set_model(model)


def on_add_clicked(*_):
    global item
    new_item = f"New item {item}"
    string_model.append(new_item)
    item += 1


def on_remove_clicked(*_):
    selected_item = model.get_selected()
    string_model.remove(selected_item)


add.connect("clicked", on_add_clicked)
remove.connect("clicked", on_remove_clicked)

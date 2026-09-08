from typing import cast
import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gtk
import workbench

list_view = workbench.builder.get_object("list_view")
grid_view = workbench.builder.get_object("grid_view")
add = workbench.builder.get_object("add")
remove = workbench.builder.get_object("remove")

item = 1


def setup(_factory, list_item: Gtk.ListItem):
    list_box = Gtk.Box(
        width_request=160,
        height_request=160,
        css_classes=["card"],
    )
    label = Gtk.Label(
        halign=Gtk.Align.CENTER,
        hexpand=True,
        valign=Gtk.Align.CENTER,
    )
    list_box.append(label)
    list_item.set_child(list_box)


def bind(_factory, list_item: Gtk.ListItem):
    list_box = list_item.get_child()
    # If you don't use typing / type checkers, you do not need to cast.
    model_item = cast(Gtk.StringObject, list_item.get_item())
    label_widget = cast(Gtk.Label, list_box.get_last_child())

    label_widget.set_label(model_item.get_string())


def items_changed(_list, position: int, removed: int, added: int):
    print(
        f"position: {position}, Item removed? {removed > 0}, Item added? {added > 0}",
    )


def selection_changed(model: Gtk.SingleSelection, _position, _n_items):
    selected_item = model.get_selected()
    # If you don't use typing / type checkers, you do not need to cast.
    backend_model = cast(Gtk.StringList, model.get_model())
    print(f"Model item selected from view: {backend_model.get_string(selected_item)}")


# Model
string_model = Gtk.StringList.new(
    strings=["Default Item 1", "Default Item 2", "Default Item 3"],
)

model = Gtk.SingleSelection.new(model=string_model)

factory_for_grid_view = Gtk.SignalListItemFactory.new()
factory_for_grid_view.connect("setup", setup)
factory_for_grid_view.connect("bind", bind)

# View
model.get_model().connect("items-changed", items_changed)

model.connect("selection-changed", selection_changed)

list_view.set_model(model)
grid_view.set_model(model)
grid_view.set_factory(factory_for_grid_view)


def add_clicked(*args):
    global item
    new_item = f"New item {item}"
    backend_model = cast(Gtk.StringList, model.get_model())
    backend_model.append(new_item)
    item += 1


def remove_clicked(*args):
    selected_item = model.get_selected()
    backend_model = cast(Gtk.StringList, model.get_model())
    backend_model.remove(selected_item)


# Controller
add.connect("clicked", add_clicked)

remove.connect("clicked", remove_clicked)

import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk
import workbench

grid_view = workbench.builder.get_object("grid_view")
add = workbench.builder.get_object("add")
remove = workbench.builder.get_object("remove")

item = 1

string_model = Gtk.StringList.new(
    ["Default Item 1", "Default Item 2", "Default Item 3"]
)

model = Gtk.SingleSelection(model=string_model)

factory_for_grid_view = Gtk.SignalListItemFactory()


def on_factory_for_grid_view_setup(_factory, list_item):
    list_box = Gtk.Box(width_request=160, height_request=160, css_classes=["card"])
    label = Gtk.Label(halign=Gtk.Align.CENTER, hexpand=True, valign=Gtk.Align.CENTER)
    list_box.append(label)
    list_item.set_child(list_box)


def on_factory_for_grid_view_bind(_factory, list_item):
    list_box = list_item.get_child()
    model_item = list_item.get_item()
    label_widget = list_box.get_last_child()

    label_widget.set_label(model_item.get_string())


factory_for_grid_view.connect("setup", on_factory_for_grid_view_setup)
factory_for_grid_view.connect("bind", on_factory_for_grid_view_bind)

grid_view.set_model(model)
grid_view.set_factory(factory_for_grid_view)


def on_item_changed(_list, position, removed, added):
    print(
        f"position: {position}, Item removed? {removed != 0}, Item added? {added != 0}"
    )


def on_selection_changed(*_):
    selected_item = model.get_selected()
    print(f"Model item selected from view: {string_model.get_string(selected_item)}")


string_model.connect("items-changed", on_item_changed)
model.connect("selection-changed", on_selection_changed)


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

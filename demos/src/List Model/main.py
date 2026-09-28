import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Adw", "1")
from gi.repository import Gtk, Adw
import workbench

stack = workbench.builder.get_object("stack")
list_box = workbench.builder.get_object("list_box")
flow_box = workbench.builder.get_object("flow_box")
add = workbench.builder.get_object("add")
remove = workbench.builder.get_object("remove")
list_box_editable = workbench.builder.get_object("list_box_editable")
search_entry = workbench.builder.get_object("search_entry")

# Model
model = Gtk.StringList(strings=["Default Item 1", "Default Item 2", "Default Item 3"])
item = 1

model.connect(
    "items-changed",
    lambda _self, position, removed, added: print(
        f"position: {position}, Item removed? {bool(removed)}, Item added? {bool(added)}",
    ),
)

# Filter-Model
search_expression = Gtk.PropertyExpression.new(
    Gtk.StringObject,
    None,
    "string",
)
filter = Gtk.StringFilter(
    expression=search_expression,
    ignore_case=True,
    match_mode=Gtk.StringFilterMatchMode.SUBSTRING,
)
filter_model = Gtk.FilterListModel(
    model=model,
    filter=filter,
    incremental=True,
)


def create_item_for_list_box(list_item):
    list_row = Adw.ActionRow(
        title=list_item.get_string(),
    )
    return list_row


def create_item_for_flow_box(list_item):
    list_box = Adw.Bin(
        width_request=160,
        height_request=160,
        css_classes=["card"],
        valign=Gtk.Align.START,
        child=Gtk.Label(
            label=list_item.get_string(),
            halign=Gtk.Align.CENTER,
            hexpand=True,
            valign=Gtk.Align.CENTER,
        ),
    )
    return list_box


def create_item_for_filter_model(list_item):
    list_row = Adw.ActionRow(
        title=list_item.get_string(),
    )
    return list_row


def on_add_clicked(_button):
    global item
    new_item = f"Item {item}"
    model.append(new_item)
    item += 1


def on_remove_clicked(_button):
    selected_row = list_box_editable.get_selected_row()
    index = selected_row.get_index()
    model.remove(index)


list_box.bind_model(model, create_item_for_list_box)
flow_box.bind_model(model, create_item_for_flow_box)
list_box_editable.bind_model(filter_model, create_item_for_filter_model)


# Controller
add.connect("clicked", on_add_clicked)

remove.connect("clicked", on_remove_clicked)

search_entry.connect(
    "search-changed", lambda _: filter.set_search(search_entry.get_text())
)

# View
stack.connect("notify::visible-child", lambda *_: print("View changed"))

list_box_editable.connect(
    "row-selected",
    lambda *_: remove.set_sensitive(list_box_editable.get_selected_row() is not None),
)

from gi.repository import GObject, Gio, Gtk
import workbench

drop_down = workbench.builder.get_object("drop_down")
advanced_drop_down = workbench.builder.get_object("advanced_drop_down")


def on_selected_item(_drop_down, _selected_item):
    selected_item = drop_down.get_selected_item().get_string()
    print(selected_item)


def on_advanced_selected_item(_drop_down, _selected_item):
    selected_item = advanced_drop_down.get_selected_item()
    if selected_item:
        print(selected_item.key)


drop_down.connect("notify::selected-item", on_selected_item)

expression = Gtk.ClosureExpression.new(
    GObject.TYPE_STRING,
    lambda obj: obj.get_string(),
    None,
)

drop_down.set_expression(expression)


class KeyValuePair(GObject.Object):
    key = GObject.Property(type=str, flags=GObject.ParamFlags.READWRITE, default="")
    value = GObject.Property(
        type=str,
        nick="Value",
        blurb="Value",
        flags=GObject.ParamFlags.READWRITE,
        default="",
    )


model = Gio.ListStore(item_type=KeyValuePair)

model.splice(
    0,
    0,
    [
        KeyValuePair(key="lion", value="Lion"),
        KeyValuePair(key="tiger", value="Tiger"),
        KeyValuePair(key="leopard", value="Leopard"),
        KeyValuePair(key="elephant", value="Elephant"),
        KeyValuePair(key="giraffe", value="Giraffe"),
        KeyValuePair(key="cheetah", value="Cheetah"),
        KeyValuePair(key="zebra", value="Zebra"),
        KeyValuePair(key="panda", value="Panda"),
        KeyValuePair(key="koala", value="Koala"),
        KeyValuePair(key="crocodile", value="Crocodile"),
        KeyValuePair(key="hippo", value="Hippopotamus"),
        KeyValuePair(key="monkey", value="Monkey"),
        KeyValuePair(key="rhino", value="Rhinoceros"),
        KeyValuePair(key="kangaroo", value="Kangaroo"),
        KeyValuePair(key="dolphin", value="Dolphin"),
    ],
)

list_store_expression = Gtk.PropertyExpression.new(
    KeyValuePair,
    None,
    "value",
)

advanced_drop_down.set_expression(list_store_expression)
advanced_drop_down.set_model(model)

advanced_drop_down.connect("notify::selected-item", on_advanced_selected_item)

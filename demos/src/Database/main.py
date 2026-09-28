import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gom", "1.0")
from gi.repository import GObject, Gom, Gtk, GLib, Gio

import workbench

text_entry = workbench.builder.get_object("text_entry")
insert_button = workbench.builder.get_object("insert_button")
search_entry = workbench.builder.get_object("search_entry")
column_view = workbench.builder.get_object("column_view")
column_text = workbench.builder.get_object("column_text")
column_id = workbench.builder.get_object("column_id")


class ItemClass(Gom.Resource):
    id = GObject.Property(
        type=int,
        nick="ID",
        blurb="An ID",
        flags=GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        minimum=0,
        maximum=GLib.MAXINT32,
        default=0,
    )
    text = GObject.Property(
        type=str,
        nick="Text",
        blurb="Some Text",
        flags=GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        default="",
    )


data_model = Gio.ListStore(item_type=ItemClass)
adapter = None
repository = None


def migrate_cb(repository, result):
    _res = repository.automatic_migrate_finish(result)


def open_cb(adapter, result):
    global repository
    _res = adapter.open_finish(result)
    repository = Gom.Repository(adapter=adapter)

    # Set up table and primary key
    ItemClass.set_table("items")
    ItemClass.set_primary_key("id")

    # Perform automatic migration
    repository.automatic_migrate_async(1, [ItemClass], migrate_cb)


def init_database():
    global adapter
    adapter = Gom.Adapter()
    adapter.open_async(workbench.resolve("db.sqlite"), open_cb)


def save_cb(item, result):
    success = item.save_finish(result)
    if not success:
        print("Failed to insert")
        return

    load()


def on_insert():
    text = text_entry.get_text()
    item = ItemClass(repository=repository, text=text)
    item.save_async(save_cb)


def fetch_cb(resource_group, result):
    _res = resource_group.fetch_finish(result)
    for i in range(resource_group.get_count()):
        item = resource_group.get_index(i)
        if item:
            data_model.append(item)


def find_cb(repository, result):
    resource_group = repository.find_finish(result)
    resource_group.fetch_async(0, resource_group.get_count(), fetch_cb)


def load():
    text = search_entry.get_text() or ""

    data_model.remove_all()
    # Create a filter for Text matching
    filter = Gom.Filter.new_glob(ItemClass, "text", f"*{text}*")
    repository.find_async(ItemClass, filter, find_cb)


column_text.get_factory().connect(
    "setup",
    lambda _self, list_item: list_item.set_child(
        Gtk.Label(margin_start=12, margin_end=12)
    ),
)


def column_text_bind_cb(_self, list_item):
    label_widget = list_item.get_child()
    model_item = list_item.get_item()
    label_widget.set_label(model_item.text)


column_text.get_factory().connect("bind", column_text_bind_cb)

column_id.get_factory().connect(
    "setup",
    lambda _self, list_item: list_item.set_child(
        Gtk.Label(margin_start=12, margin_end=12)
    ),
)


def column_id_bind_cb(_self, list_item):
    label_widget = list_item.get_child()
    model_item = list_item.get_item()
    label_widget.set_label(str(model_item.id))


column_id.get_factory().connect("bind", column_id_bind_cb)


column_view.set_model(Gtk.SingleSelection(model=data_model))

try:
    init_database()
    search_entry.connect("search-changed", lambda *_: load())

    insert_button.connect("clicked", lambda *_: on_insert())
    # load()
except Exception as err:
    print(err)

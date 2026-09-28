import GObject from "gi://GObject";
import Gom from "gi://Gom";
import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import Gio from "gi://Gio";

Gio._promisify(Gom.Adapter.prototype, "open_async", "open_finish");

Gio._promisify(
  Gom.Repository.prototype,
  "automatic_migrate_async",
  "automatic_migrate_finish",
);
Gio._promisify(Gom.Repository.prototype, "find_async", "find_finish");

Gio._promisify(Gom.Resource.prototype, "save_async", "save_finish");
Gio._promisify(Gom.ResourceGroup.prototype, "fetch_async", "fetch_finish");

const text_entry = workbench.builder.get_object("text_entry");
const insert_button = workbench.builder.get_object("insert_button");
const search_entry = workbench.builder.get_object("search_entry");
const column_view = workbench.builder.get_object("column_view");
const column_text = workbench.builder.get_object("column_text");
const column_id = workbench.builder.get_object("column_id");

const ItemClass = GObject.registerClass(
  {
    Properties: {
      id: GObject.ParamSpec.int(
        "id",
        "ID",
        "An ID",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        0,
        GLib.MAXINT32,
        0,
      ),
      text: GObject.ParamSpec.string(
        "text",
        "Text",
        "Some Text",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        "",
      ),
    },
  },
  class ItemClass extends Gom.Resource {},
);

const data_model = new Gio.ListStore({ item_type: ItemClass });
let adapter;
let repository;

async function initDatabase() {
  adapter = new Gom.Adapter();
  await adapter.open_async(workbench.resolve("db.sqlite"));
  repository = new Gom.Repository({ adapter });

  // Set up table and primary key
  ItemClass.set_table("items");
  ItemClass.set_primary_key("id");

  // Perform automatic migration
  await repository.automatic_migrate_async(1, [ItemClass]);
}

async function onInsert() {
  const text = text_entry.text;
  const item = new ItemClass({ repository, text });
  const success = await item.save_async();
  if (!success) {
    console.error("Failed to insert");
    return;
  }

  await load();
}

async function load() {
  const text = search_entry.text || "";

  data_model.remove_all();
  // Create a filter for Text matching
  const filter = Gom.Filter.new_glob(ItemClass, "text", `*${text}*`);
  const resource_group = await repository.find_async(ItemClass, filter);

  await resource_group.fetch_async(0, resource_group.count);
  for (let i = 0; i < resource_group.count; i++) {
    const item = resource_group.get_index(i);
    if (item) data_model.append(item);
  }
}

column_text.factory.connect("setup", (_self, list_item) => {
  const label = new Gtk.Label({
    margin_start: 12,
    margin_end: 12,
  });
  list_item.set_child(label);
});

column_text.factory.connect("bind", (_self, list_item) => {
  const label_widget = list_item.get_child();
  const model_item = list_item.get_item();
  label_widget.label = model_item.text;
});

column_id.factory.connect("setup", (_self, list_item) => {
  const label = new Gtk.Label({
    margin_start: 12,
    margin_end: 12,
  });
  list_item.set_child(label);
});

column_id.factory.connect("bind", (_self, list_item) => {
  const label_widget = list_item.get_child();
  const model_item = list_item.get_item();
  label_widget.label = model_item.id.toString();
});

column_view.model = new Gtk.SingleSelection({
  model: data_model,
});

try {
  await initDatabase();

  search_entry.connect("search-changed", () => {
    load().catch(console.error);
  });

  insert_button.connect("clicked", () => {
    onInsert().catch(console.error);
  });

  await load();
} catch (err) {
  console.error(err);
}

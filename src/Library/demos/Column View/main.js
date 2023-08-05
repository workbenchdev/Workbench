import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GObject from "gi://GObject";

const column_view = workbench.builder.get_object("column_view");
const col1 = workbench.builder.get_object("col1");
const col2 = workbench.builder.get_object("col2");
const col3 = workbench.builder.get_object("col3");

function createFirstCol() {
  const factory = col1.factory;
  factory.connect("setup", (factory, list_item) => {
    const label = new Gtk.Label({
      margin_start: 12,
      margin_end: 12,
    });
    list_item.set_child(label);
  });
  factory.connect("bind", (factory, list_item) => {
    const label_widget = list_item.get_child();
    const model_item = list_item.get_item();
    label_widget.label = model_item.get_display_name();
  });
}

function createSecCol() {
  const factory = col2.factory;
  factory.connect("setup", (factory, list_item) => {
    const label = new Gtk.Label({
      margin_start: 12,
      margin_end: 12,
    });
    list_item.set_child(label);
  });
  factory.connect("bind", (factory, list_item) => {
    const label_widget = list_item.get_child();
    const model_item = list_item.get_item();
    label_widget.label = model_item.get_size().toString();
  });
}

function createThirdCol() {
  const factory = col3.factory;
  factory.connect("setup", (factory, list_item) => {
    const label = new Gtk.Label({
      margin_start: 12,
      margin_end: 12,
    });
    list_item.set_child(label);
  });
  factory.connect("bind", (factory, list_item) => {
    const label_widget = list_item.get_child();
    const model_item = list_item.get_item();
    const date = model_item.get_modification_date_time();
    label_widget.label = date.format("%F");
  });
}

//Model
const dir = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos",
);

const model = new Gtk.SingleSelection({
  model: new Gtk.SortListModel({
    model: new Gtk.DirectoryList({
      file: dir,
      attributes: "standard::*,time::modified",
    }),
    sorter: column_view.sorter,
  }),
});

col1.sorter = new Gtk.StringSorter({
  expression: new Gtk.ClosureExpression(
    GObject.TYPE_STRING,
    (fileInfo) => fileInfo.get_display_name(),
    null,
  ),
});

col2.sorter = new Gtk.NumericSorter({
  expression: new Gtk.ClosureExpression(
    GObject.TYPE_INT,
    (fileInfo) => fileInfo.get_size(),
    null,
  ),
});

col3.sorter = new Gtk.NumericSorter({
  expression: new Gtk.ClosureExpression(
    GObject.TYPE_INT,
    (fileInfo) => fileInfo.get_modification_date_time(),
    null,
  ),
});

column_view.model = model;
createFirstCol();
createSecCol();
createThirdCol();

//View
/*model.model.connect("items-changed", (list, position, removed, added) => {
  console.log(
    `position: ${position}, Item removed? ${Boolean(
      removed,
    )}, Item added? ${Boolean(added)}`,
  );
});

model.connect("selection-changed", () => {
  const selected_item = model.get_selected();
  console.log(`Model item selected from view: ${model.model}`);
});*/

import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

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

const dir_model = new Gtk.DirectoryList({
  file: dir,
  attributes: "standard::*,time:modified",
});

const model = new Gtk.SingleSelection({ model: dir_model });

column_view.model = model;
createFirstCol();
createSecCol();
createThirdCol();

column_view.append_column(col1);
column_view.append_column(col2);
column_view.append_column(col3);

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

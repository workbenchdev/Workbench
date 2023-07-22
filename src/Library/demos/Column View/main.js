import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const column_view = workbench.builder.get_object("column_view");

function createCol() {
  const factory = new Gtk.SignalListItemFactory();
  const columnViewColumn = new Gtk.ColumnViewColumn({
    factory,
  });
  factory.connect("setup", (factory, listItem) => {
    const label = new Gtk.Label({
      height_request: 50,
      margin_start: 12,
      margin_end: 12,
    });
    listItem.set_child(label);
  });
  factory.connect("bind", (factory, listItem) => {
    const labelWidget = listItem.get_child();
    const modelItem = listItem.get_item();
    labelWidget.label = modelItem.string;
  });
  return columnViewColumn;
}

function createSecCol() {
  const factory = new Gtk.SignalListItemFactory();
  const columnViewColumn = new Gtk.ColumnViewColumn({
    factory,
  });
  factory.connect("setup", (factory, listItem) => {
    const label = new Gtk.Label({
      height_request: 50,
      margin_start: 12,
      margin_end: 12,
    });
    listItem.set_child(label);
  });
  factory.connect("bind", (factory, listItem) => {
    const labelWidget = listItem.get_child();
    const modelItem = listItem.get_item();
    labelWidget.label = modelItem.string;
  });
  return columnViewColumn;
}

function createThirdCol() {
  const factory = new Gtk.SignalListItemFactory();
  const columnViewColumn = new Gtk.ColumnViewColumn({
    factory,
  });
  factory.connect("setup", (factory, listItem) => {
    const label = new Gtk.Label({
      height_request: 50,
      margin_start: 12,
      margin_end: 12,
    });
    listItem.set_child(label);
  });
  factory.connect("bind", (factory, listItem) => {
    const labelWidget = listItem.get_child();
    const modelItem = listItem.get_item();
    labelWidget.label = modelItem.string;
  });
  return columnViewColumn;
}

//Model
let item = 1;
const string_model = new Gtk.StringList({
  strings: ["Label 1", "Label 2", "Label 3", "Label 4"],
});

const model = new Gtk.SingleSelection({ model: string_model });

column_view.model = model;
const new_col = createCol();
const sec_col = createSecCol();
const third_col = createThirdCol();

column_view.append_column(new_col);
column_view.append_column(sec_col);
column_view.append_column(third_col);

//View
model.model.connect("items-changed", (list, position, removed, added) => {
  console.log(
    `position: ${position}, Item removed? ${Boolean(
      removed,
    )}, Item added? ${Boolean(added)}`,
  );
});

model.connect("selection-changed", () => {
  const selected_item = model.get_selected();
  console.log(
    `Model item selected from view: ${model.model.get_string(selected_item)}`,
  );
});

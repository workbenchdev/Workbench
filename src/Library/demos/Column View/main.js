import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import GObject from "gi://GObject";

const column_view = workbench.builder.get_object("column_view");
const col1 = workbench.builder.get_object("col1");
const col2 = workbench.builder.get_object("col2");
const col3 = workbench.builder.get_object("col3");

//Model
const dir = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos",
);

const data_model = new Gtk.DirectoryList({
  file: dir,
  attributes: "standard::*,time::modified",
});

const sort_model = new Gtk.SortListModel({
  model: data_model,
  sorter: column_view.sorter,
});

column_view.model = new Gtk.SingleSelection({
  model: sort_model,
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
    GObject.TYPE_INT64,
    (fileInfo) => fileInfo.get_modification_date_time().to_unix(),
    null,
  ),
});

//View
//Column 1
const factory_col1 = col1.factory;
factory_col1.connect("setup", (factory, list_item) => {
  const label = new Gtk.Label({
    margin_start: 12,
    margin_end: 12,
  });
  list_item.set_child(label);
});
factory_col1.connect("bind", (factory, list_item) => {
  const label_widget = list_item.get_child();
  const model_item = list_item.get_item();
  label_widget.label = model_item.get_display_name();
});

//Column 2
const factory_col2 = col2.factory;
factory_col2.connect("setup", (factory, list_item) => {
  const label = new Gtk.Label({
    margin_start: 12,
    margin_end: 12,
  });
  list_item.set_child(label);
});
factory_col2.connect("bind", (factory, list_item) => {
  const label_widget = list_item.get_child();
  const model_item = list_item.get_item();
  const size = model_item.get_size();
  label_widget.label = GLib.format_size(size);
});

//Column 3
const factory_col3 = col3.factory;
factory_col3.connect("setup", (factory, list_item) => {
  const label = new Gtk.Label({
    margin_start: 12,
    margin_end: 12,
  });
  list_item.set_child(label);
});
factory_col3.connect("bind", (factory, list_item) => {
  const label_widget = list_item.get_child();
  const model_item = list_item.get_item();
  const date = model_item.get_modification_date_time();
  label_widget.label = date.format("%F");
});

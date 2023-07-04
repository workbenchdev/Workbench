import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const stack = workbench.builder.get_object("stack");
const list_box = workbench.builder.get_object("list_box");
const flow_box = workbench.builder.get_object("flow_box");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");
const list_box_editable = workbench.builder.get_object("list_box_editable");
const search_entry = workbench.builder.get_object("search_entry");

//Model
const model = new Gtk.StringList({
  strings: ["Default Item 1", "Default Item 2", "Default Item 3"],
});
let item = 1;

model.connect("items-changed", (list, position, removed, added) => {
  console.log(
    `position: ${position}, Item removed? ${Boolean(
      removed,
    )}, Item added? ${Boolean(added)}`,
  );
});

//Filter-Model
const search_expression = Gtk.PropertyExpression.new(
  Gtk.StringObject,
  null,
  "string",
);
const filter = new Gtk.StringFilter({
  expression: search_expression,
  ignore_case: true,
  match_mode: Gtk.StringFilterMatchMode.SUBSTRING,
});
const filter_model = new Gtk.FilterListModel({
  model: model,
  filter: filter,
  incremental: true,
});

function createItemForListBox(listItem) {
  const listRow = new Adw.ActionRow({
    title: listItem.string,
  });
  return listRow;
}

function createItemForFlowBox(listItem) {
  const listBox = new Adw.Bin({
    width_request: 160,
    height_request: 160,
    css_classes: ["card"],
    valign: Gtk.Align.START,
    child: new Gtk.Label({
      label: listItem.string,
      halign: Gtk.Align.CENTER,
      hexpand: true,
      valign: Gtk.Align.CENTER,
    }),
  });
  return listBox;
}

function createItemForFilterModel(listItem) {
  const listRow = new Adw.ActionRow({
    title: listItem.string,
  });
  return listRow;
}

list_box.bind_model(model, createItemForListBox);
flow_box.bind_model(model, createItemForFlowBox);
list_box_editable.bind_model(filter_model, createItemForFilterModel);

// Controller
add.connect("clicked", () => {
  const new_item = `New Item ${item}`;
  model.append(new_item);
  item++;
});

remove.connect("clicked", () => {
  const selectedRow = list_box_editable.get_selected_row();
  const index = selectedRow.get_index();
  model.remove(index);
});

search_entry.connect("search-changed", () => {
  const searchText = search_entry.get_text();
  filter.search = searchText;
});

// View
stack.connect("notify::visible-child", () => {
  console.log("View changed");
});

list_box_editable.connect("row-selected", () => {
  remove.sensitive = list_box_editable.get_selected_row() !== null;
});

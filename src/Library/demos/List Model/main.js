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
const query_for_filter = workbench.builder.get_object("query_for_filter");
const submit = workbench.builder.get_object("submit");

//Model
const model = new Gtk.StringList();
let item = 1;

const filter = new Gtk.StringFilter({
  ignore_case: true,
  match_mode: Gtk.StringFilterMatchMode.EXACT,
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
  const listRow = new Adw.ActionRow({
    title: listItem.string,
  });
  return listRow;
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
filter.connect("changed", () => {
  console.log("Changed");
});

model.connect("items-changed", (list, position, removed, added) => {
  console.log(
    `position: ${position}, Item removed? ${Boolean(
      removed,
    )}, Item added? ${Boolean(added)}`,
  );
});

add.connect("clicked", () => {
  const new_item = `Item ${item}`;
  model.append(new_item);
  item++;
});
remove.connect("clicked", () => {
  const n_items = model.get_n_items();
  model.remove(n_items - 1);
});

// Removes all widgets if searchString does'nt exist and shows only the searchString if it matches filter;
submit.connect("clicked", () => {
  const searchString = query_for_filter.get_text();
  filter.search = searchString;
  filter.match(searchString);
});

// View
stack.connect("notify::visible-child", () => {
  if (stack.visible_child === list_box) {
    console.log("View: List Box");
  } else {
    console.log("View: Flow Box");
  }
});

console.log(filter.get_strictness());

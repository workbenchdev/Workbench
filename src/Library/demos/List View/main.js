import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const stack = workbench.builder.get_object("stack");
const list_view = workbench.builder.get_object("list_view");
const grid_view = workbench.builder.get_object("grid_view");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");
const list_box_editable = workbench.builder.get_object("list_box_editable");
const search_entry = workbench.builder.get_object("search_entry");

//Model
const string_model = new Gtk.StringList({
  strings: ["Default Item 1", "Default Item 2", "Default Item 3"],
});

const selection_model = new Gtk.SingleSelection({ model: string_model });

let item = 1;

const factory_for_list_view = new Gtk.SignalListItemFactory();
factory_for_list_view.connect("setup", (factory, listItem) => {
  const listRow = new Adw.ActionRow();
  listItem.set_child(listRow);
});
factory_for_list_view.connect("bind", (factory, listItem) => {
  const listRow = listItem.get_child();
  listRow.title = "Demo";
});

const factory_for_grid_view = new Gtk.SignalListItemFactory();
factory_for_grid_view.connect("setup", (factory, listItem) => {
  const listRow = new Adw.ActionRow();
  listItem.set_child(listRow);
});
factory_for_grid_view.connect("bind", (factory, listItem) => {
  const listRow = listItem.get_child();
  listRow.title = "Demo";
});

selection_model.model.connect(
  "items-changed",
  (list, position, removed, added) => {
    console.log(
      `position: ${position}, Item removed? ${Boolean(
        removed,
      )}, Item added? ${Boolean(added)}`,
    );
  },
);

/*//Filter-Model
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
});*/

/*function createItemForFlowBox(listItem) {
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
}*/

list_view.model = selection_model;
list_view.factory = factory_for_list_view;
grid_view.model = selection_model;
grid_view.factory = factory_for_grid_view;

//list_view.bind_model(model, createItemForListBox);
//flow_box.bind_model(model, createItemForFlowBox);
//list_box_editable.bind_model(filter_model, createItemForFilterModel);

// Controller
add.connect("clicked", () => {
  const new_item = `New Item ${item}`;
  selection_model.model.append(new_item);
  item++;
});

remove.connect("clicked", () => {
  selection_model.model.remove(2);
});

/*search_entry.connect("search-changed", () => {
  const searchText = search_entry.get_text();
  filter.search = searchText;
});

// View
stack.connect("notify::visible-child", () => {
  console.log("View changed");
});

list_box_editable.connect("row-selected", () => {
  remove.sensitive = list_box_editable.get_selected_row() !== null;
});*/


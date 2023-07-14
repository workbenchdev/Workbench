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
const model_for_listview = workbench.builder.get_object("model_for_listview");

//Model
let item = 1;
const string_model = new Gtk.StringList({
  strings: ["Default Item 1", "Default Item 2", "Default Item 3"],
});

const model_for_grid_view = new Gtk.SingleSelection({ model: string_model });

const factory_for_grid_view = new Gtk.SignalListItemFactory();
factory_for_grid_view.connect("setup", (factory, listItem) => {
  const listBox = new Gtk.Box({
    width_request: 160,
    height_request: 160,
    css_classes: ["card"],
  });
  const label = new Gtk.Label({
    halign: Gtk.Align.CENTER,
    hexpand: true,
    valign: Gtk.Align.CENTER,
  });
  listBox.append(label);
  listItem.set_child(listBox);
});
factory_for_grid_view.connect("bind", (factory, listItem) => {
  const listBox = listItem.get_child();
  const modelItem = listItem.get_item();
  const labelWidget = listBox.get_last_child();

  labelWidget.label = modelItem.string;
});

/*model_for_grid_view.model.connect(
  "items-changed",
  (list, position, removed, added) => {
    console.log(
      `position: ${position}, Item removed? ${Boolean(
        removed,
      )}, Item added? ${Boolean(added)}`,
    );
  },
);*/

model_for_listview.connect("selection-changed", () => {
  const list_view_selected_item = model_for_listview.get_selected();
  console.log(
    `Selected item from ListView: ${model_for_listview.model.get_string(
      list_view_selected_item,
    )}`,
  );
});

model_for_grid_view.connect("selection-changed", () => {
  const grid_view_selected_item = model_for_grid_view.get_selected();
  console.log(
    `Selected item from GridView: ${model_for_grid_view.model.get_string(
      grid_view_selected_item,
    )}`,
  );
});

grid_view.model = model_for_grid_view;
grid_view.factory = factory_for_grid_view;

// Controller
add.connect("clicked", () => {
  const new_item = `New item ${item}`;
  model_for_listview.model.append(new_item);
  model_for_grid_view.model.append(new_item);
  item++;
});

remove.connect("clicked", () => {
  const list_view_selected_item = model_for_listview.get_selected();
  const grid_view_selected_item = model_for_grid_view.get_selected();
  model_for_listview.model.remove(list_view_selected_item);
  model_for_grid_view.model.remove(grid_view_selected_item);
});

/*
// View
stack.connect("notify::visible-child", () => {
  console.log("View changed");
});
*/

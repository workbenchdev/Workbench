import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const stack = workbench.builder.get_object("stack");
const list_box = workbench.builder.get_object("list_box");
const flow_box = workbench.builder.get_object("flow_box");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");

//Model
const model = new Gtk.StringList();
let item = 1;

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

list_box.bind_model(model, createItemForListBox);
flow_box.bind_model(model, createItemForFlowBox);

// Controller
add.connect("clicked", () => {
  const new_item = `Item ${item}`;
  model.append(new_item);
  item++;
});
remove.connect("clicked", () => {
  const n_items = model.get_n_items();
  model.remove(n_items - 1);
});

// View
stack.connect("notify::visible-child", () => {
  if (stack.visible_child === list_box) {
    console.log("View: List Box");
  } else {
    console.log("View: Flow Box");
  }
});

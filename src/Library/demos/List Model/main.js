import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const toggle_list_box = workbench.builder.get_object("toggle_list_box");
const toggle_flow_box = workbench.builder.get_object("toggle_flow_box");
const reveal_list_box = workbench.builder.get_object("reveal_list_box");
const reveal_flow_box = workbench.builder.get_object("reveal_flow_box");
const list_box = workbench.builder.get_object("list_box");
const flow_box = workbench.builder.get_object("flow_box");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");

//ListModel initialization and binding
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

//Handling for ListBox
const isListBoxActive = toggle_list_box.get_active();
reveal_list_box.reveal_child = isListBoxActive;
if (isListBoxActive) {
  add.connect("clicked", () => {
    const newItem = `Item ${item}`;
    model.append(newItem); // Append the new item as an array to the model
    item++;
  });
  remove.connect("clicked", () => {
    const length = model.get_n_items();
    model.remove(length - 1);
  });
}

//Handling for FlowBox
const isFlowBoxActive = toggle_flow_box.get_active();
reveal_flow_box.reveal_child = isFlowBoxActive;
if (isFlowBoxActive) {
  add.connect("clicked", () => {
    const newItem = `Item ${item}`;
    model.append(newItem); // Append the new item as an array to the model
    item++;
  });
  remove.connect("clicked", () => {
    const length = model.get_n_items();
    model.remove(length - 1);
  });
}

// Check if ListBox is Active
toggle_list_box.connect("toggled", () => {
  const isActive = toggle_list_box.get_active();
  reveal_list_box.reveal_child = isActive;
  if (isActive) {
    console.log("ListBox toggled on");
  } else {
    console.log("ListBox toggled off");
  }
});

// Check if FlowBox is Active
toggle_flow_box.connect("toggled", () => {
  const isActive = toggle_flow_box.get_active();
  reveal_flow_box.reveal_child = isActive;
  if (isActive) {
    console.log("FlowBox toggled on");
  } else {
    console.log("FlowBox toggled off");
  }
});

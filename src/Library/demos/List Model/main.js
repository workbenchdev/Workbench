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

toggle_list_box.connect("toggled", () => {
  const isActive = toggle_list_box.get_active();
  reveal_list_box.reveal_child = isActive;
  if (isActive) {
    console.log("ListBox view toggled on");
  } else {
    console.log("ListBox view toggled off");
  }
});

toggle_flow_box.connect("toggled", () => {
  const isActive = toggle_flow_box.get_active();
  reveal_flow_box.reveal_child = isActive;
  if (isActive) {
    console.log("FlowBox view toggled on");
    add.connect("clicked", addRowFlowBox);
    remove.connect("clicked", removeRowFlowBox);
  } else {
    console.log("FlowBox view toggled off");
  }
});

const model = new Gtk.StringList();
const rows = []; // Array to store the created rows
let item = 1;

function createRow(listItem) {
  const listRow = new Adw.ActionRow({
    title: listItem.string,
  });
  rows.push(listRow); // Add the created row to the array
  item++;
  return listRow;
}

list_box.bind_model(model, createRow);

add.connect("clicked", () => {
  const newItem = `Item ${item}`;
  model.append(newItem); // Append the new item as an array to the model
});

remove.connect("clicked", () => {
  const arrayLength = rows.length;

  if (arrayLength > 0) {
    const lastElementIndex = arrayLength - 1;
    const lastElement = rows[lastElementIndex];

    model.remove(rows[lastElement]);
  }
});


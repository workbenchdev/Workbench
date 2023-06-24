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

let listitemNumber = 1;
let rowIndex = 0;
const rows = []; // Array to store references to the added rows

let flowitemNumber = 1;
let flowIndex = 0;
const rows_for_flow = [];

function addRowFlowBox() {
  const flowRow = new Adw.ActionRow({
    selectable: false,
  });

  const label = `Item ${flowitemNumber}`;
  flowRow.title = label;
  flow_box.append(flowRow);
  rows_for_flow.push(flowRow);
  flowitemNumber++;
}

function removeRowFlowBox() {
  if (flowIndex < rows_for_flow.length) {
    flow_box.remove(rows_for_flow[flowIndex]);
    flowIndex++;
  }
}

function addRowListBox() {
  const listRow = new Adw.ActionRow({
    selectable: false,
  });

  const label = `Item ${listitemNumber}`;
  listRow.title = label;
  list_box.append(listRow);
  rows.push(listRow); // Store the reference to the added row
  listitemNumber++;
}

function removeRowListBox() {
  if (rowIndex < rows.length) {
    list_box.remove(rows[rowIndex]);
    rowIndex++;
  }
}

add.connect("clicked", addRowListBox);
remove.connect("clicked", removeRowListBox);

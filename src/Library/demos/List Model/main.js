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
  } else {
    console.log("FlowBox view toggled off");
  }
});

const model = new Gio.ListStore();
list_box.bind_model(model, addRows);

function addRows(model) {
  const rows = [];

  for (let i = 4; i < 10; i++) {
    const row = new Adw.ActionRow();
    rows.push(row);

    // Add the row to the model
    model.append(row[i]);
  }
  return rows;
}

add.connect("clicked", addRows);

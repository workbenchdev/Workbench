import Gtk from "gi://Gtk";

const stack = workbench.builder.get_object("stack");
const list_view = workbench.builder.get_object("list_view");
const grid_view = workbench.builder.get_object("grid_view");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");

//Model
let item = 1;
const string_model = new Gtk.StringList({
  strings: ["Default Item 1", "Default Item 2", "Default Item 3"],
});

const model = new Gtk.SingleSelection({ model: string_model });

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

//View
model.model.connect("items-changed", (list, position, removed, added) => {
  console.log(
    `position: ${position}, Item removed? ${Boolean(
      removed,
    )}, Item added? ${Boolean(added)}`,
  );
});

model.connect("selection-changed", () => {
  const selected_item = model.get_selected();
  console.log(
    `Model item selected from view: ${model.model.get_string(selected_item)}`,
  );
});

list_view.model = model;
grid_view.model = model;
grid_view.factory = factory_for_grid_view;

// Controller
add.connect("clicked", () => {
  const new_item = `New item ${item}`;
  model.model.append(new_item);
  item++;
});

remove.connect("clicked", () => {
  const selected_item = model.get_selected();
  model.model.remove(selected_item);
});

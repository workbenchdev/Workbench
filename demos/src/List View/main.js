import Gtk from "gi://Gtk?version=4.0";

const list_view = workbench.builder.get_object("list_view");
const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");

//Model
let item = 1;
const string_model = new Gtk.StringList({
  strings: ["Default Item 1", "Default Item 2", "Default Item 3"],
});

const model = new Gtk.SingleSelection({ model: string_model });

//View
model.model.connect("items-changed", (_list, position, removed, added) => {
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

import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const add = workbench.builder.get_object("add");
const remove = workbench.builder.get_object("remove");
const column_view = workbench.builder.get_object("column_view");

function createCol() {
  const factory = new Gtk.SignalListItemFactory();
  const columnViewColumn = new Gtk.ColumnViewColumn({
    factory,
  });
  factory.connect("setup", (factory, listItem) => {
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
  factory.connect("bind", (factory, listItem) => {
    const listBox = listItem.get_child();
    const modelItem = listItem.get_item();
    const labelWidget = listBox.get_last_child();

    labelWidget.label = modelItem.string;
  });
  return columnViewColumn;
}
//Model
let item = 1;
const string_model = new Gtk.StringList({
  strings: ["Label 1", "Label 2", "Label 3", "Label 4"],
});

const model = new Gtk.SingleSelection({ model: string_model });

column_view.model = model;
const new_col = createCol();

column_view.append_column(new_col);

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

import Gtk from "gi://Gtk";
import GObject from "gi://GObject";

const list_view = workbench.builder.get_object("list_view");
const item_factory = workbench.builder.get_object("item_factory");
const header_factory = workbench.builder.get_object("header_factory");

const CustomModel = GObject.registerClass(
  {
    Implements: [Gtk.SectionModel],
  },
  class CustomModel extends Gtk.StringList {
    vfunc_get_section(position) {
      const start = position;
      const end = start + 5;
      return [start, end];
    }
  },
);

item_factory.connect("setup", (_self, list_item) => {
  list_item.set_child(
    new Gtk.Label({ margin_start: 12, halign: Gtk.Align.START }),
  );
});

item_factory.connect("bind", (_self, list_item) => {
  const item = list_item.get_item();
  const label = list_item.get_child();

  label.set_label(item.get_string());
});

header_factory.connect("setup", (_self, list_item) => {
  list_item.set_child(
    new Gtk.Label({ label: "Header", halign: Gtk.Align.START }),
  );
});

const custom_model = new CustomModel();

for (let i = 1; i <= 200; i++) {
  custom_model.append(`Item ${i}`);
}

const selection_model = new Gtk.NoSelection({ model: custom_model });
list_view.set_model(selection_model);

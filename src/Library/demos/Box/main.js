import Gtk from "gi://Gtk";

const interactive_box = workbench.builder.get_object("interactive_box");
const button_add = workbench.builder.get_object("button_add");
const prepend = workbench.builder.get_object("prepend");
const button_remove = workbench.builder.get_object("button_remove");
let count = 0;

button_add.connect("clicked", () => {
  const label = new Gtk.Label({
    name: "card",
    label: `Item ${count + 1}`,
    css_classes: ["card"],
  });
  prepend.active
    ? interactive_box.prepend(label)
    : interactive_box.append(label);
  count += 1;
});

button_remove.connect("clicked", () => {
  if (count) {
    interactive_box.remove(interactive_box.get_last_child());
    count -= 1;
  } else {
    console.log("The box has no child widgets to remove");
  }
});

const highlight = workbench.builder.get_object("highlight");
highlight.connect("toggled", () => {
  highlight.active
    ? interactive_box.add_css_class("border")
    : interactive_box.remove_css_class("border");
});

const toggle_orient = workbench.builder.get_object("toggle_orient");
toggle_orient.connect("toggled", () => {
  interactive_box.orientation === Gtk.Orientation["HORIZONTAL"]
    ? (interactive_box.orientation = Gtk.Orientation["VERTICAL"])
    : (interactive_box.orientation = Gtk.Orientation["HORIZONTAL"]);
});

const homogeneous = workbench.builder.get_object("homogeneous");
homogeneous.connect("toggled", () => {
  interactive_box.homogeneous = homogeneous.active;
});

const alignment = workbench.builder.get_object("alignment");

const marks = {
  0: "Fill",
  33: "Start",
  66: "Center",
  100: "End",
};

const label_to_alignment = {
  Fill: Gtk.Align.FILL,
  Start: Gtk.Align.START,
  Center: Gtk.Align.CENTER,
  End: Gtk.Align.END,
};

for (const [value, label] of Object.entries(marks)) {
  alignment.add_mark(value, Gtk.PositionType.RIGHT, label);
}
alignment.set_increments(33, 100);

alignment.connect("value-changed", () => {
  const scale_value = alignment.get_value();
  const label = marks[scale_value];
  if (!label) return;
  interactive_box.halign = label_to_alignment[label];
});


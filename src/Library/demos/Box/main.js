import Gtk from "gi://Gtk";

const interactive_box = workbench.builder.get_object("interactive_box");
const button_append = workbench.builder.get_object("button_append");
const button_prepend = workbench.builder.get_object("button_prepend");
const button_remove = workbench.builder.get_object("button_remove");
let count = 0;

button_append.connect("clicked", append);
button_prepend.connect("clicked", prepend);
button_remove.connect("clicked", remove);

const toggle_orientation_horizontal = workbench.builder.get_object(
  "toggle_orientation_horizontal",
);
const toggle_orientation_vertical = workbench.builder.get_object(
  "toggle_orientation_vertical",
);

toggle_orientation_horizontal.connect("toggled", () => {
  if (toggle_orientation_horizontal.active)
    interactive_box.orientation = Gtk.Orientation.HORIZONTAL;
});

toggle_orientation_vertical.connect("toggled", () => {
  if (toggle_orientation_vertical.active)
    interactive_box.orientation = Gtk.Orientation.VERTICAL;
});

const highlight = workbench.builder.get_object("highlight");
highlight.connect("toggled", () => {
  highlight.active
    ? interactive_box.add_css_class("border")
    : interactive_box.remove_css_class("border");
});

const halign_toggle_fill = workbench.builder.get_object("halign_toggle_fill");
const halign_toggle_start = workbench.builder.get_object("halign_toggle_start");
const halign_toggle_center = workbench.builder.get_object(
  "halign_toggle_center",
);
const halign_toggle_end = workbench.builder.get_object("halign_toggle_end");

halign_toggle_fill.connect("toggled", () => {
  if (halign_toggle_fill.active) interactive_box.halign = Gtk.Align.FILL;
});

halign_toggle_start.connect("toggled", () => {
  if (halign_toggle_start.active) interactive_box.halign = Gtk.Align.START;
});

halign_toggle_center.connect("toggled", () => {
  if (halign_toggle_center.active) interactive_box.halign = Gtk.Align.CENTER;
});

halign_toggle_end.connect("toggled", () => {
  if (halign_toggle_end.active) interactive_box.halign = Gtk.Align.END;
});

const valign_toggle_fill = workbench.builder.get_object("valign_toggle_fill");
const valign_toggle_start = workbench.builder.get_object("valign_toggle_start");
const valign_toggle_center = workbench.builder.get_object(
  "valign_toggle_center",
);
const valign_toggle_end = workbench.builder.get_object("valign_toggle_end");

valign_toggle_fill.connect("toggled", () => {
  if (valign_toggle_fill.active) interactive_box.valign = Gtk.Align.FILL;
});

valign_toggle_start.connect("toggled", () => {
  if (valign_toggle_start.active) interactive_box.valign = Gtk.Align.START;
});

valign_toggle_center.connect("toggled", () => {
  if (valign_toggle_center.active) interactive_box.valign = Gtk.Align.CENTER;
});
valign_toggle_end.connect("toggled", () => {
  if (valign_toggle_end.active) interactive_box.valign = Gtk.Align.END;
});

function append() {
  const label = new Gtk.Label({
    name: "card",
    label: `Item ${count + 1}`,
    css_classes: ["card"],
  });
  interactive_box.append(label);
  count++;
}

function prepend() {
  const label = new Gtk.Label({
    name: "card",
    label: `Item ${count + 1}`,
    css_classes: ["card"],
  });
  interactive_box.prepend(label);
  count++;
}

function remove() {
  if (count) {
    interactive_box.remove(interactive_box.get_last_child());
    count--;
  } else {
    console.log("The box has no child widget to remove");
  }
}

append();

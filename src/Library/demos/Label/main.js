import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const label = workbench.builder.get_object("label");
const justification_row = workbench.builder.get_object("justification_row");
const style_row = workbench.builder.get_object("style_row");
const xalign_spin_button = workbench.builder.get_object("xalign_spin_button");
const single_line_switch = workbench.builder.get_object("single_line_switch");

const style_classes = [
  "none",
  "title-1",
  "title-2",
  "title-3",
  "title-4",
  "monospace",
  "accent",
  "success",
  "warning",
  "error",
  "heading",
  "body",
  "caption-heading",
  "caption",
];

const short_label =
  "<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore disputandum putant.";

const long_label =
  "     <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit,\n\
  sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.\n\
  Ut enim mortis metu omnis quietae vitae status perturbatur,\n\
  et ut succumbere doloribus eosque humili animo inbecilloque ferre miserum est,\n\
  ob eamque debilitatem animi multi parentes, multi amicos, non nulli patriam,\n\
  plerique autem se ipsos penitus perdiderunt, sic robustus animus et excelsus omni.";

label.label = short_label;

single_line_switch.connect("notify::active", () => {
  if (!single_line_switch.active) {
    label.label = long_label;
  } else {
    label.label = short_label;
  }
});

justification_row.connect("notify::selected", () => {
  label.set_justify(justification_row.selected);
});

style_row.connect("notify::selected", () => {
  // Remove all existing style classes
  style_classes.forEach((style_class) => {
    label.remove_css_class(style_class);
  });

  if (style_row.selected === 0) return;

  // Add the new style class
  const new_style_class = style_classes[style_row.selected];
  label.add_css_class(new_style_class);
});

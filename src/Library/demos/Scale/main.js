import Gtk from "gi://Gtk";

const scale_one = workbench.builder.get_object("one");
const scale_two = workbench.builder.get_object("two");
const scale_button = workbench.builder.get_object("button");

const marks = {
  0: "A",
  50: "B",
  100: "C",
};

const volume_icons = [
  "audio-volume-muted-symbolic",
  "audio-volume-high-symbolic",
  "audio-volume-low-symbolic",
  "audio-volume-medium-symbolic",
];

for (const [value, label] of Object.entries(marks)) {
  scale_two.add_mark(value, Gtk.PositionType.RIGHT, label);
}

scale_two.set_increments(25, 100);

scale_one.connect("value-changed", () => {
  const scale_value = scale_one.get_value();
  if (scale_value === scale_one.adjustment.upper) {
    console.log("Maximum value reached");
  } else if (scale_value === scale_one.adjustment.lower) {
    console.log("Minimum value reached");
  }
});

scale_two.connect("value-changed", () => {
  const scale_value = scale_two.get_value();
  const label = marks[scale_value];
  if (!label) return;

  console.log(`Mark ${label} reached`);
});

scale_button.icons = volume_icons;


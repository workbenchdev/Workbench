const scale_one = workbench.builder.get_object("one");
const scale_two = workbench.builder.get_object("two");
const scale_disabled = workbench.builder.get_object("disabled");

scale_two.add_mark(25.0, "left", "A");
scale_two.add_mark(50.0, "right", "B");
scale_two.add_mark(75.0, "right", "C");
scale_two.add_mark(100.0, "right", "D");
scale_two.set_increments(25.0, 25.0);

scale_disabled.set_range(true, 50);
scale_disabled.set_value(25);
scale_disabled.set_show_fill_level(25);

scale_one.connect("value-changed", () => {
  let scale_value = scale_one.get_value();
  if (scale_value === scale_one.adjustment.upper) {
    console.log("Max Value Reached");
  } else if (scale_value === scale_one.adjustment.lower) {
    console.log("Min Value Reached");
  }
});

scale_two.connect("value-changed", () => {
  let scale_value_two = scale_two.get_value();
  if (scale_value_two === 25) {
    console.log("Mark A Reached");
  } else if (scale_value_two === 50) {
    console.log("Mark B Reached");
  } else if (scale_value_two === 75) {
    console.log("Mark C Reached");
  } else if (scale_value_two === 100) {
    console.log("Mark D Reached");
  }
});

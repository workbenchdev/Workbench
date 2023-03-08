const scale_one = workbench.builder.get_object("one");
const scale_two = workbench.builder.get_object("two");

function logMarks(scale_value_two) {
  const marks = {
    25: "Mark A Reached",
    50: "Mark B Reached",
    75: "Mark C Reached",
    100: "Mark D Reached",
  };
  if (scale_value_two in marks) {
    console.log(marks[scale_value_two]);
  }
}

scale_two.add_mark(25.0, "left", "A");
scale_two.add_mark(50.0, "right", "B");
scale_two.add_mark(75.0, "right", "C");
scale_two.add_mark(100.0, "right", "D");
scale_two.set_increments(25.0, 25.0);

scale_one.connect("value-changed", () => {
  let scale_value = scale_one.get_value();
  if (scale_value === scale_one.adjustment.upper) {
    console.log("Maximum Value Reached");
  } else if (scale_value === scale_one.adjustment.lower) {
    console.log("Minimum Value Reached");
  }
});

scale_two.connect("value-changed", () => {
  let scale_value_two = scale_two.get_value();
  logMarks(scale_value_two);
});

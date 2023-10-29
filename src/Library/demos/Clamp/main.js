const button_increase = workbench.builder.get_object("button_increase");
const button_decrease = workbench.builder.get_object("button_decrease");
const clamp = workbench.builder.get_object("clamp");

function increase() {
  const current_size = clamp.get_maximum_size();
  const current_threshold = clamp.get_tightening_threshold();
  clamp.maximum_size = current_size + 300;
  clamp.tightening_threshold = current_threshold + 200;

  if (clamp.tightening_threshold === 1000) {
    console.log("Maximum size reached");
  }
}

function decrease() {
  const current_size = clamp.get_maximum_size();
  const current_threshold = clamp.get_tightening_threshold();
  clamp.maximum_size = current_size - 300;
  clamp.tightening_threshold = current_threshold - 200;

  if (clamp.tightening_threshold === 0) {
    console.log("Minimum size reached");
  }
}

button_increase.connect("clicked", increase);
button_decrease.connect("clicked", decrease);

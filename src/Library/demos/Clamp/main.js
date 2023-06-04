import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Adw from "gi://Adw";

const increase = workbench.builder.get_object("increase");
const decrease = workbench.builder.get_object("decrease");
const clamp = workbench.builder.get_object("clamp");

function handleIncrease() {
  const current_size = clamp.get_maximum_size();
  const current_threshold = clamp.get_tightening_threshold();
  clamp.maximum_size = current_size + 300;
  clamp.tightening_threshold = current_threshold + 200;

  if (clamp.tightening_threshold === 1000) {
    console.log("Maximum size reached");
  }
}

function handleDecrease() {
  const current_size = clamp.get_maximum_size();
  const current_threshold = clamp.get_tightening_threshold();
  clamp.maximum_size = current_size - 300;
  clamp.tightening_threshold = current_threshold - 200;

  if (clamp.tightening_threshold === 0) {
    console.log("Minimum size reached");
  }
}

increase.connect("clicked", handleIncrease);
decrease.connect("clicked", handleDecrease);

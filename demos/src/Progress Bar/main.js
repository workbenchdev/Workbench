import Adw from "gi://Adw";
import GLib from "gi://GLib";

const first_bar = workbench.builder.get_object("first");
const second_bar = workbench.builder.get_object("second");
const play = workbench.builder.get_object("play");
const progress_tracker = workbench.builder.get_object("progress_tracker");

const target = Adw.PropertyAnimationTarget.new(first_bar, "fraction");

const animation = new Adw.TimedAnimation({
  widget: first_bar,
  value_from: 0.2,
  value_to: 1,
  duration: 11000,
  easing: Adw.Easing["LINEAR"],
  target: target,
});

animation.connect("done", () => {
  animation.reset();
});

play.connect("clicked", () => {
  animation.play();
  updateTracker();
  pulseProgress();
});

function pulseProgress() {
  let counter = 0;
  // Time after which progress bar is pulsed
  const pulse_period = 500;
  // Duration of animation
  const duration = 10000;
  const increment = pulse_period / duration;
  GLib.timeout_add(GLib.PRIORITY_DEFAULT, pulse_period, () => {
    if (counter >= 1.0) {
      counter = 0;
      second_bar.fraction = 0;
      return false;
    }

    second_bar.pulse();
    counter += increment;
    return true;
  });
}

function updateTracker() {
  let time = 10;
  GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
    if (time === 0) {
      progress_tracker.label = "";
      console.log("Operation complete!");
      return false;
    }

    progress_tracker.label = `${time} seconds remaining…`;
    time -= 1;
    return true;
  });
}

import Adw from "gi://Adw";

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
  const interval = setInterval(() => {
    if (counter >= 1.0) {
      clearInterval(interval);
      counter = 0;
      return;
    }

    second_bar.pulse();
    counter += increment;
  }, pulse_period);
}

function updateTracker() {
  let time = 10;
  const interval = setInterval(() => {
    if (time === 0) {
      progress_tracker.label = "";
      clearInterval(interval);
      console.log("Operation complete!");
      return;
    }

    progress_tracker.label = `${time} seconds remaining…`;
    time -= 1;
  }, 1000);
}

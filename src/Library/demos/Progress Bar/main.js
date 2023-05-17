const first_bar = workbench.builder.get_object("first");
const second_bar = workbench.builder.get_object("second");
const play = workbench.builder.get_object("play");
const progress_tracker = workbench.builder.get_object("progress_tracker");

function handleProgress() {
  //Counters for respective progress bars and for progress tracker label
  let counter = 0.3;
  let counter_two = 0.25;
  let timeLeft = 12;

  //Display a Countdown
  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      progress_tracker.label = "";
      console.log("Operation Complete!");
    } else {
      progress_tracker.label = `${timeLeft} seconds remaining…`;
    }
  }, 1000);

  //Advance the first progress bar by 0.1 value every 1.5 seconds
  const intervalId_one = setInterval(() => {
    first_bar.set_fraction(counter);
    counter += 0.1;
    if (counter > 1.0) {
      clearInterval(intervalId_one);
      counter = 0.2;
      first_bar.set_fraction(counter);
    }
  }, 1500);

  //Advance the second progress bar by 0.25 value every 3 seconds
  const intervalId_second = setInterval(() => {
    second_bar.pulse();
    second_bar.set_fraction(counter_two);
    counter_two += 0.25;
    if (counter_two > 1.0) {
      clearInterval(intervalId_second);
      counter_two = 0;
      second_bar.set_fraction(counter_two);
    }
  }, 3000);
}

play.connect("clicked", handleProgress);

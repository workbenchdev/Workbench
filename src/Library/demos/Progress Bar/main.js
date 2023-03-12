const first_bar = workbench.builder.get_object("first");
const second_bar = workbench.builder.get_object("second");
const play = workbench.builder.get_object("play");

function handleProgress() {
  let counter = 0.3;
  let counter_two = 0.25;

  const intervalId_one = setInterval(() => {
    first_bar.set_fraction(counter);

    counter = counter + 0.1;

    if (counter > 1.0) {
      clearInterval(intervalId_one);
      counter = 0.2;
      first_bar.set_fraction(counter);
    }
  }, 1500);

  const intervalId_second = setInterval(() => {
    second_bar.pulse();
    second_bar.set_fraction(counter_two);

    counter_two = counter_two + 0.25;

    if (counter_two > 1.0) {
      clearInterval(intervalId_second);
      counter_two = 0;
      second_bar.set_fraction(counter_two);
    }
  }, 3000);
}
play.connect("clicked", handleProgress);

const hours = workbench.builder.get_object("hours");
const minutes = workbench.builder.get_object("minutes");

hours.text = "00";
minutes.text = "00";

hours.connect("value-changed", () => {
  console.log(tellTime(hours, minutes));
});

hours.connect("output", () => {
  const value = hours.adjustment.value;
  const text = value.toString().padStart(2, "0");
  hours.text = text;
  return true;
});

minutes.connect("output", () => {
  const value = minutes.adjustment.value;
  const text = value.toString().padStart(2, "0");
  minutes.text = text;
  return true;
});

minutes.connect("value-changed", () => {
  console.log(tellTime(hours, minutes));
});

function tellTime(hours, minutes) {
  return `The time selected is ${hours.text}:${minutes.text}`;
}

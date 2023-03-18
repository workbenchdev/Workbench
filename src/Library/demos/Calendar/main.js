const calendar = workbench.builder.get_object("calendar");

function handleChange() {
  let year = calendar.year;
  let month = calendar.month;
  let day = calendar.day;
  let monthString = month.toString().padStart(2, "0");
  let dayString = day.toString().padStart(2, "0");

  console.log(
    `Selected Date (YYYY-MM-DD): ${year}-${monthString}-${dayString}`,
  );
}

calendar.connect("day-selected", handleChange);
calendar.connect("next-month", () => {
  console.log("Switched to Next Month");
});
calendar.connect("next-year", () => {
  console.log("Switched to Next Year");
});
calendar.connect("prev-month", () => {
  console.log("Switched to Previous Month");
});
calendar.connect("prev-year", () => {
  console.log("Switched to Previous Year");
});

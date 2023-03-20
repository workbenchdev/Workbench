const calendar = workbench.builder.get_object("calendar");
const mark = workbench.builder.get_object("mark");
const remove_mark = workbench.builder.get_object("remove_mark");

calendar.connect("notify::day", () => {
  console.log(`Selected Date: ${calendar.get_date().format("%x")}`);
});

calendar.connect("notify::month", () => {
  console.log(`Switched to Month: ${calendar.get_date().format("%B")}`);
});

calendar.connect("notify::year", () => {
  console.log(`Switched to Year: ${calendar.get_date().format("%Y")}`);
});

mark.connect("clicked", () => {
  const selectedDate = calendar.get_date().format("%d");
  console.log(
    calendar.get_day_is_marked(selectedDate)
      ? "Date already marked"
      : "Date marked",
  );
  calendar.mark_day(selectedDate);
});

remove_mark.connect("clicked", () => {
  const selectedDate = calendar.get_date().format("%d");
  console.log(
    calendar.get_day_is_marked(selectedDate)
      ? "Date Unmarked"
      : "Date not yet marked",
  );
  calendar.unmark_day(selectedDate);
});

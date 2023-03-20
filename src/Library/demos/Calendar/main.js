const calendar = workbench.builder.get_object("calendar");

// calendar.get_date() returns a GLib.DateTime object
// https://docs.gtk.org/glib/struct.DateTime.html

calendar.connect("notify::day", () => {
  console.log(calendar.get_date().format("%e"));
});

calendar.connect("notify::month", () => {
  console.log(calendar.get_date().format("%B"));
});

calendar.connect("notify::year", () => {
  console.log(calendar.get_date().format("%Y"));
});

calendar.connect("day-selected", () => {
  console.log(calendar.get_date().format_iso8601());
});

calendar.mark_day(15);

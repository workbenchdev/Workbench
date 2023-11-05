#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var calendar = (Gtk.Calendar) workbench.builder.get_object ("calendar");
  calendar.notify["day"].connect (() => {
    DateTime date_time = calendar.get_date ();
    message (date_time.format ("%e")); // Print day of the month
  });

  calendar.notify["month"].connect (() => {
    DateTime date_time = calendar.get_date ();
    message (date_time.format ("%B")); // Print month
  });

  calendar.notify["year"].connect (() => {
    DateTime date_time = calendar.get_date ();
    message (date_time.format ("%Y")); // Print year
  });

  calendar.day_selected.connect (() => {
    DateTime date_time = calendar.get_date ();
    message (@"$date_time");
  });
}

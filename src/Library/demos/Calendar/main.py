import workbench

calendar = workbench.builder.get_object("calendar")

# calendar.get_date() returns a GLib.DateTime object
# https://docs.gtk.org/glib/struct.DateTime.html

calendar.connect("notify::day", lambda *_: print(calendar.get_date().format("%e")))

calendar.connect("notify::month", lambda *_: print(calendar.get_date().format("%B")))

calendar.connect("notify::year", lambda *_: print(calendar.get_date().format("%Y")))

calendar.connect("day-selected", lambda *_: print(calendar.get_date().format_iso8601()))

calendar.mark_day(15)

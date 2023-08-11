#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg libportal-gtk4

private Xdp.Portal portal;
private Xdp.Parent parent;

private Gtk.Revealer revealer;
private Gtk.Button start_button;
private Gtk.Button close_button;
private Gtk.SpinButton distance_threshold;
private Gtk.SpinButton time_threshold;
private Adw.ComboRow accuracy_button;

private Gtk.Label latitude_label;
private Gtk.Label longitude_label;
private Gtk.Label accuracy_label;
private Gtk.Label altitude_label;
private Gtk.Label speed_label;
private Gtk.Label heading_label;
private Gtk.Label description_label;
private Gtk.Label timestamp_label;

public void main () {
  portal = new Xdp.Portal ();
  parent = Xdp.parent_new_gtk (workbench.window);

  revealer = (Gtk.Revealer) workbench.builder.get_object ("revealer");
  start_button = (Gtk.Button) workbench.builder.get_object ("start");
  close_button = (Gtk.Button) workbench.builder.get_object ("close");
  distance_threshold = (Gtk.SpinButton) workbench.builder.get_object ("distance_threshold");
  time_threshold = (Gtk.SpinButton) workbench.builder.get_object ("time_threshold");
  accuracy_button = (Adw.ComboRow) workbench.builder.get_object ("accuracy_button");

  latitude_label = (Gtk.Label) workbench.builder.get_object ("latitude");
  longitude_label = (Gtk.Label) workbench.builder.get_object ("longitude");
  accuracy_label = (Gtk.Label) workbench.builder.get_object ("accuracy");
  altitude_label = (Gtk.Label) workbench.builder.get_object ("altitude");
  speed_label = (Gtk.Label) workbench.builder.get_object ("speed");
  heading_label = (Gtk.Label) workbench.builder.get_object ("heading");
  description_label = (Gtk.Label) workbench.builder.get_object ("description");
  timestamp_label = (Gtk.Label) workbench.builder.get_object ("timestamp");

  start_button.clicked.connect (start_session);
  close_button.clicked.connect (close_session);

  time_threshold.value_changed.connect (() => {
    message ("Time threshold changed");
    restart_session ();
  });

  distance_threshold.value_changed.connect (() => {
    message ("Distance threshold changed");
    restart_session ();
  });

  accuracy_button.notify["selected-item"].connect (() => {
    message ("Accuracy changed");
    restart_session ();
  });

  portal.location_updated.connect (on_location_updated);
}

private void on_location_updated (
  double latitude,
  double longitude,
  double altitude,
  double accuracy,
  double speed,
  double heading,
  string description,
  int64 timestamp_seconds,
  int64 timestamp_ms
) {
  message ("Location updated");
  latitude_label.label = latitude.to_string ();
  longitude_label.label = longitude.to_string ();
  accuracy_label.label = accuracy.to_string ();
  altitude_label.label = altitude.to_string ();
  speed_label.label = speed.to_string ();
  heading_label.label = heading.to_string ();
  description_label.label = description;

  // Convert UNIX timestamp to local date and time string
  var timestamp = new DateTime.from_unix_local (timestamp_ms);
  timestamp_label.label = timestamp.to_string ();
}

private void restart_session () {
  portal.location_monitor_stop ();
  revealer.reveal_child = false;
  start_session.begin ();
}

private async void start_session () {
  start_button.sensitive = false;
  close_button.sensitive = true;

  try {
    bool result = yield portal.location_monitor_start (
      parent,
      (uint) distance_threshold.value,
      (uint) time_threshold.value,
      (Xdp.LocationAccuracy) accuracy_button.selected,
      NONE,
      null
    );

    if (result) {
      message ("Location access granted");
      revealer.reveal_child = true;
      return;
    }
    message ("Error retrieving location");
  } catch (Error e) {
    critical (e.message);
  }
}

private void close_session () {
  start_button.sensitive = false;
  close_button.sensitive = false;
  portal.location_monitor_stop ();
  revealer.reveal_child = false;
  message ("Session Closed");
}

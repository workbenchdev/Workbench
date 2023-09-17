import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import Gio from "gi://Gio";

Gio._promisify(
  Xdp.Portal.prototype,
  "location_monitor_start",
  "location_monitor_start_finish",
);

const portal = new Xdp.Portal();
const parent = XdpGtk.parent_new_gtk(workbench.window);

const revealer = workbench.builder.get_object("revealer");
const start = workbench.builder.get_object("start");
const close = workbench.builder.get_object("close");
const distance_threshold = workbench.builder.get_object("distance_threshold");
const time_threshold = workbench.builder.get_object("time_threshold");
const accuracy_button = workbench.builder.get_object("accuracy_button");

const latitude_label = workbench.builder.get_object("latitude");
const longitude_label = workbench.builder.get_object("longitude");
const accuracy_label = workbench.builder.get_object("accuracy");
const altitude_label = workbench.builder.get_object("altitude");
const speed_label = workbench.builder.get_object("speed");
const heading_label = workbench.builder.get_object("heading");
const description_label = workbench.builder.get_object("description");
const timestamp_label = workbench.builder.get_object("timestamp");

let locationAccuracy = Xdp.LocationAccuracy.Exact;
let distanceThreshold = distance_threshold.value;
let timeThreshold = time_threshold.value;

time_threshold.connect("value-changed", () => {
  portal.location_monitor_stop();
  revealer.reveal_child = false;
  timeThreshold = time_threshold.value;
  console.log("Time threshold changed");
  startSession();
});

distance_threshold.connect("value-changed", () => {
  portal.location_monitor_stop();
  revealer.reveal_child = false;
  distanceThreshold = distance_threshold.value;
  console.log("Distance threshold changed");
  startSession();
});

accuracy_button.connect("notify::selected-item", () => {
  console.log("Accuracy changed");
  portal.location_monitor_stop();
  revealer.reveal_child = false;
  const accuracy_flag = accuracy_button.selected_item.get_string();
  locationAccuracy = Xdp.LocationAccuracy[accuracy_flag];
  startSession();
});

async function startSession() {
  start.sensitive = false;
  close.sensitive = true;
  const result = await portal.location_monitor_start(
    parent,
    distanceThreshold,
    timeThreshold,
    locationAccuracy,
    Xdp.LocationMonitorFlags.NONE,
    null,
  );
  if (result === true) {
    console.log("Location access granted");
    revealer.reveal_child = true;
  } else {
    console.log("Error retrieving location");
  }
}

portal.connect(
  "location-updated",
  (
    portal,
    latitude,
    longitude,
    altitude,
    accuracy,
    speed,
    heading,
    description,
    timestamp_s,
  ) => {
    latitude_label.label = latitude.toString();
    longitude_label.label = longitude.toString();
    accuracy_label.label = accuracy.toString();
    altitude_label.label = altitude.toString();
    speed_label.label = speed.toString();
    heading_label.label = heading.toString();
    description_label.label = description.toString();

    const timestamp = new Date(timestamp_s * 1000); // Convert UNIX timestamp to milliseconds
    const formattedTimestamp = timestamp.toLocaleString(); // Convert timestamp to local date and time string
    timestamp_label.label = formattedTimestamp;
  },
);

start.connect("clicked", () => {
  startSession().catch(console.error);
});

close.connect("clicked", () => {
  start.sensitive = true;
  close.sensitive = false;
  portal.location_monitor_stop();
  revealer.reveal_child = false;
  console.log("Session closed");
});

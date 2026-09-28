import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Xdp, XdpGtk4, GLib
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)

revealer = workbench.builder.get_object("revealer")
start = workbench.builder.get_object("start")
close = workbench.builder.get_object("close")
distance_threshold = workbench.builder.get_object("distance_threshold")
time_threshold = workbench.builder.get_object("time_threshold")
accuracy_button = workbench.builder.get_object("accuracy_button")

latitude_label = workbench.builder.get_object("latitude")
longitude_label = workbench.builder.get_object("longitude")
accuracy_label = workbench.builder.get_object("accuracy")
altitude_label = workbench.builder.get_object("altitude")
speed_label = workbench.builder.get_object("speed")
heading_label = workbench.builder.get_object("heading")
description_label = workbench.builder.get_object("description")
timestamp_label = workbench.builder.get_object("timestamp")

location_accuracy = Xdp.LocationAccuracy.EXACT
distance_threshold_value = distance_threshold.get_value()
time_threshold_value = time_threshold.get_value()


def on_location_monitor_started(portal, result):
    success = portal.location_monitor_start_finish(result)
    if success:
        print("Location access granted")
        revealer.set_reveal_child(True)
    else:
        print("Error retrieving location")


def start_session():
    start.set_sensitive(False)
    close.set_sensitive(True)
    portal.location_monitor_start(
        parent,
        distance_threshold_value,
        time_threshold_value,
        location_accuracy,
        Xdp.LocationMonitorFlags.NONE,
        None,
        on_location_monitor_started,
    )


def on_time_threshold_changed(_row, _value):
    global time_threshold_value
    portal.location_monitor_stop()
    revealer.set_reveal_child(False)
    time_threshold_value = time_threshold.get_value()
    print("Time threshold changed")
    start_session()


def on_distance_threshold_changed(_row, _value):
    global distance_threshold_value
    portal.location_monitor_stop()
    revealer.set_reveal_child(False)
    distance_threshold_value = distance_threshold.get_value()
    print("Distance threshold changed")
    start_session()


def on_selected_item_changed(_row, _item):
    global location_accuracy
    print("Accuracy changed")
    portal.location_monitor_stop()
    revealer.set_reveal_child(False)
    accuracy_flag = accuracy_button.get_selected_item().get_string()
    location_accuracy = getattr(Xdp.LocationAccuracy, accuracy_flag.upper())
    start_session()


def on_location_updated(
    _self,
    latitude,
    longitude,
    altitude,
    accuracy,
    speed,
    heading,
    description,
    timestamp_s,
    _timestamp_ms,
):
    latitude_label.set_label(str(latitude))
    longitude_label.set_label(str(longitude))
    accuracy_label.set_label(str(accuracy))
    altitude_label.set_label(str(altitude))
    speed_label.set_label(str(speed))
    heading_label.set_label(str(heading))
    description_label.set_label(description)

    # Convert UNIX timestamp to local date and time string
    timestamp = GLib.DateTime.new_from_unix_local(timestamp_s)
    formatted_timestamp = timestamp.format("%c")
    timestamp_label.set_label(formatted_timestamp)


def on_close(_button):
    start.set_sensitive(True)
    close.set_sensitive(False)
    portal.location_monitor_stop()
    revealer.set_reveal_child(False)
    print("Session closed")


time_threshold.connect("notify::value", on_time_threshold_changed)

distance_threshold.connect("notify::value", on_distance_threshold_changed)

accuracy_button.connect("notify::selected-item", on_selected_item_changed)

portal.connect("location-updated", on_location_updated)

start.connect("clicked", lambda _: start_session())

close.connect("clicked", on_close)

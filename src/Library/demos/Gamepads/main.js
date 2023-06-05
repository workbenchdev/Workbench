import Gtk from "gi://Gtk";
import Manette from "gi://Manette";

const monitor = Manette.Monitor.new();

monitor.connect("device-connected", (monitor, connected_device) => {
  console.log(connected_device.get_name());
});

monitor.connect("device-disconnected", (monitor, disconnected_device) => {
  console.log(disconnected_device.get_name());
});

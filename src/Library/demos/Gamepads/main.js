import Gtk from "gi://Gtk";
import Manette from "gi://Manette";

const monitor = Manette.Monitor.new();

monitor.connect("device-connected", (monitor, device) => {
  console.log("A new device is connected:", device);
});

monitor.connect("device-disconnected", (monitor, device) => {
  console.log("A device is disconnected:", device);
});

const monitorIter = monitor.iterate();

// Iterate over the devices and log their details
let [has_next, device] = monitorIter.next();
while (device !== null) {
  console.log("Device:", device);
  [has_next, device] = monitorIter.next();
}

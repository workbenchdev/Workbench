/* IMPORTANT: To use USB devices in your app you will need to set the --device=all permission.
 Workbench doesn't have such permission by default so to run this example you have to run the command
 flatpak override re.sonny.Workbench --device=all */

import Gtk from "gi://Gtk";
import Manette from "gi://Manette";

const status_page = workbench.builder.get_object("status_page");

const monitor = Manette.Monitor.new();
const monitor_iter = monitor.iterate();

// Iterate over the devices and log their details
let [has_next, device] = monitor_iter.next();

while (device !== null) {
  console.log("Device:", device.get_name());

  status_page.title = _("Controller connected");
  status_page.description = "";

  // Face and Shoulder Buttons
  device.connect("button-press-event", (device, event) => {
    console.log(
      `Device: ${device.get_name()} pressed ${event.get_hardware_code()}`,
    );

    if (device.has_rumble()) {
      device.rumble(1000, 1500, 200);
    }
  });

  // D-pads
  device.connect("hat-axis-event", (device, event) => {
    const [, hat_axis, hat_value] = event.get_hat();
    console.log(
      `Device: ${device.get_name()} moved axis ${hat_axis} to ${hat_value}`,
    );
  });

  // Analog Axis - Triggers and Joysticks
  device.connect("absolute-axis-event", (device, event) => {
    const [, axis, value] = event.get_absolute();
    if (Math.abs(value) > 0.2)
      console.log(
        `Device: ${device.get_name()} moved axis ${axis} to ${value}`,
      );
  });

  [has_next, device] = monitor_iter.next();
}

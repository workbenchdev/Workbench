import Manette from "gi://Manette";

const stack = workbench.builder.get_object("stack");
const button_rumble = workbench.builder.get_object("button_rumble");

const devices = new Set();

stack.visible_child_name = "connect";
button_rumble.connect("clicked", () => {
  for (const device of devices) {
    if (device.has_rumble()) {
      device.rumble(1000, 1500, 200);
    }
  }
});

function onDevice(device) {
  console.log("Device connected:", device.get_name());

  // Face and Shoulder Buttons
  device.connect("button-press-event", (device, event) => {
    const [success, button] = event.get_button();
    console.log(
      `${device.get_name()}: press ${success ? button : event.get_hardware_code()}`,
    );
  });

  // Face and Shoulder Buttons
  device.connect("button-release-event", (device, event) => {
    const [success, button] = event.get_button();
    console.log(
      `${device.get_name()}: release ${success ? button : event.get_hardware_code()}`,
    );
  });

  // D-pads
  device.connect("hat-axis-event", (device, event) => {
    const [, hat_axis, hat_value] = event.get_hat();
    console.log(`${device.get_name()}: moved axis ${hat_axis} to ${hat_value}`);
  });

  // Analog Axis - Triggers and Joysticks
  device.connect("absolute-axis-event", (device, event) => {
    const [, axis, value] = event.get_absolute();
    if (Math.abs(value) > 0.2)
      console.log(`${device.get_name()}: moved axis ${axis} to ${value}`);
  });

  devices.add(device);
  stack.visible_child_name = "watch";
}

function onDeviceDisconnected(device) {
  console.log("Device Disconnected:", device.get_name());

  devices.delete(device);
  stack.visible_child_name = devices.size < 1 ? "connect" : "watch";
}

const monitor = new Manette.Monitor();
const monitor_iter = monitor.iterate();

let has_next;
let device;
do {
  [has_next, device] = monitor_iter.next();
  if (device !== null) onDevice(device);
} while (has_next);

monitor.connect("device-connected", (_self, device) => onDevice(device));
monitor.connect("device-disconnected", (_self, device) =>
  onDeviceDisconnected(device),
);

import gi

gi.require_version("Manette", "0.2")
from gi.repository import Manette
import workbench

stack = workbench.builder.get_object("stack")
button_rumble = workbench.builder.get_object("button_rumble")

devices = set()

stack.set_visible_child_name("connect")


def on_rumble_button_clicked(*_):
    for device in devices:
        if device.has_rumble():
            device.rumble(1000, 1500, 200)


button_rumble.connect("clicked", on_rumble_button_clicked)


def on_button_press_event(device, event):
    success, button = event.get_button()
    print(
        f"{device.get_name()}: press {button if success else event.get_hardware_code()}"
    )


def on_button_release_event(device, event):
    success, button = event.get_button()
    print(
        f"{device.get_name()}: release {button if success else event.get_hardware_code()}"
    )


def on_hat_axis_event(device, event):
    _, hat_axis, hat_value = event.get_hat()
    print(f"{device.get_name()}: moved axis {hat_axis} to {hat_value}")


def on_absolute_axis_event(device, event):
    _, axis, value = event.get_absolute()
    if abs(value) > 0.2:
        print(f"{device.get_name()}: moved axis {axis} to {value}")


def on_device(_, device):
    print("Device connected:", device.get_name())

    # Face and Shoulder Buttons
    device.connect("button-press-event", on_button_press_event)

    # Face and Shoulder Buttons
    device.connect("button-release-event", on_button_release_event)

    # D-pads
    device.connect("hat-axis-event", on_hat_axis_event)

    # Analog Axis - Triggers and Joysticks
    device.connect("absolute-axis-event", on_absolute_axis_event)

    devices.add(device)
    stack.set_visible_child_name("watch")


def on_device_disconnected(_, device):
    print(f"Device Disconnected: {device.get_name()}")

    devices.remove(device)
    stack.set_visible_child_name("connect" if len(devices) < 1 else "watch")


monitor = Manette.Monitor()
monitor_iter = monitor.iterate()

while True:
    has_next, device = monitor_iter.next()
    if device:
        on_device(None, device)
    if not has_next:
        break

monitor.connect("device-connected", on_device)
monitor.connect("device-disconnected", on_device_disconnected)

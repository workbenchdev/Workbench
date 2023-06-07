/*To use USB devices in your app you will need to set the --device=all permission.
 Workbench doesn't have such permission by default so to run this example you have to  */
import Gtk from "gi://Gtk";
import Manette from "gi://Manette";

const continue_button = workbench.builder.get_object("continue_button");
const monitor = Manette.Monitor.new();
const monitor_iter = monitor.iterate();

// Iterate over the devices and log their details
let [has_next, device] = monitor_iter.next();
while (device !== null) {
  console.log("Device:", device.get_name());
  [has_next, device] = monitor_iter.next();

  continue_button.sensitive = true;
  continue_button.add_css_class("suggested-action");
}

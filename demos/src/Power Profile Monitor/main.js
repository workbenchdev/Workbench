import Adw from "gi://Adw";
import Gio from "gi://Gio";

const power_profile_monitor = Gio.PowerProfileMonitor.dup_default();
const overlay = workbench.builder.get_object("overlay");

power_profile_monitor.connect("notify::power-saver-enabled", () => {
  const toast = new Adw.Toast({
    priority: Adw.ToastPriority.HIGH,
  });

  if (power_profile_monitor.power_saver_enabled) {
    toast.title = "Power Saver Enabled";
  } else {
    toast.title = "Power Saver Disabled";
  }

  overlay.add_toast(toast);
});

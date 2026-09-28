import gi

gi.require_version("Adw", "1")
from gi.repository import Adw, Gio
import workbench

power_profile_monitor = Gio.PowerProfileMonitor.dup_default()
overlay = workbench.builder.get_object("overlay")


def on_power_saver_enabled(monitor, _paramspec):
    toast = Adw.Toast(
        priority=Adw.ToastPriority.HIGH,
    )

    if monitor.get_power_saver_enabled():
        toast.set_title("Power Saver Enabled")
    else:
        toast.set_title("Power Saver Disabled")

    overlay.add_toast(toast)


power_profile_monitor.connect("notify::power-saver-enabled", on_power_saver_enabled)

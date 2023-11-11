import gi

gi.require_version("Adw", "1")
from gi.repository import Adw, Gio
import workbench

power_profile_monitor = Gio.PowerProfileMonitor.dup_default()
overlay = workbench.builder.get_object("overlay")


def on_power_saver_enabled(_monitor, enabled):
    if enabled:
        toast = Adw.Toast(
            title="Backup paused to save power",
            button_label="Resume",
            priority=Adw.ToastPriority.HIGH,
        )
    else:
        toast = Adw.Toast(
            title="Backup resumed",
            priority=Adw.ToastPriority.HIGH,
        )

    overlay.add_toast(toast)


power_profile_monitor.connect("notify::power-saver-enabled", on_power_saver_enabled)

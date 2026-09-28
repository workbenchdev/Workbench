#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var overlay = (Adw.ToastOverlay) workbench.builder.get_object ("overlay");
    var power_profile_monitor = PowerProfileMonitor.dup_default ();

    power_profile_monitor.notify["power-saver-enabled"].connect (() => {
        var toast = new Adw.Toast ("power-saver") {
            priority = Adw.ToastPriority.HIGH
        };

        if (power_profile_monitor.power_saver_enabled) {
            toast.title = "Power Saver Enabled";
        } else {
            toast.title = "Power Saver Disabled";
        }
        overlay.add_toast (toast);
    });
}

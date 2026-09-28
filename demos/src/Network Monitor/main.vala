#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

void set_network_status (Adw.Banner banner, NetworkMonitor network_monitor, Gtk.LevelBar level_bar) {
    banner.revealed = network_monitor.network_metered;
    level_bar.value = (double) network_monitor.connectivity;
}

public void main () {
    var banner = (Adw.Banner) workbench.builder.get_object ("banner");
    var network_monitor = NetworkMonitor.get_default ();
    var level_bar = (Gtk.LevelBar) workbench.builder.get_object ("level_bar");

    set_network_status (banner, network_monitor, level_bar);
    network_monitor.network_changed.connect (() => {
        set_network_status (banner, network_monitor, level_bar);
    });
    banner.button_clicked.connect (() => {
        banner.revealed = false;
    });
}

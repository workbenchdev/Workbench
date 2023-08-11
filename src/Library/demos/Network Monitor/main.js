import Gio from "gi://Gio";

const banner = workbench.builder.get_object("banner");
const network_monitor = Gio.NetworkMonitor.get_default();
const scale = workbench.builder.get_object("scale");
const level_bar = workbench.builder.get_object("level_bar");

level_bar.value = network_monitor.connectivity;

network_monitor.connect("network-changed", () => {
  banner.revealed = network_monitor.network_metered;
  level_bar.value = network_monitor.connectivity;
});

banner.connect("button-clicked", () => {
  banner.revealed = false;
});

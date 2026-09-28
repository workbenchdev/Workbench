from gi.repository import Gio
import workbench

banner = workbench.builder.get_object("banner")
network_monitor = Gio.NetworkMonitor.get_default()
level_bar = workbench.builder.get_object("level_bar")


def set_network_status():
    banner.set_revealed(network_monitor.get_network_metered())
    level_bar.set_value(network_monitor.get_connectivity())


set_network_status()
network_monitor.connect("network-changed", lambda *_: set_network_status())

banner.connect("button-clicked", lambda _: banner.set_revealed(False))

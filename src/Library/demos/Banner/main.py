import gi

gi.require_version("Adw", "1")
from gi.repository import Adw
import workbench


banner = workbench.builder.get_object("banner")
overlay = workbench.builder.get_object("overlay")
button_show_banner = workbench.builder.get_object("button_show_banner")


def alert(_banner):
    _banner.set_revealed(False)

    toast = Adw.Toast(
        title="Troubleshoot successful!",
        timeout=3,
    )
    overlay.add_toast(toast)


banner.connect("button-clicked", alert)

button_show_banner.connect("clicked", lambda *_: banner.set_revealed(True))

import gi

gi.require_version("Xdp", "1.0")
gi.require_version("XdpGtk4", "1.0")
from gi.repository import Gio, Xdp, XdpGtk4
import workbench

portal = Xdp.Portal()
parent = XdpGtk4.parent_new_gtk(workbench.window)
button = workbench.builder.get_object("button")

uri = workbench.resolve("./wallpaper.png")


def on_wallpaper_set(_portal, result):
    success = _portal.set_wallpaper_finish(result)
    if success:
        print("Wallpaper set successfully")
    else:
        print("Could not set wallpaper")


def on_clicked(_button):
    portal.set_wallpaper(
        parent,
        uri,
        Xdp.WallpaperFlags.PREVIEW
        | Xdp.WallpaperFlags.BACKGROUND
        | Xdp.WallpaperFlags.LOCKSCREEN,
        None,
        on_wallpaper_set,
    )


button.connect("clicked", on_clicked)

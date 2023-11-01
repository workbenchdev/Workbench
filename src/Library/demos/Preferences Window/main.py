import gi

gi.require_version("Adw", "1")
from gi.repository import Adw
import workbench

pref_window = workbench.builder.get_object("pref_window")
dm_switch = workbench.builder.get_object("dm_switch")
subpage = workbench.builder.get_object("subpage")
subpage_row = workbench.builder.get_object("subpage_row")
subpage_button = workbench.builder.get_object("subpage_button")
toast_button = workbench.builder.get_object("toast_button")
style_manager = Adw.StyleManager.get_default()

dm_switch.set_active(style_manager.get_dark())

# When the Switch is toggled, set the color scheme
dm_switch.connect(
    "notify::active",
    lambda *_: style_manager.set_color_scheme(
        Adw.ColorScheme.FORCE_DARK
        if dm_switch.get_active()
        else Adw.ColorScheme.FORCE_LIGHT
    ),
)

# Preferences windows can display subpages
subpage_row.connect("activated", lambda *_: pref_window.present_subpage(subpage))

subpage_button.connect("clicked", lambda *_: pref_window.close_subpage())

toast_button.connect(
    "clicked",
    lambda *_: pref_window.add_toast(
        Adw.Toast(
            title="Preferences windows can display toasts",
        )
    ),
)

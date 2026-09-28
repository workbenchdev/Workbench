import gi

gi.require_version("Adw", "1")
from gi.repository import Adw
import workbench

dialog = workbench.builder.get_object("dialog")
dm_switch = workbench.builder.get_object("dm_switch")
subpage = workbench.builder.get_object("subpage")
subpage_row = workbench.builder.get_object("subpage_row")
subpage_button = workbench.builder.get_object("subpage_button")
toast_button = workbench.builder.get_object("toast_button")
button = workbench.builder.get_object("button")

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

# Preferences dialogs can display subpages
subpage_row.connect("activated", lambda *_: dialog.push_subpage(subpage))

subpage_button.connect("clicked", lambda *_: dialog.pop_subpage())

toast_button.connect(
    "clicked",
    lambda *_: dialog.add_toast(
        Adw.Toast(
            title="Preferences dialogs can display toasts",
        )
    ),
)

button.connect("clicked", lambda *_: dialog.present(workbench.window))

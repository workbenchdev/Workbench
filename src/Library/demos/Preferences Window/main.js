import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const pref_window = workbench.builder.get_object("pref_window");
const dm_switch = workbench.builder.get_object("dm_switch");
const fh_switch = workbench.builder.get_object("fh_switch");
const appearance_page = workbench.builder.get_object("appearance_page");
const style_manager = Adw.StyleManager.get_default();

pref_window.set_visible_page(appearance_page);

dm_switch.active = style_manager.dark;

dm_switch.connect("state-set", (widget, state) => {
  // When the Switch is toggled, set the color scheme
  if (state) {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_DARK;
  } else {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_LIGHT;
  }
});

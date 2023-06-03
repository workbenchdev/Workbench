import Adw from "gi://Adw";

const pref_window = workbench.builder.get_object("pref_window");
const dm_switch = workbench.builder.get_object("dm_switch");
const subpage = workbench.builder.get_object("subpage");
const subpage_row = workbench.builder.get_object("subpage_row");
const subpage_button = workbench.builder.get_object("subpage_button");
const toast_button = workbench.builder.get_object("toast_button");
const style_manager = Adw.StyleManager.get_default();

dm_switch.active = style_manager.dark;

dm_switch.connect("notify::active", () => {
  // When the Switch is toggled, set the color scheme
  if (dm_switch.active) {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_DARK;
  } else {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_LIGHT;
  }
});

// Preferences windows can display subpages
subpage_row.connect("activated", () => {
  pref_window.present_subpage(subpage);
});

subpage_button.connect("clicked", () => {
  pref_window.close_subpage();
});

toast_button.connect("clicked", () => {
  const toast = new Adw.Toast({
    title: "Preferences windows can display toasts",
  });

  pref_window.add_toast(toast);
});

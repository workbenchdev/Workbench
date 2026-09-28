import Adw from "gi://Adw";

const dialog = workbench.builder.get_object("dialog");
const dm_switch = workbench.builder.get_object("dm_switch");
const subpage = workbench.builder.get_object("subpage");
const subpage_row = workbench.builder.get_object("subpage_row");
const subpage_button = workbench.builder.get_object("subpage_button");
const toast_button = workbench.builder.get_object("toast_button");
const style_manager = Adw.StyleManager.get_default();
const button = workbench.builder.get_object("button");

dm_switch.active = style_manager.dark;

dm_switch.connect("notify::active", () => {
  // When the Switch is toggled, set the color scheme
  if (dm_switch.active) {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_DARK;
  } else {
    style_manager.color_scheme = Adw.ColorScheme.FORCE_LIGHT;
  }
});

// Preferences dialogs can display subpages
subpage_row.connect("activated", () => {
  dialog.push_subpage(subpage);
});

subpage_button.connect("clicked", () => {
  dialog.pop_subpage();
});

toast_button.connect("clicked", () => {
  const toast = new Adw.Toast({
    title: "Preferences dialogs can display toasts",
  });

  dialog.add_toast(toast);
});

button.connect("clicked", () => {
  dialog.present(workbench.window);
});

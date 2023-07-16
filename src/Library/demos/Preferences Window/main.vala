#!/usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

private Adw.PreferencesWindow pref_window;
private Gtk.Switch dm_switch;
private Adw.StatusPage subpage;
private Adw.ActionRow subpage_row;
private Gtk.Button subpage_button;
private Gtk.Button toast_button;
private Adw.StyleManager style_manager;

public void main () {
  pref_window = (Adw.PreferencesWindow) workbench.builder.get_object ("pref_window");
  dm_switch = (Gtk.Switch) workbench.builder.get_object ("dm_switch");
  subpage = (Adw.StatusPage) workbench.builder.get_object ("subpage");
  subpage_row = (Adw.ActionRow) workbench.builder.get_object ("subpage_row");
  subpage_button = (Gtk.Button) workbench.builder.get_object ("subpage_button");
  toast_button = (Gtk.Button) workbench.builder.get_object ("toast_button");
  style_manager = Adw.StyleManager.get_default();

  dm_switch.active = style_manager.dark;

  dm_switch.notify["active"].connect(() => {
    // When the Switch is toggled, set the color scheme
    if (dm_switch.active) {
      style_manager.color_scheme = Adw.ColorScheme.FORCE_DARK;
    } else {
      style_manager.color_scheme = Adw.ColorScheme.FORCE_LIGHT;
    }
  });

  // Preferences windows can display subpages
  subpage_row.activated.connect(() => pref_window.present_subpage(subpage));

  subpage_button.clicked.connect(() => pref_window.close_subpage());

  toast_button.clicked.connect(() => {
    var toast = new Adw.Toast("Preferences windows can display toasts");

    pref_window.add_toast(toast);
  });
}

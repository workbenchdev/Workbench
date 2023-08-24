#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
  var pref_window = (Adw.PreferencesWindow) workbench.builder.get_object ("pref_window");
  var dm_switch = (Gtk.Switch) workbench.builder.get_object ("dm_switch");
  var subpage = (Adw.StatusPage) workbench.builder.get_object ("subpage");
  var subpage_row = (Adw.ActionRow) workbench.builder.get_object ("subpage_row");
  var subpage_button = (Gtk.Button) workbench.builder.get_object ("subpage_button");
  var toast_button = (Gtk.Button) workbench.builder.get_object ("toast_button");
  var style_manager = Adw.StyleManager.get_default();

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

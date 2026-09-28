#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
    var dialog = (Adw.PreferencesDialog) workbench.builder.get_object ("dialog");
    var dm_switch = (Adw.SwitchRow) workbench.builder.get_object ("dm_switch");
    var subpage = (Adw.NavigationPage) workbench.builder.get_object ("subpage");
    var subpage_row = (Adw.ActionRow) workbench.builder.get_object ("subpage_row");
    var subpage_button = (Gtk.Button) workbench.builder.get_object ("subpage_button");
    var toast_button = (Gtk.Button) workbench.builder.get_object ("toast_button");
    var button = (Gtk.Button) workbench.builder.get_object ("button");
    var style_manager = Adw.StyleManager.get_default ();

    dm_switch.active = style_manager.dark;

    dm_switch.notify["active"].connect (() => {
        // When the Switch is toggled, set the color scheme
        if (dm_switch.active) {
            style_manager.color_scheme = Adw.ColorScheme.FORCE_DARK;
        } else {
            style_manager.color_scheme = Adw.ColorScheme.FORCE_LIGHT;
        }
    });

    // Preferences dialogs can display subpages
    subpage_row.activated.connect (() => dialog.push_subpage (subpage));

    subpage_button.clicked.connect (() => dialog.pop_subpage ());

    toast_button.clicked.connect (() => {
        var toast = new Adw.Toast ("Preferences dialogs can display toasts");

        dialog.add_toast (toast);
    });

    button.clicked.connect (() => {
        dialog.present (workbench.window);
    });
}

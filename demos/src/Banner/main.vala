#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var banner = (Adw.Banner) workbench.builder.get_object ("banner");
    var overlay = (Adw.ToastOverlay) workbench.builder.get_object ("overlay");
    var button_show_banner = (Gtk.Button) workbench.builder.get_object ("button_show_banner");

    banner.button_clicked.connect (() => {
        banner.revealed = false;
        var toast = new Adw.Toast ("Troubleshoot successful!") {
            timeout = 3
        };
        overlay.add_toast (toast);
    });

    button_show_banner.clicked.connect (() => {
        banner.revealed = true;
    });
}

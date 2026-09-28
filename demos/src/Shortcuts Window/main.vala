#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
    var shortcuts_window = (Gtk.ShortcutsWindow) workbench.builder.get_object("shortcuts_window");
    var button = (Gtk.Button) workbench.builder.get_object("button");

    button.clicked.connect(() => {
        shortcuts_window.present();
    });
}

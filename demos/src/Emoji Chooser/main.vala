#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main () {
    var emoji_chooser = (Gtk.EmojiChooser) workbench.builder.get_object ("emoji_chooser");
    var button = (Gtk.MenuButton) workbench.builder.get_object ("button");

    emoji_chooser.emoji_picked.connect ((emoji) => {
        button.label = emoji;
    });
}

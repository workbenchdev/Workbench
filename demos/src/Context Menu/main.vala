#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main() {
    var box_menu_parent = (Gtk.Box) workbench.builder.get_object(
                                                                 "box_menu_parent"
    );
    var label_emoji = (Gtk.Label) workbench.builder.get_object(
                                                               "label_emoji"
    );
    var gesture_click = (Gtk.GestureClick) workbench.builder.get_object(
                                                                        "gesture_click"
    );
    var popover_menu = (Gtk.PopoverMenu) workbench.builder.get_object(
                                                                      "popover_menu"
    );

    gesture_click.pressed.connect((gesture, n_press, x, y) => {
        var position = Gdk.Rectangle() {
            x = (int) x, y = (int) y
        };
        popover_menu.set_pointing_to(position);
        popover_menu.popup();
    });

    var mood_group = new SimpleActionGroup();
    box_menu_parent.insert_action_group("mood", mood_group);

    var emoji_action = new SimpleAction(
                                        "emoji",
                                        new GLib.VariantType("s")
    );

    emoji_action.activate.connect((action, parameter) => {
        label_emoji.label = parameter.get_string();
    });
    mood_group.add_action(emoji_action);
}

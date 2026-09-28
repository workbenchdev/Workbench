#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private int step_count = 1;

public void main () {
    string[] button_ids = {
        "button00",
        "button01",
        "button02",
        "button10",
        "button11",
        "button12",
        "button20",
        "button21",
        "button22",
    };

    foreach (string id in button_ids) {
        var button = (Gtk.Button) workbench.builder.get_object (id);
        button.clicked.connect (on_clicked);
    }
}

private void on_clicked (Gtk.Button button) {
    var image = (Gtk.Image) button.child;
    if (image.icon_name != null) {
        return;
    }

    image.icon_name = "cross-large-symbolic";
    bool pc_is_thinking = true;

    while (pc_is_thinking) {
        int row = Random.int_range (0, 3);
        int column = Random.int_range (0, 3);

        var temp = (Gtk.Button) workbench.builder.get_object (@"button$row$column");
        var temp_image = (Gtk.Image?) temp.child;
        if (temp_image.icon_name == null) {
            // Store and show PC reaction
            temp_image.icon_name = "circle-outline-thick-symbolic";
            pc_is_thinking = false;
            step_count += 2;
        }
        if (step_count >= 8) {
            pc_is_thinking = false;
        }
    }
}

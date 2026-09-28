#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {

    string[] button_ids = { "button_no_look", "button_look", "button_camera", "button_flashlight", "button_console" };
    string[] button_names = { "Don't look", "Look", "Camera", "Flashlight", "Console" };

    for (int i = 0; i < button_ids.length; i++) {
        string id = button_ids[i];
        string name = button_names[i];
        var button = (Gtk.ToggleButton) workbench.builder.get_object (id);

        button.notify["active"].connect (() => {
            string status = button.active ? "On" : "Off";
            message (@"$name $status");
        });
    }
}

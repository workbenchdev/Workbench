#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Adw.Bin custom_button;

public void main () {
    custom_button = (Adw.Bin) workbench.builder.get_object ("custom_button");

    var clicker = new Gtk.GestureClick ();
    clicker.released.connect (toggle_button);

    var key_controller = new Gtk.EventControllerKey ();
    key_controller.key_released.connect ((keyval) => {
        uint[] keyvals = {
            Gdk.Key.space,
            Gdk.Key.KP_Space,
            Gdk.Key.Return,
            Gdk.Key.ISO_Enter,
            Gdk.Key.KP_Enter,
        };

        if (keyval in keyvals) {
            toggle_button ();
        }
    });

    custom_button.add_controller (clicker);
    custom_button.add_controller (key_controller);
}

private void toggle_button () {
    Gtk.StateFlags flags = custom_button.get_state_flags ();
    bool checked = CHECKED in flags;

    // Invert the current state:
    checked = !checked;
    Gtk.AccessibleTristate pressed;

    if (checked) {
        pressed = TRUE;
        // Update the widget state (i.e CSS pseudo-class)
        custom_button.set_state_flags (CHECKED, false);
    } else {
        pressed = FALSE;
        custom_button.unset_state_flags (CHECKED);
    }

    // Update the accessible state
    custom_button.update_state (Gtk.AccessibleState.PRESSED, pressed);

    // Grab the focus
    custom_button.grab_focus ();
}

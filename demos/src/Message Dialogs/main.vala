#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
    var button_confirmation = (Gtk.Button) workbench.builder.get_object ("button_confirmation");
    var button_error = (Gtk.Button) workbench.builder.get_object ("button_error");
    var button_advanced = (Gtk.Button) workbench.builder.get_object ("button_advanced");

    button_confirmation.clicked.connect (create_confirmation_dialog.begin);
    button_error.clicked.connect (create_error_dialog.begin);
    button_advanced.clicked.connect (create_advanced_dialog.begin);
}

private async void create_confirmation_dialog () {
    var dialog = new Adw.AlertDialog
        (
         "Replace File?",
         "A file named `example.png` already exists. Do you want to replace it?") {
        close_response = "cancel"
    };

    dialog.add_response ("cancel", "Cancel");
    dialog.add_response ("replace", "Replace");

    // Use DESTRUCTIVE to draw attention to the potentially damaging consequences of using response.
    dialog.set_response_appearance ("replace", DESTRUCTIVE);

    string response = yield dialog.choose (workbench.window, null);

    message (@"Selected \"$response\" response");
}

private async void create_error_dialog () {
    var dialog = new Adw.AlertDialog (
                                      "Critical Error",
                                      "You did something you should not have") {
        close_response = "okay"
    };

    dialog.add_response ("okay", "Okay");

    string response = yield dialog.choose (workbench.window, null);

    message (@"Selected \"$response\" response");
}

private async void create_advanced_dialog () {
    var dialog = new Adw.AlertDialog (
                                      "Login",
                                      "A valid password is needed to continue"
        ) {
        close_response = "cancel"
    };

    dialog.add_response ("cancel", "Cancel");
    dialog.add_response ("login", "Login");

    // Use SUGGESTED appearance to mark important responses such as the affirmative action
    dialog.set_response_appearance ("login", SUGGESTED);

    var entry = new Gtk.PasswordEntry () {
        show_peek_icon = true
    };

    dialog.extra_child = entry;

    string response = yield dialog.choose (workbench.window, null);

    if (response == "login") {
        message (@"Selected \"$response\" response with password \"$(entry.text)\".");
    } else {
        message (@"Selected \"$response\" response");
    }
}

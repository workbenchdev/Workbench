#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
    var box = (Gtk.Box) workbench.builder.get_object ("subtitle");

    var button = new Gtk.Button () {
        label = "Press me",
        margin_top = 6,
        css_classes = { "suggested-action" }
    };
    button.clicked.connect (greet);
    box.append (button);

    stdout.printf ("Welcome to Workbench!\n");
}

public void greet () {
    var dialog = new Adw.AlertDialog (
                                      null, "Hello World!"
    );

    dialog.add_response ("ok", "OK");
    dialog.response.connect ((self, response) => {
        stdout.printf ("%s\n", response);
    });

    dialog.present (workbench.window);
}

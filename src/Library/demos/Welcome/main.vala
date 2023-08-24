#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
  Gtk.init ();

  var box = workbench.builder.get_object ("subtitle") as Gtk.Box;

  // https://valadoc.org/gtk4/Gtk.Button.html
  var button = new Gtk.Button () {
    label = "Press me",
    margin_top = 6,
    css_classes = {"suggested-action"}
  };
  button.clicked.connect (greet);
  box.append (button);

  stdout.printf ("Welcome to Workbench!\n");
}

public void greet () {
  // https://valadoc.org/libadwaita-1/Adw.MessageDialog.html
  var dialog = new Adw.MessageDialog (
    workbench.window, null, "Hello World!"
    );

  dialog.add_response ("ok", "OK");
  dialog.response.connect ((self, response) => {
    stdout.printf ("%s\n", response);
  });

  dialog.present ();
}

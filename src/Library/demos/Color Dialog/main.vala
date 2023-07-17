#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.ColorDialogButton color_dialog_button;
private Gtk.Button custom_button;
private Gtk.ColorDialog dialog_custom;

public void main () {
  color_dialog_button = (Gtk.ColorDialogButton) workbench.builder.get_object ("color_dialog_button");
  custom_button = (Gtk.Button) workbench.builder.get_object ("custom_button");

  var color = Gdk.RGBA ();
  color.parse ("red");

  var color_dialog = new Gtk.ColorDialog () {
    title = "Select a Color",
    modal = true,
    with_alpha = true
  };

  color_dialog_button.dialog = color_dialog;
  color_dialog_button.rgba = color;

  color_dialog_button.notify["rgba"].connect (() => {
    Gdk.RGBA chosen_color = color_dialog_button.get_rgba ();
    message ("Color Dialog Button: The color selected is %s", chosen_color.to_string ());
  });

  dialog_custom = new Gtk.ColorDialog () {
    title = "Select a Color",
    modal = true,
    with_alpha = true
  };

  custom_button.clicked.connect (on_button_clicked);
}

private async void on_button_clicked () {
  try {
    Gdk.RGBA color = yield dialog_custom.choose_rgba (workbench.window, null, null);
    message ("Custom Button: The color selected is %s", color.to_string ());
  }
  catch (Error e) {
    critical (e.message);
  }
}

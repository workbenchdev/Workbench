#!/usr/bin/vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
  var overlay = workbench.builder.get_object ("overlay") as Adw.ToastOverlay;

  var button_simple = workbench.builder.get_object ("button_simple") as Gtk.Button;
  button_simple.clicked.connect (() => {
    var toast = new Adw.Toast ("Toasts are delicious!") {
      timeout = 1
    };

    toast.dismissed.connect (() => {
      button_simple.sensitive = true;
    });
    overlay.add_toast (toast);
    button_simple.sensitive = false;
  });

  // Sorry, this example is not available in Vala yet.
  // see https://github.com/sonnyp/Workbench/issues/110
  var button_advanced = workbench.builder.get_object("button_advanced") as Gtk.Button;
  button_advanced.sensitive = false;
}


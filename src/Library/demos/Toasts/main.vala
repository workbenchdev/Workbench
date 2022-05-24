public void main () {
  var overlay = workbench.builder.get_object ("overlay") as Adw.ToastOverlay;

  var button_simple = workbench.builder.get_object ("button_simple") as Gtk.Button;
  button_simple.clicked.connect (() => {
    var toast = new Adw.Toast ("Toasts are delicious!") {
      timeout = 1
    };

    toast.dismissed.connect (() => {
      button_simple.set_sensitive (true);
    });
    overlay.add_toast (toast);
    button_simple.set_sensitive (false);
  });

  var button_advanced = workbench.builder.get_object("button_advanced") as Gtk.Button;
  button_advanced.clicked.connect(() => {
    var message_id = "42";
    var advanced_toast = new Adw.Toast ("Message sent") {
      button_label = "Undo",
      action_name = "win.undo",
      action_target = new GLib.Variant.string (message_id),
      priority = Adw.ToastPriority.HIGH,
    };
    overlay.add_toast (advanced_toast);
  });

  var action_console = new SimpleAction ("undo", new GLib.VariantType ("s"));
  action_console.activate.connect ((self, target) => {
      var val = target.get_string ();
      stdout.printf ("undo" + val);
  });
  // TODO - Need access to the application for this to work.
  //workbench.application.add_action (action_console);
}


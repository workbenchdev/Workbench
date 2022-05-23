public void main () {
  var overlay = workbench.builder.get_object ("overlay") as Adw.ToastOverlay;

  var button_simple = workbench.builder.get_object ("button_simple") as Gtk.Button;
  button_simple.clicked.connect (() => {
    var toast = new Adw.Toast () {
      title = "Toasts are delicious!",
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
    var advanced_toast = new Adw.Toast () {
      title = "Message sent",
      button_label = "Undo",
      action_name = "win.undo",
      action_target = GLib.Variant.new_string (message_id),
      priority = Adw.ToastPriority.HIGH,
    };
    overlay.add_toast (advanced_toast);
  });

  var action_console = new Gio.SimpleAction () {
    name = "undo",
    parameter_type =  new GLib.VariantType ("S")
  };
  action_console.activate.connect ((self, target) => {
      var val = target.unpack ();
      console.log ("undo" + val);
  });
  workbench.window.add_action (action_console);
}


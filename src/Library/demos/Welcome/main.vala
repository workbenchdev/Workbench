public void run () {
	  var main = workbench.builder.get_object ("welcome") as Gtk.Box;

  	var button = new Gtk.Button.with_label ("Press me") {
	      margin_top = 24
	  };
	  button.clicked.connect (() => {
	      var dialog = new Gtk.MessageDialog (
	          workbench.window,
            Gtk.DialogFlags.MODAL,
            Gtk.MessageType.INFO,
            Gtk.ButtonsType.OK,
            "Hello World!"
        );

	      dialog.response.connect (() => {
	          dialog.close ();
	      });

	      dialog.present ();
	  });

	  main.append (button);
}

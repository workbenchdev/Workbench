
public void main () {
	  Gtk.init ();

	  var main = workbench.builder.get_object ("welcome") as Gtk.Box;

  	// https://valadoc.org/gtk4/Gtk.Button.html
  	var button = new Gtk.Button () {
  	    label = "Press me",
	      margin_top = 24
	  };
	  button.clicked.connect (greet);
	  main.append (button);

	  stdout.printf ("Welcome to Workbench!\n");
}

public void greet () {
    // https://valadoc.org/gtk4/Gtk.MessageDialog.html
    var dialog = new Gtk.MessageDialog (
        workbench.window,
        Gtk.DialogFlags.MODAL,
        Gtk.MessageType.INFO,
        // https://valadoc.org/gtk4/Gtk.ButtonsType.html
        Gtk.ButtonsType.OK,
        "Hello World!"
    );

    /*
     * Gtk.MessageDialog inherits from Gtk.Dialog
     * which possess a "response" signal
     * https://valadoc.org/gtk4/Gtk.Dialog.response.html
     */
    dialog.response.connect (() => {
        dialog.close ();
    });

    dialog.present ();
}

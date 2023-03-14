public void main (string[] args) {
	  Adw.init ();

    var builder = new Gtk.Builder();
    var output = new Gtk.Window ();

	  try {
	    builder.add_from_string(args[1], -1);
      var object = builder.get_object(args[2]) as Gtk.Widget;
      output.set_child(object);

    // We are only interested in crashes here
    // Previewer.js will handle errors
	  } catch {}
}

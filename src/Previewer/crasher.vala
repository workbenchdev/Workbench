public void main (string[] args) {
	  Adw.init ();

    var builder = new Gtk.Builder();

	  try {
	    builder.add_from_string(args[1], -1);
    // We are only interested in crashes here
    // Previewer.js will handle errors
	  } catch {}
}

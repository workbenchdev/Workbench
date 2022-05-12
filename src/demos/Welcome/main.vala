Gtk.Builder builder;

public void set_builder (Gtk.Builder b) {
	builder = b;
}

public void run () {
	print("Hello World from Vala code!\n");
	var label = builder.get_object ("text") as Gtk.Label;
	//label.label = "Hi!";
}

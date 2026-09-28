public void main (string[] args) {
    Adw.init ();

    var builder = new Gtk.Builder ();
    var output = new Gtk.Window ();
    var provider = new Gtk.CssProvider ();

    try {
        builder.add_from_string (args[1], -1);
        print("1\n");
        provider.load_from_string (args[2]);
        print("2\n");
        Gtk.StyleContext.add_provider_for_display (
            output.get_display(),
            provider,
            Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        );
        print("3\n");
        var object = builder.get_object (args[3]) as Gtk.Widget;
        output.set_child (object);
    } catch (Error e) {
        GLib.error (e.message);
    }

    //output.opacity = 0;
    output.present();

    // run pending work so CSS/style errors surface
    var ctx = MainContext.default ();
    while (ctx.pending ()) {
        ctx.iteration (false);
    }

    output.destroy();
}

#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gtksourceview-5 --pkg libspelling-1

public void main () {
    GtkSource.init ();
    var buffer = (GtkSource.Buffer) workbench.builder.get_object ("buffer");
    var text_view = (Gtk.TextView) workbench.builder.get_object ("text_view");

    var checker = Spelling.Checker.get_default ();
    checker.language = "en_US";
    var adapter = new Spelling.TextBufferAdapter (buffer, checker);
    MenuModel extra_menu = adapter.get_menu_model ();

    text_view.extra_menu = extra_menu;
    text_view.insert_action_group ("spelling", adapter);

    adapter.enabled = true;
}

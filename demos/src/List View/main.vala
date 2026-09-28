#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.ListView list_view;
private Gtk.Button add;
private Gtk.Button remove_button;

public void main () {
    list_view = (Gtk.ListView) workbench.builder.get_object ("list_view");
    add = (Gtk.Button) workbench.builder.get_object ("add");
    remove_button = (Gtk.Button) workbench.builder.get_object ("remove");

    // Model
    int item = 1;
    var string_model = new Gtk.StringList (
                                           { "Default Item 1", "Default Item 2", "Default Item 3" });
    var model = new Gtk.SingleSelection (string_model);

    // View
    string_model.items_changed.connect ((position, removed, added) => {
        message (@"position: $position, Item Removed? $(removed > 0), Item Added? $(added > 0)");
    });

    model.selection_changed.connect (() => {
        var string_object = (Gtk.StringObject) model.selected_item;
        message (@"Model item selected from view: $(string_object.string)");
    });

    list_view.model = model;

    // Controllers
    add.clicked.connect (() => {
        string_model.append (@"New Item $item");
        item++;
    });

    remove_button.clicked.connect (() => {
        string_model.remove (model.selected);
    });
}

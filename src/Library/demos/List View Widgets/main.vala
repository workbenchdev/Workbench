#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.ListView list_view;
private Gtk.GridView grid_view;
private Gtk.Button add;
private Gtk.Button remove_button;

public void main () {
  list_view = (Gtk.ListView) workbench.builder.get_object ("list_view");
  grid_view = (Gtk.GridView) workbench.builder.get_object ("grid_view");
  add = (Gtk.Button) workbench.builder.get_object ("add");
  remove_button = (Gtk.Button) workbench.builder.get_object ("remove");

  // Model
  int item = 1;
  var string_model = new Gtk.StringList (
    {"Default Item 1", "Default Item 2", "Default Item 3"}
  );
  var model = new Gtk.SingleSelection (string_model);

  var grid_view_factory = new Gtk.SignalListItemFactory ();

  grid_view_factory.setup.connect ((list_item) => {
    var list_box = new Gtk.Box (HORIZONTAL, 0) {
      width_request = 160,
      height_request = 160,
      css_classes = {"card"}
    };

    var label = new Gtk.Label ("") {
      halign = CENTER,
      hexpand = true,
      valign = CENTER
    };

    list_box.append (label);
    list_item.child = list_box;
  });

  grid_view_factory.bind.connect ((list_item) => {
    var list_box = (Gtk.Box) list_item.child;
    var label_widget = (Gtk.Label) list_box.get_last_child ();

    var model_item = (Gtk.StringObject) list_item.item;
    label_widget.label = model_item.string;
  });

  // View
  string_model.items_changed.connect ((position, removed, added) => {
    message (@"position: $position, Item Removed? $((bool) removed), Item Added? $((bool) added)");
  });

  model.selection_changed.connect (() => {
    var string_object = (Gtk.StringObject) model.selected_item;
    message (@"Model item selected from view: $(string_object.string)");
  });

  list_view.model = model;
  grid_view.model = model;
  grid_view.factory = grid_view_factory;

  // Controllers
  add.clicked.connect (() => {
    string_model.append (@"New Item $item");
    item++;
  });

  remove_button.clicked.connect (() => {
    string_model.remove (model.selected);
  });
}

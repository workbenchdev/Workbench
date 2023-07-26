#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.Stack stack;
private Gtk.ListBox list_box;
private Gtk.FlowBox flow_box;
private Gtk.ListBox list_box_editable;
private Gtk.SearchEntry search_entry;
private Gtk.Button add;
private Gtk.Button remove_button;

public void main () {
  stack = (Gtk.Stack) workbench.builder.get_object ("stack");
  list_box = (Gtk.ListBox) workbench.builder.get_object ("list_box");
  flow_box = (Gtk.FlowBox) workbench.builder.get_object ("flow_box");
  list_box_editable = (Gtk.ListBox) workbench.builder.get_object ("list_box_editable");
  search_entry = (Gtk.SearchEntry) workbench.builder.get_object ("search_entry");
  add = (Gtk.Button) workbench.builder.get_object ("add");
  remove_button = (Gtk.Button) workbench.builder.get_object ("remove");

  // Model
  int item = 1;
  var model = new Gtk.StringList (
    {"Default Item 1", "Default Item 2", "Default Item 3"}
  );

  model.items_changed.connect ((position, removed, added) => {
    message (@"position: $position, Item Removed? $((bool) removed), Item Added? $((bool) added)");
  });

  // Filter Model
  var search_expression = new Gtk.PropertyExpression (typeof(Gtk.StringObject), null, "string");
  var filter = new Gtk.StringFilter (search_expression) {
    ignore_case = true,
    match_mode = SUBSTRING
  };
  var filter_model = new Gtk.FilterListModel (model, filter) {
    incremental = true
  };

  list_box.bind_model (model, create_item_for_list_box);
  flow_box.bind_model (model, create_item_for_flow_box);
  list_box_editable.bind_model (filter_model, create_item_for_filter_model);

  // Controllers
  add.clicked.connect (() => {
    model.append (@"New Item $item");
    item++;
  });

  search_entry.search_changed.connect (() => {
    string search_text = search_entry.text;
    filter.search = search_text;
  });

  remove_button.clicked.connect (() => {
    var selected_row = list_box_editable.get_selected_row ();
    model.remove (selected_row.get_index ());
  });

  // View
  stack.notify["visible-child"].connect (() => {
    message ("View Changed");
  });

  list_box_editable.row_selected.connect (() => {
    remove_button.sensitive = list_box_editable.get_selected_row () != null;
  });
}

private Gtk.Widget create_item_for_list_box (Object item) {
  var string_object = (Gtk.StringObject) item;

  var list_row = new Adw.ActionRow () {
    title = string_object.string
  };
  return list_row;
}

private Gtk.Widget create_item_for_flow_box (Object item) {
  var string_object = (Gtk.StringObject) item;
  var label = new Gtk.Label (string_object.string) {
    halign = CENTER,
    hexpand = true,
    valign = CENTER
  };

  var label_bin = new Adw.Bin () {
    child = label,
    width_request = 160,
    height_request = 160,
    css_classes = { "card" }
  };
  return label_bin;
}

private Gtk.Widget create_item_for_filter_model (Object item) {
  var string_object = (Gtk.StringObject) item;

  var list_row = new Adw.ActionRow () {
    title = string_object.string
  };
  return list_row;
}

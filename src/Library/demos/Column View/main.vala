#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

// Define our class for our custom model
public class Book : Object {
  public string title { get; set; }
  public string author { get; set; }
  public int year { get; set; }

  public Book (string title, string author, int year) {
    Object (
      title: title,
      author: author,
      year: year
    );
  }
}

public void main () {
  var column_view = (Gtk.ColumnView) workbench.builder.get_object ("column_view");
  var col1 = (Gtk.ColumnViewColumn) workbench.builder.get_object ("col1");
  var col2 = (Gtk.ColumnViewColumn) workbench.builder.get_object ("col2");
  var col3 = (Gtk.ColumnViewColumn) workbench.builder.get_object ("col3");

  // Create the data model
  var data_model = new ListStore (typeof (Book));
  data_model.splice (0, 0, {
    new Book ("Winds from Afar", "Kenji Miyazawa", 1972),
    new Book ("Like Water for Chocolate", "Laura Esquivel", 1989),
    new Book ("Works and Nights", "Alejandra Pizarnik", 1965),
    new Book ("Understanding Analysis", "Stephen Abbott", 2002),
    new Book ("The Timeless Way of Building", "Cristopher Alexander", 1979),
    new Book ("Bitter", "Akwaeke Emezi", 2022),
    new Book ("Saying Yes", "Griselda Gambaro", 1981),
    new Book ("Itinerary of a Dramatist", "Rodolfo Usigli", 1940),
  });

  col1.sorter = new Gtk.StringSorter (
    new Gtk.PropertyExpression (typeof (Book), null, "title")
  );
  col2.sorter = new Gtk.StringSorter (
    new Gtk.PropertyExpression (typeof (Book), null, "author")
  );
  col3.sorter = new Gtk.NumericSorter (
    new Gtk.PropertyExpression (typeof (Book), null, "year")
  );

  // View
  // Column 1
  var factory_col1 = (Gtk.SignalListItemFactory) col1.factory;
  factory_col1.setup.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    list_item.child = new Gtk.Label ("") {
      margin_top = 12,
      margin_bottom = 12,
    };
  });
  factory_col1.bind.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    var label = (Gtk.Label) list_item.child;
    var book = (Book) list_item.item;

    label.label = book.title;
  });

  // Column 2
  var factory_col2 = (Gtk.SignalListItemFactory) col2.factory;
  factory_col2.setup.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    list_item.child = new Gtk.Label ("") {
      margin_top = 12,
      margin_bottom = 12,
    };
  });
  factory_col2.bind.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    var label = (Gtk.Label) list_item.child;
    var book = (Book) list_item.item;

    label.label = book.author;
  });

  // Column 3
  var factory_col3 = (Gtk.SignalListItemFactory) col3.factory;
  factory_col3.setup.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    list_item.child = new Gtk.Label ("") {
      margin_top = 12,
      margin_bottom = 12,
    };
  });
  factory_col3.bind.connect ((item) => {
    var list_item = (Gtk.ListItem) item;
    var label = (Gtk.Label) list_item.child;
    var book = (Book) list_item.item;

    label.label = book.year.to_string ();
  });

  var sort_model = new Gtk.SortListModel (data_model, column_view.sorter);
  column_view.model = new Gtk.SingleSelection (sort_model);
}

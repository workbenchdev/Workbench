import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, GObject, Gtk

import workbench


column_view = workbench.builder.get_object("column_view")
col1 = workbench.builder.get_object("col1")
col2 = workbench.builder.get_object("col2")
col3 = workbench.builder.get_object("col3")


class Book(GObject.Object):
    def __init__(self, title, author, year):
        super().__init__()

        self._title = title
        self._author = author
        self._year = year

    @GObject.Property(type=str)
    def title(self) -> str:
        return self._title

    @GObject.Property(type=str)
    def author(self) -> str:
        return self._author

    @GObject.Property(type=int)
    def year(self) -> int:
        return self._year


books = {
    "Winds from Afar": ("Kenji Miyazawa", 1972),
    "Like Water for Chocolate": ("Laura Esquivel", 1989),
    "Works and Nights": ("Alejandra Pizarnik", 1965),
    "Understanding Analysis": ("Stephen Abbott", 2002),
    "The Timeless Way of Building": ("Cristopher Alexander", 1979),
    "Bitter": ("Akwaeke Emezi", 2022),
    "Saying Yes": ("Griselda Gambaro", 1981),
    "Itinerary of a Dramatist": ("Rodolfo Usigli", 1940),
}

# Create the data model
data_model = Gio.ListStore(item_type=Book)
for title, book_info in books.items():
    data_model.append(Book(title=title, author=book_info[0], year=book_info[1]))


def _on_factory_setup(_factory, list_item):
    label = Gtk.Label()
    label.set_margin_top(12)
    label.set_margin_bottom(12)
    list_item.set_child(label)


def _on_factory_bind(_factory, list_item, what):
    label_widget = list_item.get_child()
    book = list_item.get_item()
    label_widget.set_label(str(getattr(book, what)))


col1.get_factory().connect("setup", _on_factory_setup)
col1.get_factory().connect("bind", _on_factory_bind, "title")
col2.get_factory().connect("setup", _on_factory_setup)
col2.get_factory().connect("bind", _on_factory_bind, "author")
col3.get_factory().connect("setup", _on_factory_setup)
col3.get_factory().connect("bind", _on_factory_bind, "year")

sorter_model = Gtk.SortListModel.new(model=data_model, sorter=column_view.get_sorter())
selection = Gtk.SingleSelection.new(model=sorter_model)
column_view.set_model(model=selection)

col1_exp = Gtk.PropertyExpression.new(Book, None, "title")
col2_exp = Gtk.PropertyExpression.new(Book, None, "author")
col3_exp = Gtk.PropertyExpression.new(Book, None, "year")

col1.set_sorter(Gtk.StringSorter.new(col1_exp))
col2.set_sorter(Gtk.StringSorter.new(col2_exp))
col3.set_sorter(Gtk.NumericSorter.new(col3_exp))

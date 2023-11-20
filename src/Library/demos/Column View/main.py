from typing import cast
import gi

gi.require_version("Gtk", "4.0")
from gi.repository import GObject, Gio, Gtk
import workbench

column_view: Gtk.ColumnView = workbench.builder.get_object("column_view")
col1: Gtk.ColumnViewColumn = workbench.builder.get_object("col1")
col2: Gtk.ColumnViewColumn = workbench.builder.get_object("col2")
col3: Gtk.ColumnViewColumn = workbench.builder.get_object("col3")


# Define our class for our custom model
class Book(GObject.Object):
    _title: str
    _author: str
    _year: int

    def __init__(self, title: str, author: str, year: int):
        super().__init__()
        self._title = title
        self._author = author
        self._year = year

    @GObject.Property(type=str)
    def title(self):
        return self._title

    @title.setter
    def title(self, value):
        self._title = value

    @GObject.Property(type=str)
    def author(self):
        return self._author

    @author.setter
    def author(self, value):
        self._author = value

    @GObject.Property(type=int)
    def year(self):
        return self._year

    @year.setter
    def year(self, value):
        self._year = value


# Create the model
data_model = Gio.ListStore.new(item_type=Book)
data_model.splice(
    0,
    0,
    [
        Book(
            title="Winds from Afar",
            author="Kenji Miyazawa",
            year=1972,
        ),
        Book(
            title="Like Water for Chocolate",
            author="Laura Esquivel",
            year=1989,
        ),
        Book(
            title="Works and Nights",
            author="Alejandra Pizarnik",
            year=1965,
        ),
        Book(
            title="Understading Analysis",
            author="Stephen Abbott",
            year=2002,
        ),
        Book(
            title="The Timeless Way of Building",
            author="Cristopher Alexander",
            year=1979,
        ),
        Book(
            title="Bitter",
            author="Akwaeke Emezi",
            year=2022,
        ),
        Book(
            title="Saying Yes",
            author="Griselda Gambaro",
            year=1981,
        ),
        Book(
            title="Itinerary of a Dramatist",
            author="Rodolfo Usigli",
            year=1940,
        ),
    ],
)

col1.set_sorter(
    Gtk.StringSorter(
        expression=Gtk.PropertyExpression.new(Book, None, "title"),
    )
)

col2.set_sorter(
    Gtk.StringSorter(
        expression=Gtk.PropertyExpression.new(Book, None, "author"),
    )
)

col3.set_sorter(
    Gtk.NumericSorter(
        expression=Gtk.PropertyExpression.new(Book, None, "year"),
    )
)


def setup_column(_factory, list_item: Gtk.ListItem):
    label = Gtk.Label(margin_start=12, margin_end=12)
    list_item.set_child(label)


def bind_col1(_factory, list_item: Gtk.ListItem):
    # If you choose not to use typing / type checkers, you do not need these casts.
    label_widget = cast(Gtk.Label, list_item.get_child())
    model_item = cast(Book, list_item.get_item())
    label_widget.label = model_item.title


def bind_col2(_factory, list_item: Gtk.ListItem):
    label_widget = cast(Gtk.Label, list_item.get_child())
    model_item = cast(Book, list_item.get_item())
    label_widget.label = model_item.author


def bind_col3(_factory, list_item: Gtk.ListItem):
    label_widget = cast(Gtk.Label, list_item.get_child())
    model_item = cast(Book, list_item.get_item())
    label_widget.label = str(model_item.year)


# View
# Column 1
factory_col1 = col1.get_factory()
factory_col1.connect("setup", setup_column)
factory_col1.connect("bind", bind_col1)

# Column 2
factory_col2 = col2.get_factory()
factory_col2.connect("setup", setup_column)
factory_col2.connect("bind", bind_col2)

# Column 3
factory_col3 = col3.get_factory()
factory_col3.connect("setup", setup_column)
factory_col3.connect("bind", bind_col3)

sort_model = Gtk.SortListModel.new(
    model=data_model,
    sorter=column_view.get_sorter(),
)

column_view.model = Gtk.SingleSelection.new(
    model=sort_model,
)

use crate::workbench;
use glib::Properties;
use gtk;
use gtk::prelude::*;
use gtk::subclass::prelude::*;
use gtk::{gio, glib};
use std::cell::{Cell, OnceCell};

// Subclassing is quite tricky
// Documentation https://gtk-rs.org/gtk4-rs/stable/latest/book/g_object_subclassing.html
// This example differs to the book by putting `imp` module into the same file

mod imp {
    use super::*;

    #[derive(Default, Properties)]
    #[properties(wrapper_type = super::Book)]
    pub struct Book {
        #[property(get, set)]
        pub title: OnceCell<String>,
        #[property(get, set)]
        pub author: OnceCell<String>,
        #[property(get, set)]
        pub year: Cell<i32>,
    }

    #[glib::object_subclass]
    impl ObjectSubclass for Book {
        const NAME: &'static str = "Book";
        type ParentType = glib::Object;
        type Type = super::Book;
    }

    #[glib::derived_properties]
    impl ObjectImpl for Book {
        fn constructed(&self) {
            self.parent_constructed();
        }
    }
}

glib::wrapper! {
    pub struct Book(ObjectSubclass<imp::Book>);
}

impl Book {
    pub fn new(title: String, author: String, year: i32) -> Self {
        glib::Object::builder()
            .property("author", author)
            .property("title", title)
            .property("year", year)
            .build()
    }
}

pub fn main() {
    // Necessary for setting the sorter later
    let column_view: gtk::ColumnView = workbench::builder().object("column_view").unwrap();
    let col1: gtk::ColumnViewColumn = workbench::builder().object("col1").unwrap();
    let col2: gtk::ColumnViewColumn = workbench::builder().object("col2").unwrap();
    let col3: gtk::ColumnViewColumn = workbench::builder().object("col3").unwrap();

    let data_model: gio::ListStore = [
        Book::new(
            "Winds from Afar".to_string(),
            "Kenji Miyazawa".to_string(),
            1972,
        ),
        Book::new(
            "Like Water for Chocolate".to_string(),
            "Laura Esquivel".to_string(),
            1989,
        ),
        Book::new(
            "Works and Nights".to_string(),
            "Alejandra Pizarnik".to_string(),
            1965,
        ),
        Book::new(
            "Understading Analysis".to_string(),
            "Stephen Abbott".to_string(),
            2002,
        ),
        Book::new(
            "The Timeless Way of Building".to_string(),
            "Cristopher Alexander".to_string(),
            1979,
        ),
        Book::new("Bitter".to_string(), "Akwaeke Emezi".to_string(), 2022),
        Book::new(
            "Saying Yes".to_string(),
            "Griselda Gambaro".to_string(),
            1981,
        ),
        Book::new(
            "Itinerary of a Dramatist".to_string(),
            "Rodolfo Usigli".to_string(),
            1940,
        ),
    ]
    .into_iter()
    .collect();
    // Let's initialize gtk
    gtk::init().unwrap();

    col1.set_sorter(Some(&gtk::StringSorter::new(Some(
        gtk::PropertyExpression::new(Book::static_type(), None::<&gtk::Expression>, "title"),
    ))));

    col2.set_sorter(Some(&gtk::StringSorter::new(Some(
        gtk::PropertyExpression::new(Book::static_type(), None::<&gtk::Expression>, "author"),
    ))));

    col3.set_sorter(Some(&gtk::NumericSorter::new(Some(
        gtk::PropertyExpression::new(Book::static_type(), None::<&gtk::Expression>, "year"),
    ))));

    // View
    // Column 1
    let factory_col1 = gtk::SignalListItemFactory::new();
    factory_col1.connect_setup(move |_factory, list_item| {
        let cell = list_item.downcast_ref::<gtk::ColumnViewCell>().unwrap();
        cell.set_child(Some(
            &gtk::Label::builder()
                .margin_start(12)
                .margin_end(12)
                .build(),
        ));
    });
    factory_col1.connect_bind(move |_factory, list_item| {
        let cell = list_item
            .to_owned()
            .downcast::<gtk::ColumnViewCell>()
            .unwrap();
        let child = cell.child().unwrap();
        let label = child.downcast_ref::<gtk::Label>().unwrap();
        let model_item = cell.item().to_owned().unwrap().downcast::<Book>().unwrap();
        label.set_label(&model_item.title());
    });
    col1.set_factory(Some(&factory_col1));
    // Column 2
    let factory_col2 = gtk::SignalListItemFactory::new();
    factory_col2.connect_setup(move |_factory, list_item| {
        let cell = list_item.downcast_ref::<gtk::ColumnViewCell>().unwrap();
        cell.set_child(Some(
            &gtk::Label::builder()
                .margin_start(12)
                .margin_end(12)
                .build(),
        ));
    });
    factory_col2.connect_bind(move |_factory, list_item| {
        let cell = list_item.downcast_ref::<gtk::ColumnViewCell>().unwrap();
        let child = cell.child().unwrap();
        let label = child.downcast::<gtk::Label>().unwrap();
        let model_item = cell.item().to_owned().unwrap().downcast::<Book>().unwrap();
        label.set_label(&model_item.author());
    });
    col2.set_factory(Some(&factory_col2));
    //Column 3
    let factory_col3 = gtk::SignalListItemFactory::new();
    factory_col3.connect_setup(move |_factory, list_item| {
        let cell = list_item.downcast_ref::<gtk::ColumnViewCell>().unwrap();
        cell.set_child(Some(
            &gtk::Label::builder()
                .margin_start(12)
                .margin_end(12)
                .build(),
        ));
    });
    factory_col3.connect_bind(move |_factory, list_item| {
        let cell = list_item.downcast_ref::<gtk::ColumnViewCell>().unwrap();
        let child = cell.child().unwrap();
        let label = child.downcast::<gtk::Label>().unwrap();
        let model_item = cell.item().to_owned().unwrap().downcast::<Book>().unwrap();
        label.set_label(&model_item.year().to_string());
    });
    col3.set_factory(Some(&factory_col3));

    let sort_model = gtk::SortListModel::builder()
        .model(&data_model)
        .sorter(&column_view.sorter().unwrap())
        .build();

    column_view.set_model(Some(&gtk::SingleSelection::new(Some(sort_model))));
}

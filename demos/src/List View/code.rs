use crate::workbench;
use gtk;
use gtk::glib;
use gtk::prelude::*;
use std::cell::Cell;

pub fn main() {
    // Required by gtk::StringList::new(), otherwise crashes
    gtk::init().unwrap();

    let list_view: gtk::ListView = workbench::builder().object("list_view").unwrap();
    let add: gtk::Button = workbench::builder().object("add").unwrap();
    let remove: gtk::Button = workbench::builder().object("remove").unwrap();

    // https://doc.rust-lang.org/std/cell/struct.Cell.html
    // "A mutable memory location."
    // Makes it possible to access and change values from within signal handlers
    let item = Cell::new(1);

    // Model
    let string_model =
        gtk::StringList::new(&["Default Item 1", "Default Item 2", "Default Item 3"]);
    let model = gtk::SingleSelection::new(Some(string_model.clone()));

    // View
    string_model.connect_items_changed(move |_model, position, removed, added| {
        println!(
            "position: {}, Item removed? {}, Item added? {}",
            position,
            removed > 0,
            added > 0
        )
    });

    model.connect_selection_changed(move |model, _position, _n_items| {
        let selected_item = model.selected();
        println!(
            "Model item selected from view: {}",
            model
                .item(selected_item) // Get the item
                .unwrap() // Make sure it exists
                .downcast::<gtk::StringObject>() // It's a member of GStringList
                .unwrap() // Make sure it's really a StringObject
                .string() // Read the string value
        )
    });

    add.connect_clicked(glib::clone!(
    // Copy the reference, so it's accessible from the closure
        // https://gtk-rs.org/gtk-rs-core/stable/latest/docs/glib/macro.clone.html
    @weak model => move |_| {
        // Get the item counter value
        let value = item.get();
        // Access the underlying gtk::StringList
        let string_model = model
            .model()
            .unwrap()
            .downcast::<gtk::StringList>()
            .unwrap();
        string_model.append(format!("New item {}", item.get()).as_str());
        // Increase the counter
        item.set(value + 1);
    }));

    remove.connect_clicked(gtk::glib::clone!(
    // Copy the reference, so it's accessible from the closure
    // https://gtk-rs.org/gtk-rs-core/stable/latest/docs/glib/macro.clone.html
    @weak model => move |_| {
      let selected_item = model.selected();
      // In order to delete values we need to access the
      // actual StringList model, we've created.
      let string_model = model
        .model()
        .unwrap()
        .downcast::<gtk::StringList>()
        .unwrap();
      string_model.remove(selected_item);
    }));

    list_view.set_model(Some(&model));
}

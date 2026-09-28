use crate::workbench;
use glib::signal::Propagation;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let linkbutton: gtk::LinkButton = workbench::builder().object("linkbutton").unwrap();

    linkbutton.connect_activate_link(|button| {
        println!("About to activate {}", button.uri());
        Propagation::Proceed
    });

    linkbutton.connect_notify(Some("visited"), |_, _| {
        println!("The link has been visited");
    });
}

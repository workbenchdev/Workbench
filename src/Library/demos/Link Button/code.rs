use crate::workbench;
use gtk::prelude::*;
use gtk::traits::ButtonExt;

pub fn main() {
    let linkbutton: gtk::LinkButton = workbench::builder().object("linkbutton").unwrap();

    linkbutton.connect_clicked(move |_| {
        println!("Link has been visited");
    });

    linkbutton.connect_notify(Some("visited"), |button, _| {
        println!("About to activate {}", button.uri());
      // Return true if handling the link manually, or
        // false to let the default behavior continue
        false;
    });
}

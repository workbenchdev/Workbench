use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let checkbox_1: gtk::CheckButton = workbench::builder().object("checkbox_1").unwrap();
    checkbox_1.connect_toggled(checkbox1_clicked);
    let checkbox_2: gtk::CheckButton = workbench::builder().object("checkbox_2").unwrap();
    checkbox_2.connect_toggled(checkbox2_clicked);
}

fn checkbox1_clicked(checkbutton: &gtk::CheckButton) {
    if (checkbutton.is_active()) {
        println!("Notifications Enabled.");
    } else {
        println!("Notifications Disabled.")
    }
}

fn checkbox2_clicked(checkbutton: &gtk::CheckButton) {
    if (checkbutton.is_active()) {
        println!("Changes will be autosaved.");
    } else {
        println!("Changes will not be autosaved.")
    }
}

use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let radio_button_1: gtk::CheckButton = workbench::builder().object("radio_button_1").unwrap();
    let radio_button_2: gtk::CheckButton = workbench::builder().object("radio_button_2").unwrap();

    radio_button_1.connect_toggled(|rb| {
        if rb.is_active() {
            println!("Force Light Mode");
        }
    });

    radio_button_2.connect_toggled(|rb| {
        if rb.is_active() {
            println!("Force Dark Mode");
        }
    });
}

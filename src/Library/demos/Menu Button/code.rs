use crate::workbench;
use gtk::prelude::*;
use gtk::{Button, Switch};

pub fn main() {
    let circular_switch: Switch = workbench::builder()
        .object("circular_switch")
        .expect("Failed to get circular_switch");
    let primary_button: Button S= workbench::builder()
        .object("primary")
        .expect("Failed to get primary_button");
    let secondary_button: Button = workbench::builder()
        .object("secondary")
        .expect("Failed to get secondary_button");

    circular_switch.connect_active_notify(move |switch| {
        if switch.is_active() {
            secondary_button.add_css_class("circular");
        } else {
            secondary_button.remove_css_class("circular");
        }
    });
}

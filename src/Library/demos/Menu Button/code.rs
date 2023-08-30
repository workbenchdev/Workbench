use crate::workbench;
use gtk::prelude::*;
use gtk::{MenuButton, Switch};

pub fn main() {
    let circular_switch: Switch = workbench
      ::builder()
      .object("circular_switch")
      .unwrap();
    let secondary_button: MenuButton = workbench
      ::builder()
      .object("secondary")
      .unwrap();

    circular_switch.connect_active_notify(move |switch| {
        if switch.is_active() {
            secondary_button
              .add_css_class("circular");
        } else {
            secondary_button
              .remove_css_class("circular");
        }
    });
}

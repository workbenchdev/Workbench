use crate::workbench;
use gtk::prelude::*;
use std::collections::HashMap;

pub fn main() {
    let buttons = HashMap::from([
        ("button_no_look", "Don't look"),
        ("button_look", "Look"),
        ("button_camera", "Camera"),
        ("button_flashlight", "Flashlight"),
        ("button_console", "Console"),
    ]);

    for (id, name) in buttons.into_iter() {
        let button: gtk::ToggleButton = workbench::builder().object(id).unwrap();
        button.connect_active_notify(move |button| {
            let status = if button.is_active() { "On" } else { "Off" };
            println!("{name} {status}");
        });
    }
}

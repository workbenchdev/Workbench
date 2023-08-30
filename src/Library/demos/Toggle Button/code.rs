use crate::workbench;
use gtk::prelude::*;
use std::collections::HashMap;

pub fn main() {
    let buttons: HashMap<&str, &str> = HashMap::from([
        ("button_no_look", "Don't look"),
        ("button_look", "Look"),
        ("button_camera", "Camera"),
        ("button_flashlight", "Flashlight"),
        ("button_console", "Console"),
    ]);

    for (id, name) in buttons.iter() {
        let button: gtk::ToggleButton = workbench::builder().object(*id).unwrap();
        let cloned_name = name.to_string();
        button.connect_active_notify(move |button| {
            let status = if button.is_active() { "On" } else { "Off" };
            println!("{} {}", cloned_name, status);
        });
    }
}

use crate::workbench;
use adw::prelude::*;

pub fn main() {
    let button_ids: Vec<&str> = vec![
        "regular",
        "flat",
        "suggested",
        "destructive",
        "custom",
        "disabled",
        "circular-plus",
        "circular-minus",
        "pill",
        "osd-left",
        "osd-right",
    ];

    for id in button_ids {
        let button: gtk::Button = workbench::builder()
            .object(id)
            .expect("Button need to be present.");
        button.connect_clicked(|button| on_button_clicked(button));
    }
}

fn on_button_clicked(button: &gtk::Button) {
    println!("{} clicked", button.label().unwrap())
}

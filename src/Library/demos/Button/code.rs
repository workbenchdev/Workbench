use crate::workbench;
use adw::prelude::*;

pub fn main() {
    let button_ids = Vec::from([
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
    ]);

    for id in button_ids {
        let button: gtk::Button = workbench::builder().object(id).unwrap();
        button.connect_clicked(on_button_clicked);
    }
}

fn on_button_clicked(button: &gtk::Button) {
    println!("{} clicked", button.widget_name())
}

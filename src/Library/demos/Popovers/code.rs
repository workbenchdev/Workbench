use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let popover_ids = ["plain_popover", "popover_menu"];

    for id in popover_ids {
        let popover: gtk::Popover = workbench::builder().object(id).unwrap();

        popover.connect_closed(move |popover| {
            let popover_name = popover.widget_name();
            println!("{popover_name} closed.")
        });
    }
}

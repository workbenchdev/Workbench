use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let shortcuts_window: gtk::ShortcutsWindow =
        workbench::builder().object("shortcuts_window").unwrap();
    let button: gtk::Button = workbench::builder().object("button").unwrap();

    button.connect_clicked(move |_| shortcuts_window.present());
}

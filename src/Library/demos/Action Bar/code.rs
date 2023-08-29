use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let action_bar: gtk::ActionBar = workbench::builder().object("action_bar").unwrap();
    let button: gtk::ToggleButton = workbench::builder().object("button").unwrap();
    let start_widget: gtk::Button = workbench::builder().object("start_widget").unwrap();
    let end_widget: gtk::Button = workbench::builder().object("end_widget").unwrap();

    button.connect_clicked(move |button| {
        action_bar.set_revealed(!button.is_active());
    });

    start_widget.connect_clicked(|_| {
        println!("Start Widget");
    });

    end_widget.connect_clicked(|_| {
        println!("End Widget");
    });
}

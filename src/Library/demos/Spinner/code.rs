use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    let spinner: gtk::Spinner = workbench::builder().object("spinner").unwrap();

    button.connect_clicked(move |button| {
        if spinner.is_spinning() == true {
            button.set_icon_name("media-playback-start");
            spinner.set_spinning(false);
        } else {
            button.set_icon_name("media-playback-pause");
            spinner.set_spinning(true);
        }
    });
}

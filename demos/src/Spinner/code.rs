use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    let spinner: gtk::Spinner = workbench::builder().object("spinner").unwrap();

    button.connect_clicked(move |button| {
        if spinner.is_visible() {
            button.set_icon_name("media-playback-start");
            spinner.set_visible(false);
        } else {
            button.set_icon_name("media-playback-stop");
            spinner.set_visible(true);
        }
    });
}

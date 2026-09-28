use crate::workbench;
use adw;
use gtk;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let button_increase: gtk::Button = workbench::builder().object("button_increase").unwrap();
    let button_decrease: gtk::Button = workbench::builder().object("button_decrease").unwrap();
    let clamp: adw::Clamp = workbench::builder().object("clamp").unwrap();

    button_increase.connect_clicked(glib::clone!(@weak clamp => move |_| {
        let current_size = clamp.maximum_size();
        let current_threshold = clamp.tightening_threshold();

        clamp.set_maximum_size(current_size + 300);
        clamp.set_tightening_threshold(current_threshold + 200);

        if clamp.tightening_threshold() == 1000 {
          println!("Maximum size reached");
        }
    }));

    button_decrease.connect_clicked(glib::clone!(@weak clamp => move |_| {
        let current_size = clamp.maximum_size();
        let current_threshold = clamp.tightening_threshold();

        clamp.set_maximum_size(current_size - 300);
        clamp.set_tightening_threshold(current_threshold - 200);

        if clamp.tightening_threshold() == 0 {
          println!("Minimum size reached");
        }
    }));
}

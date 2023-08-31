use crate::workbench;
use glib::clone;
use gtk::glib;

pub fn main() {
    let switch_on: gtk::Switch = workbench::builder().object("switch_on").unwrap();
    let label_on: gtk::Label = workbench::builder().object("label_on").unwrap();

    let switch_off: gtk::Switch = workbench::builder().object("switch_off").unwrap();
    let label_off: gtk::Label = workbench::builder().object("label_off").unwrap();

    switch_on.connect_active_notify(clone!(@weak switch_off => move |switch_on| {
        label_on.set_label(if switch_on.is_active() { "On" } else { "Off" });
        switch_off.set_active(!switch_on.is_active());
    }));

    switch_off.connect_active_notify(move |switch_off| {
        label_off.set_label(if switch_off.is_active() { "On" } else { "Off" });
        switch_on.set_active(!switch_off.is_active());
    });
}

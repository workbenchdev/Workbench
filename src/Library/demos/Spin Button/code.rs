use crate::workbench;
use glib::clone;
use gtk::glib;
use gtk::prelude::*;
use gtk::SpinType::StepForward;

pub fn main() {
    let hours: gtk::SpinButton = workbench::builder().object("hours").unwrap();
    let minutes: gtk::SpinButton = workbench::builder().object("minutes").unwrap();

    fn tellTime(hours: &str, minutes: &str) {
        println!("The time selected is {hours}:{minutes}");
    }

    hours.connect_value_changed(clone!(@weak minutes => move |hours| {
        tellTime(&hours.text(), &minutes.text());
    }));

    hours.connect_output(move |hours| {
        let value = hours.value();
        let text = format!("{:02}", value);
        hours.set_text(&text);
        return true.into();
    });

    minutes.connect_output(move |minutes| {
        let value = minutes.value();
        let text = format!("{:02}", value);
        minutes.set_text(&text);
        return true.into();
    });

    minutes.connect_wrapped(clone!(@weak hours => move |minutes| {
      let spin_type: gtk:: SpinType = StepForward;
      hours.spin(spin_type, 1.0);
    }));

    minutes.connect_value_changed(move |minutes| {
        tellTime(&hours.text(), &minutes.text());
    });
}

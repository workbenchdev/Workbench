use crate::workbench;
use glib::clone;
use gtk::glib;
use gtk::prelude::*;
use gtk::SpinType;

pub fn main() {
    let hours: gtk::SpinButton = workbench::builder().object("hours").unwrap();
    let minutes: gtk::SpinButton = workbench::builder().object("minutes").unwrap();
    hours.set_text("00");
    minutes.set_text("00");


    hours.connect_value_changed(clone!(@weak minutes => move |hours| {
        tell_time(&hours.text(), &minutes.text());
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

    minutes.connect_wrapped(clone!(@weak hours => move |_| {
      hours.spin(SpinType::StepForward, 1.0);
    }));

    minutes.connect_value_changed(move |minutes| {
        tell_time(&hours.text(), &minutes.text());
    });
}

fn tell_time(hours: &str, minutes: &str) {
  println!("The time selected is {hours}:{minutes}");
}

use crate::workbench;
use glib::clone;
use gtk::glib;

pub fn main() {
    let calendar: gtk::Calendar = workbench::builder().object("calendar").unwrap();

    calendar.connect_day_notify(clone!(@weak calendar => move |_| {
        println!("{}", calendar.date().format("%e").unwrap());
    }));

    calendar.connect_month_notify(clone!(@weak calendar => move |_| {
        println!("{}", calendar.date().format("%B").unwrap());
    }));

    calendar.connect_year_notify(clone!(@weak calendar => move |_| {
        println!("{}", calendar.date().format("%Y").unwrap());
    }));

    calendar.connect_day_selected(clone!(@weak calendar => move |_| {
        println!("{}", calendar.date().format_iso8601().unwrap());
    }));

    calendar.mark_day(15);
}


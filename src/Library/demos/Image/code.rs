use crate::workbench;
use gtk::gio;
use gtk::prelude::*;

pub fn main() {
    let path = gio::File::for_uri(&workbench::resolve("workbench.png"))
        .path()
        .unwrap()
        .display()
        .to_string();

    let tmp1: gtk::Image = workbench::builder().object("icon1").unwrap();
    tmp1.set_file(Some(&path));
    let tmp2: gtk::Image = workbench::builder().object("icon2").unwrap();
    tmp2.set_file(Some(&path));
    let tmp3: gtk::Image = workbench::builder().object("icon3").unwrap();
    tmp3.set_file(Some(&path));
}

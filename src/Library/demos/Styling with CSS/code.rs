use crate::workbench;
use gtk::prelude::*;

pub fn main() {
    let basic_label: gtk::Label = workbench::builder().object("basic_label").unwrap();
    basic_label.add_css_class("css_text");
}


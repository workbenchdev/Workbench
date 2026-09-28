use crate::workbench;
use adw::prelude::*;
use std::str;

pub fn main() {
    let flowbox: gtk::FlowBox = workbench::builder().object("flowbox").unwrap();
    for code in 128513..=128591 {
        let tmp = char::from_u32(code).unwrap();
        add_emoji(&flowbox, &tmp.to_string());
    }
    flowbox.connect_child_activated(|_, item| {
        // FlowBoxChild -> AdwBin -> Label
        let emoji = item
            .child()
            .unwrap()
            .downcast::<adw::Bin>()
            .unwrap()
            .child()
            .unwrap()
            .downcast::<gtk::Label>()
            .unwrap()
            .label();
        let emoji = emoji.chars().next().unwrap();
        println!("Unicode:{:X}", emoji as u32);
    });
}

pub fn add_emoji(flowbox: &gtk::FlowBox, unicode: &str) {
    let label = gtk::Label::builder()
        .vexpand(true)
        .hexpand(true)
        .label(unicode)
        .css_classes(["emoji"])
        .build();
    let item = adw::Bin::builder()
        .child(&label)
        .width_request(100)
        .height_request(100)
        .css_classes(["card"])
        .build();
    flowbox.append(&item);
}

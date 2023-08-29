use crate::workbench;
use adw::prelude::*;

pub fn main() {
    let breakpoint: adw::Breakpoint = workbench::builder().object("breakpoint").unwrap();

    breakpoint.connect_apply(|_| {
        println!("Breakpoint Applied");
    });

    breakpoint.connect_unapply(|breakpoint| {
        println!("Breakpoint Unapplied");
    });
}

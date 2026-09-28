use crate::workbench;

pub fn main() {
    let breakpoint: adw::Breakpoint = workbench::builder().object("breakpoint").unwrap();

    breakpoint.connect_apply(|_| {
        println!("Breakpoint Applied");
    });

    breakpoint.connect_unapply(|_| {
        println!("Breakpoint Unapplied");
    });
}

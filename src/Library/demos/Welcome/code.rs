use crate::workbench;
use adw::prelude::*;

pub fn main() {
    let subtitle_box: gtk::Box = workbench::builder().object("subtitle").unwrap();

    let button = gtk::Button::builder()
        .label("Press me")
        .margin_top(6)
        .css_classes(["suggested-action"])
        .build();

    button.connect_clicked(|_| greet());
    subtitle_box.append(&button);

    println!("Welcome to Workbench!");
}

fn greet() {
    let dialog = adw::MessageDialog::builder()
        .body("Hello World!")
        .transient_for(workbench::window())
        .build();

    dialog.add_responses(&[("ok", "Cancel")]);
    dialog.connect_response(None, |dialog, response| {
        println!("{:?}", response);
        dialog.close();
    });

    dialog.present();
}

use crate::workbench;
use adw::prelude::*;

pub fn main() {
    let banner: adw::Banner = workbench::builder()
        .object("banner")
        .unwrap();
    let overlay: adw::ToastOverlay = workbench::builder()
        .object("overlay")
        .unwrap();
    let button_show_banner: gtk::Button = workbench::builder()
        .object("button_show_banner")
        .unwrap();

    banner.connect_button_clicked(move |banner| {
        alert(banner, &overlay);
        banner.set_revealed(false);
    });

    button_show_banner.connect_clicked(move |_| banner.set_revealed(true));
}

pub fn alert(_banner: &adw::Banner, overlay: &adw::ToastOverlay) {
    let toast = adw::Toast::builder()
        .title("Troubleshoot successful!")
        .timeout(3)
        .build();
    overlay.add_toast(toast);
}

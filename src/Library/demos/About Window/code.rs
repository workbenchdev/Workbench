use adw::prelude::*;

use crate::workbench;

pub fn main() {
    let button: gtk::Button = workbench::builder()
        .object("button")
        .expect("Button need to be present.");
    button.connect_clicked(|_| on_button_clicked());
}

fn on_button_clicked() {
    let dialog = adw::AboutWindow::builder()
        .transient_for(workbench::window())
        .application_icon("application-x-executable")
        .application_name("Typeset")
        .developer_name("Angela Avery")
        .version("1.2.3")
        .comments("Typeset is an app that doesn’t exist and is used as an example content for About Window.")
        .website("https://example.org")
        .issue_url("https://example.org")
        .support_url("https://example.org")
        .copyright("© 2023 Angela Avery")
        .license_type(gtk::License::Gpl30Only)
        .developers(["Angela Avery <angela@example.org>"])
        .artists(["GNOME Design Team"])
        .translator_credits("translator-credits")
        .build();

    dialog.add_link(
        "Documentation",
        "https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/class.AboutWindow.html",
    );

    dialog.add_legal_section(
        "Fonts",
        None,
        gtk::License::Custom,
        Some("This application uses font data from <a href='https://example.org'>somewhere</a>."),
    );

    dialog.add_acknowledgement_section(Some("Special thanks to"), &["My cat"]);

    dialog.present();
}

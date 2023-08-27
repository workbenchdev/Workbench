use std::error::Error;

use crate::workbench;
use ashpd::desktop::account::UserInformation;
use glib::MainContext;
use gtk::prelude::*;
use gtk::{gdk, gio, glib};

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    button.connect_clicked(|_| {
        MainContext::default().spawn_local(async {
            if let Err(err) = request_user_information().await {
                eprint!("Could not request user information: {err}")
            }
        });
    });
}

async fn request_user_information() -> Result<(), Box<dyn Error>> {
    let entry: adw::EntryRow = workbench::builder().object("entry").unwrap();

    let response = UserInformation::request()
        .reason(entry.text().as_str())
        .send()
        .await?
        .response()?;

    let file = gio::File::for_uri(response.image().as_str());
    let texture = gdk::Texture::from_file(&file)?;

    let username: gtk::Label = workbench::builder().object("username").unwrap();
    let display: gtk::Label = workbench::builder().object("name").unwrap();
    let avatar: adw::Avatar = workbench::builder().object("avatar").unwrap();
    let revealer: gtk::Revealer = workbench::builder().object("revealer").unwrap();

    username.set_label(response.id());
    display.set_label(response.name());
    avatar.set_custom_image(Some(&texture));
    revealer.set_reveal_child(true);

    println!("Information retrieved");
    Ok(())
}


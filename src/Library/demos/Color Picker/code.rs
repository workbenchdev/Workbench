use crate::workbench;
use ashpd::desktop::screenshot::Color;
use ashpd::WindowIdentifier;
use glib::MainContext;
use gtk::prelude::*;
use gtk::{gdk, glib};

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    button.connect_clicked(|_| {
        MainContext::default().spawn_local(async {
            if let Err(err) = pick_color().await {
                eprintln!("Could not pick color: {err}")
            }
        });
    });
}

async fn pick_color() -> ashpd::Result<()> {
    let identifier = WindowIdentifier::from_native(&workbench::window().native().unwrap()).await;
    let result = Color::request()
        .identifier(identifier)
        .send()
        .await?
        .response()?;
    let color = gdk::RGBA::from(result);
    println!("Selected color is {color}");
    Ok(())
}

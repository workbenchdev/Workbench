use std::error::Error;

use crate::workbench;
use ashpd::desktop::wallpaper::SetOn;
use ashpd::desktop::wallpaper::WallpaperRequest;
use glib::MainContext;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let button: gtk::Button = workbench::builder().object("button").unwrap();
    button.connect_clicked(|_| {
        MainContext::default().spawn_local(async {
            if let Err(err) = set_wallpaper().await {
                eprintln!("Could not set wallpaper: {err}")
            }
        });
    });
}

async fn set_wallpaper() -> Result<(), Box<dyn Error>> {
    let uri = url::Url::parse(&workbench::resolve("./wallpaper.png"))?;
    let request = WallpaperRequest::default()
        .set_on(SetOn::Both)
        .show_preview(true)
        .build_uri(&uri)
        .await?;

    if let Err(err) = request.response() {
        eprintln!("Could not set wallpaper: {err}.");
    } else {
        println!("Success");
    }
    Ok(())
}


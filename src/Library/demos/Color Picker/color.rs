use crate::workbench;
use ashpd::desktop::screenshot::Color;
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
    let color = Color::request().send().await?.response()?;

    let color = gdk::RGBA::new(
        color.red() as f32,
        color.green() as f32,
        color.blue() as f32,
        1.0,
    );
    println!("Selected color is {color}");
    Ok(())
}


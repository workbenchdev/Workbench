use crate::workbench;
use adw::prelude::*;
use gtk::{gdk, gio, glib};

pub fn main() {
    gtk::init().unwrap();

    let button: gtk::Button = workbench::builder().object("button").unwrap();

    let mut filter = gtk::FileFilter::new();
    filter.set_name(Some("Images"));
    filter.add_pixbuf_formats();

    let dialog = gtk::FileDialog::builder()
        .title("Select an Avatar")
        .modal(true)
        .default_filter(&filter)
        .build();

    button.connect_clicked(move |_| {
        dialog.open(
            Some(workbench::window()),
            None::<&gio::Cancellable>,
            on_clicked,
        )
    });
}

fn on_clicked(result: Result<gio::File, glib::Error>) {
    match result {
        Ok(file) => {
            let avatar_image: adw::Avatar = workbench::builder().object("avatar_image").unwrap();
            let texture = gdk::Texture::from_file(&file).unwrap();
            avatar_image.set_custom_image(Some(&texture));
        }
        Err(err) => eprintln!("Could not load avatar image: {err}."),
    }
}

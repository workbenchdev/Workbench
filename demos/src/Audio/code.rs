use crate::workbench;
use gtk::prelude::*;
use gtk::{gio, glib};
use std::collections::HashMap;

pub fn main() {
    // Otherwise the MediaFile crate crashes
    gtk::init().unwrap();

    let controls: gtk::MediaControls = workbench::builder().object("controls").unwrap();

    let audio_files = HashMap::from([
        ("sound", "./Dog.ogg"),
        ("music", "./Chopin-nocturne-op-9-no-2.ogg"),
    ]);

    for (button_name, file_name) in audio_files {
        let button: gtk::Button = workbench::builder()
            .object(format!("button_{}", button_name))
            .unwrap();

        button.connect_clicked(glib::clone!(
          @weak controls => move |_| {
            if let Some(media_stream) = controls.media_stream() {
                media_stream.set_playing(false);
            }

            controls.set_media_stream(Some(&gtk::MediaFile::for_file(
              &gio::File::for_uri(&workbench::resolve(file_name))
            )));
            // Media stream can be missing
            if let Some(media_stream) = controls.media_stream() {
                media_stream.set_playing(true);
            }
          }
        ));
    }
}

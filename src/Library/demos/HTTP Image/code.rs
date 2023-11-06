// NOTE: soup is used here to stay consistent with the demos in the other languages
// For real applications, you probably want to use a different HTTP library in Rust

use crate::workbench;
use glib::source::Priority;
use gtk::{gdk, glib};
use soup::prelude::*;

pub fn main() {
    glib::spawn_future_local(async_main());
}

async fn async_main() {
    // https://picsum.photos/
    let image_url = "https://picsum.photos/800";
    let image_bytes = get_image_bytes(image_url).await;
    let texture = gdk::Texture::from_bytes(&image_bytes).unwrap();
    let picture: gtk::Picture = workbench::builder().object("picture").unwrap();
    picture.set_paintable(Some(&texture));
}

async fn get_image_bytes(url: &str) -> glib::Bytes {
    let session = soup::Session::new();
    let message = soup::Message::new("GET", url).unwrap();
    let image_bytes = session
        .send_and_read_future(&message, Priority::DEFAULT)
        .await
        .unwrap();

    if message.status_code() != 200 {
        panic!(
            "Got {}, {:?}",
            message.status_code(),
            message.reason_phrase()
        );
    }
    image_bytes
}

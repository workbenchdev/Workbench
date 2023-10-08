// NOTE: soup is used here to stay consistent with the demos in the other languages
// For real applications, you probably want to use a different HTTP library in Rust

use crate::workbench;
use gdk_pixbuf::Pixbuf;
use gio::InputStream;
use glib::source::Priority;
use gtk::{gdk, gdk_pixbuf, gio, glib};
use soup::prelude::*;

pub fn main() {
    glib::MainContext::default().spawn_local(async_main());
}

async fn async_main() {
    // https://picsum.photos/
    let image_url = "https://picsum.photos/800";
    let input_stream = get_input_stream(image_url).await;
    let pixbuf = Pixbuf::from_stream_future(&input_stream).await.unwrap();
    let texture = gdk::Texture::for_pixbuf(&pixbuf);
    let picture: gtk::Picture = workbench::builder().object("picture").unwrap();
    picture.set_paintable(Some(&texture));
}

async fn get_input_stream(url: &str) -> InputStream {
    let session = soup::Session::new();
    let message = soup::Message::new("GET", url).unwrap();
    let input_stream = session
        .send_future(&message, Priority::DEFAULT)
        .await
        .unwrap();

    if message.status_code() != 200 {
        panic!(
            "Got {}, {:?}",
            message.status_code(),
            message.reason_phrase()
        );
    }

    input_stream
}


use crate::workbench;
use glib::clone;
use gtk::gio;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    gtk::init().unwrap();

    let video: gtk::Video = workbench::builder().object("video").unwrap();
    video.set_file(Some(&gio::File::for_uri(&workbench::resolve(
        "./workbench-video.mp4",
    ))));

    let click_gesture = gtk::GestureClick::new();
    click_gesture.connect_pressed(clone!(@weak video => move |_, _, _, _| {
        let media_stream = video.media_stream().unwrap();
        if media_stream.is_playing() {
            media_stream.pause();
        }
        else {
            media_stream.play();
        }
    }));
    video.add_controller(click_gesture);
}

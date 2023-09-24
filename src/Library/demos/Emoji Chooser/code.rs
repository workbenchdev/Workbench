use crate::workbench;
use gtk::prelude::*;
use gtk::EmojiChooser;

pub fn main() {
    let emoji_chooser: gtk::EmojiChooser = workbench::builder().object("emoji_chooser").unwrap();
    let button: gtk::MenuButton = workbench::builder().object("button").unwrap();

    emoji_chooser.connect_emoji_picked(move |_, emoji| {
        button.set_label(emoji);
    });
}

fn tell_time(hours: &str, minutes: &str) {
    println!("The time selected is {hours}:{minutes}");
}

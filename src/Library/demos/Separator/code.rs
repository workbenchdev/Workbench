use crate::workbench;
use gtk::gio;

pub fn main() {
    let picture_one: gtk::Picture = workbench::builder().object("picture_one").unwrap();
    let picture_two: gtk::Picture = workbench::builder().object("picture_two").unwrap();

    let file = gio::File::for_uri(&workbench::resolve("./image.png"));

    picture_one.set_file(Some(&file));
    picture_two.set_file(Some(&file));
}

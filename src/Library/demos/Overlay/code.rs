use crate::workbench;
use gtk::gio;

pub fn main() {
    let file = gio::File::for_uri(workbench::resolve("./image.png").as_str());
    let picture: gtk::Picture = workbench::builder().object("picture").unwrap();
    picture.set_file(Some(&file));
}

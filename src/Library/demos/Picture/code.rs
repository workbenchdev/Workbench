use crate::workbench;
use gtk::gio;

pub fn main() {
    let picture_fill: gtk::Picture = workbench::builder().object("picture_fill").unwrap();
    let picture_contain: gtk::Picture = workbench::builder().object("picture_contain").unwrap();
    let picture_cover: gtk::Picture = workbench::builder().object("picture_cover").unwrap();
    let picture_scale_down: gtk::Picture =
        workbench::builder().object("picture_scale_down").unwrap();
    let file = gio::File::for_uri(&workbench::resolve("./keys.png"));
    picture_fill.set_file(Some(&file));
    picture_contain.set_file(Some(&file));
    picture_cover.set_file(Some(&file));
    picture_scale_down.set_file(Some(&file));
}

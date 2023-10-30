use crate::workbench;

pub fn main() {
    let status_page: adw::StatusPage = workbench::builder().object("status_page").unwrap();
    let child: gtk::Box = workbench::builder().object("child").unwrap();

    status_page.set_child(Some(&child));
}

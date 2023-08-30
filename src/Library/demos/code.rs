use crate::workbench;
use adw::prelude::*;
use std::cell::RefCell;
use std::rc::Rc;

pub fn main() {
    let overlay_split_view: Rc<RefCell<adw::OverlaySplitView>> = Rc::new(RefCell::new(
        workbench::builder().object("split_view").unwrap(),
    ));

    let start_toggle: gtk::ToggleButton = workbench::builder().object("start_toggle").unwrap();
    let end_toggle: gtk::ToggleButton = workbench::builder().object("end_toggle").unwrap();

    let overlay_split_view_clone = overlay_split_view.clone();
    start_toggle.connect_toggled(move |_| {
        overlay_split_view_clone
            .borrow_mut()
            .set_sidebar_position(gtk::PackType::Start);
    });

    let overlay_split_view_clone = overlay_split_view.clone();
    end_toggle.connect_toggled(move |_| {
        overlay_split_view_clone
            .borrow_mut()
            .set_sidebar_position(gtk::PackType::End);
    });
}

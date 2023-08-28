use crate::workbench;
use adw::prelude::*;

use crate::glib::clone;
use gtk::glib;
use std::cell::Cell;
use std::rc::Rc;

pub fn main() {
    let tab_view: adw::TabView = workbench::builder()
        .object("tab_view")
        .unwrap();
    let button_new_tab: gtk::Button = workbench::builder()
        .object("button_new_tab")
        .unwrap();
    let overview: adw::TabOverview = workbench::builder()
        .object("overview")
        .unwrap();
    let button_overview: gtk::Button = workbench::builder()
        .object("button_overview")
        .unwrap();
    let tab_count = Rc::new(Cell::new(1));

    button_new_tab.connect_clicked(clone!(@weak tab_view, @weak tab_count => move |_| {
        add_page(&tab_view, &tab_count);
    }));
    overview.connect_create_tab(move |_| add_page(&tab_view, &tab_count));
    button_overview.connect_clicked(move |_| overview.set_open(true));
}

fn add_page(tab_view: &adw::TabView, tab_count: &Rc<Cell<i32>>) -> adw::TabPage {
    let title = format!("Tab {}", tab_count.get());
    let page = create_page(&title);
    let tab_page = tab_view.append(&page);

    tab_page.set_title(&title);
    tab_page.set_live_thumbnail(true);

    tab_count.set(tab_count.get() + 1);
    tab_page
}

fn create_page(title: &str) -> adw::StatusPage {
    adw::StatusPage::builder()
        .title(title)
        .vexpand(true)
        .build()
}

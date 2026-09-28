use crate::workbench;
use adw::prelude::*;

use crate::glib::clone;
use gtk::glib;

pub fn main() {
    let nav_view: adw::NavigationView = workbench::builder().object("nav_view").unwrap();
    let nav_pageone: adw::NavigationPage = workbench::builder().object("nav_pageone").unwrap();
    let next_button: gtk::Button = workbench::builder().object("next_button").unwrap();
    let previous_button: gtk::Button = workbench::builder().object("previous_button").unwrap();
    let nav_pagetwo: adw::NavigationPage = workbench::builder().object("nav_pagetwo").unwrap();
    let nav_pagethree: adw::NavigationPage = workbench::builder().object("nav_pagethree").unwrap();
    let nav_pagefour: adw::NavigationPage = workbench::builder().object("nav_pagefour").unwrap();
    let title: gtk::Label = workbench::builder().object("title").unwrap();

    next_button.connect_clicked(
        clone!(@weak nav_view, @weak nav_pageone, @weak nav_pagefour => move |_| {
            let current_page = nav_view.visible_page().unwrap();
            if current_page == nav_pageone {
                nav_view.push(&nav_pagetwo);
            } else if current_page == nav_pagetwo {
                nav_view.push(&nav_pagethree);
            } else if current_page == nav_pagethree {
                nav_view.push(&nav_pagefour);
            }
        }),
    );

    previous_button.connect_clicked(clone!(@weak nav_view => move |_| nav_view.pop();));

    nav_view.connect_visible_page_notify(move |nav_view| {
        let current_page = nav_view.visible_page().unwrap();
        previous_button.set_sensitive(current_page != nav_pageone);
        next_button.set_sensitive(current_page != nav_pagefour);
        title.set_label(&current_page.title());
    });
}

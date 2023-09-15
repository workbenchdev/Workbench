use crate::workbench;
use adw::prelude::*;

use crate::glib::clone;
use std::cell::Cell;
use std::rc::Rc;

pub fn main() {
    let notifications_page: adw::ViewStackPage = workbench::builder().object("page3").unwrap();
    let notification_list: gtk::ListBox = workbench::builder().object("notification_list").unwrap();

    let notification_count = Rc::new(Cell::new(5));
    notifications_page.set_badge_number(notification_count.get());

    for _ in 0..notification_count.get() {
        let notification_row = adw::ActionRow::builder()
            .title("Notification")
            .selectable(false)
            .build();

        let button = gtk::Button::builder()
            .halign(gtk::Align::Center)
            .valign(gtk::Align::Center)
            .margin_top(10)
            .margin_bottom(10)
            .icon_name("check-plain-symbolic")
            .build();

        button.connect_clicked(clone!(
            @strong notification_count, @strong notifications_page,
            @strong notification_list, @strong notification_row => move |_| {
                notification_count.set(notification_count.get() - 1);
                notifications_page.set_badge_number(notification_count.get());
                notification_list.remove(&notification_row);

                if notifications_page.badge_number() == 0 {
                    notifications_page.set_needs_attention(false);
                }
            }
        ));

        notification_row.add_suffix(&button);

        notification_list.append(&notification_row);
    }
}

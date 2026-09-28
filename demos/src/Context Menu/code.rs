use crate::workbench;
use gtk::gdk;
use gtk::gio;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let box_menu_parent: gtk::Box = workbench::builder().object("box_menu_parent").unwrap();
    let label_emoji: gtk::Label = workbench::builder().object("label_emoji").unwrap();
    let gesture_click: gtk::GestureClick = workbench::builder().object("gesture_click").unwrap();
    let popover_menu: gtk::PopoverMenu = workbench::builder().object("popover_menu").unwrap();

    gesture_click.connect_pressed(move |_gesture, _n_press, x, y| {
        let position = gdk::Rectangle::new(x as i32, y as i32, 0, 0);
        popover_menu.set_pointing_to(Some(&position));
        popover_menu.popup();
    });

    let mood_group = gio::SimpleActionGroup::new();
    box_menu_parent.insert_action_group("mood", Some(&mood_group));

    let emoji_action = gio::SimpleAction::new("emoji", Some(&glib::VariantType::new("s").unwrap()));

    emoji_action.connect_activate(
        glib::clone!(@weak label_emoji => move |_action, parameter| {
            label_emoji.set_label(parameter.unwrap().get::<String>().unwrap().as_str());
        }),
    );
    mood_group.add_action(&emoji_action);
}

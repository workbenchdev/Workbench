use crate::workbench;
use gdk::Key;
use glib::clone;
use gtk::accessible::State;
use gtk::prelude::*;
use gtk::StateFlags;
use gtk::{gdk, glib};

pub fn main() {
    gtk::init().unwrap();
    let button: adw::Bin = workbench::builder().object("custom_button").unwrap();

    let clicker = gtk::GestureClick::new();
    clicker.connect_released(clone!(@weak button => move |_, _, _, _| toggle_button(&button)));
    button.add_controller(clicker);

    let key_controller = gtk::EventControllerKey::new();
    key_controller.connect_key_released(clone!(@weak button => move |_, keyval, _, _| {
        let keyvals = [
            Key::space,
            Key::KP_Space,
            Key::Return,
            Key::ISO_Enter,
            Key::KP_Enter,
        ];
        if keyvals.contains(&keyval) {
            toggle_button(&button);
        };
    }));
}

fn toggle_button(button: &adw::Bin) {
    let checked = button.state_flags().contains(StateFlags::CHECKED);

    // Invert the current state
    let checked = !checked;
    let pressed = if checked {
        gtk::AccessibleTristate::True
    } else {
        gtk::AccessibleTristate::False
    };

    // Update the accessible state
    button.update_state(&[State::Pressed(pressed)]);

    // Update the widget state (i.e. CSS pseudo-class)
    if checked {
        button.set_state_flags(StateFlags::CHECKED, false);
    } else {
        button.unset_state_flags(StateFlags::CHECKED);
    }

    // Grab the focus
    button.grab_focus();
}


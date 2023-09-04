use crate::workbench;
use glib::clone;
use gtk::glib;
use gtk::prelude::*;
use rand::Rng;
use std::cell::Cell;
use std::rc::Rc;

pub fn main() {
    let button_ids = [
        "button00", "button01", "button02", "button10", "button11", "button12", "button20",
        "button21", "button22",
    ];

    let step = Rc::new(Cell::new(1));
    for id in button_ids {
        let button: gtk::Button = workbench::builder().object(id).unwrap();
        button.connect_clicked(clone!(@strong step => move |button| {
            onClicked(button, step.clone())
        }));
    }
}

pub fn onClicked(button: &gtk::Button, step: Rc<Cell<i32>>) {
    // Check access for user action
    let image: gtk::Image = button.child().unwrap().downcast().unwrap();
    if image.icon_name().is_some() {
        return;
    }
    // Store and show user action
    image.set_icon_name(Some("cross-large-symbolic"));
    // Calculate pc reaction
    let mut pc_is_thinking = true;
    while pc_is_thinking {
        let random_row: f64 = rand::thread_rng().gen();
        let random_col: f64 = rand::thread_rng().gen();
        let pc_is_thinking_row = (random_row * 3.0).floor().to_string();
        let pc_is_thinking_col = (random_col * 3.0).floor().to_string();
        let temp: gtk::Button = workbench::builder()
            .object(format!("button{pc_is_thinking_row}{pc_is_thinking_col}"))
            .unwrap();
        let temp_image: gtk::Image = temp.child().unwrap().downcast().unwrap();
        if temp_image.icon_name().is_none() {
            // Store and show pc reaction
            temp_image.set_icon_name(Some("circle-outline-thick-symbolic"));
            pc_is_thinking = false;
            step.set(step.get() + 2);
        }
        if step.get() >= 8 {
            pc_is_thinking = false;
        }
    }
}

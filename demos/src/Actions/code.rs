use crate::workbench;
use gtk::gio;
use gtk::prelude::*;

pub fn main() {
    let demo: adw::StatusPage = workbench::builder().object("demo").unwrap();
    let demo_group = gio::SimpleActionGroup::new();
    demo.insert_action_group("demo", Some(&demo_group));

    // Action with no state or parameters
    let simple_action = gio::SimpleAction::new("simple", None);

    simple_action.connect_activate(|action, _| {
        println!("{} action activated", action.name());
    });
    demo_group.add_action(&simple_action);

    // Action with parameter
    let bookmarks_action =
        gio::SimpleAction::new("open-bookmarks", Some(&str::static_variant_type()));
    bookmarks_action.connect_activate(|action, parameter| {
        println!("{} activated with {}", action.name(), parameter.unwrap());
    });
    demo_group.add_action(&bookmarks_action);

    // Action with state
    let toggle_action = gio::SimpleAction::new_stateful("toggle", None, &false.to_variant());
    toggle_action.connect_notify(Some("state"), |action, _| {
        println!("{} set to {}", action.name(), action.state().unwrap());
    });
    demo_group.add_action(&toggle_action);

    // Action with state and parameter
    let scale_action = gio::SimpleAction::new_stateful(
        "scale",
        Some(&str::static_variant_type()),
        &"100%".to_variant(),
    );
    scale_action.connect_notify(Some("state"), |action, _| {
        println!("{} set to {}", action.name(), action.state().unwrap());
    });
    demo_group.add_action(&scale_action);

    // Property action
    let text: gtk::Label = workbench::builder().object("text").unwrap();
    let alignment_action = gio::PropertyAction::new("text-align", &text, "halign");
    demo_group.add_action(&alignment_action);
}

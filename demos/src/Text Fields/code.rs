use crate::workbench;
use adw::prelude::*;
use gtk::glib;

pub fn main() {
    let entry: gtk::Entry = workbench::builder().object("entry").unwrap();
    let entry_placeholder: gtk::Entry = workbench::builder().object("entry_placeholder").unwrap();
    let entry_icon: gtk::Entry = workbench::builder().object("entry_icon").unwrap();
    let entry_progress: gtk::Entry = workbench::builder().object("entry_progress").unwrap();

    entry.connect_activate(|triggered_entry| {
        println!("Regular Entry: {} entered", triggered_entry.text());
    });

    entry_placeholder.connect_activate(|triggered_entry| {
        println!("Placeholder Entry: {} entered", triggered_entry.text());
    });

    entry_icon.connect_activate(|triggered_entry| {
        println!("Icon Entry: {} entered", triggered_entry.text());
    });

    entry_icon.connect_icon_press(|_, _| println!("Icon Pressed!"));

    entry_icon.connect_icon_release(|_, _| println!("Icon Released!"));

    entry_progress.connect_activate(|triggered_entry| {
        println!("Progress Bar Entry: {} entered", triggered_entry.text());
    });
    // GTK init is required by adw::PropertyAnimationTarget::new
    gtk::init().unwrap();

    let target = adw::PropertyAnimationTarget::new(&entry_progress, "progress-fraction");

    let animation = adw::TimedAnimation::builder()
        .widget(&entry_progress)
        .value_from(0.0)
        .value_to(1.0)
        .duration(2000)
        .easing(adw::Easing::Linear)
        .target(&target)
        .build();

    // Animation is defined outside of the scope of the following closure
    // That's why we need to use glib::clone! macro
    // See: https://gtk-rs.org/gtk-rs-core/stable/latest/docs/glib/macro.clone.html

    entry_progress.connect_icon_press(glib::clone!(
        @strong animation => move |_, _| animation.play()
    ));

    animation.connect_done(|animation| animation.reset());

    let label_password: gtk::Label = workbench::builder().object("label_password").unwrap();
    let entry_password: gtk::PasswordEntry = workbench::builder().object("entry_password").unwrap();
    let entry_confirm_password: gtk::PasswordEntry = workbench::builder()
        .object("entry_confirm_password")
        .unwrap();

    fn validate_password(passwd: &glib::GString, confirm_passwd: &glib::GString) -> &'static str {
        if passwd.is_empty() || confirm_passwd.is_empty() {
            "Both fields are mandatory!"
        } else if passwd != confirm_passwd {
            "Both fields should be matching!"
        } else {
            "Password made successfully"
        }
    }

    // Using the glib::clone! macro we pass the reference to the closure
    entry_confirm_password.connect_activate(
        glib::clone!(@weak label_password, @weak entry_password, @weak entry_confirm_password => move |_| {
          let passwd = entry_password.text();
          let confirm_passwd = entry_confirm_password.text();
          label_password.set_text(validate_password(&passwd, &confirm_passwd));
        }),
    );

    entry_password.connect_activate(
        glib::clone!(@weak label_password, @weak entry_password, @weak entry_confirm_password => move |_| {
          let passwd = entry_password.text();
          let confirm_passwd = entry_confirm_password.text();
          label_password.set_text(validate_password(&passwd, &confirm_passwd));
        }),
    );

    // The entry_completion is deprecated
    // https://discourse.gnome.org/t/replacement-for-entrycompletion/13505
    let entry_completion: gtk::Entry = workbench::builder().object("entry_completion").unwrap();
    let completion = gtk::EntryCompletion::new();
    let store = gtk::TreeStore::new(&[glib::Type::STRING]);
    for text in ["a", "app", "apple", "apples", "applets", "application"] {
        let iter = store.append(None);
        store.set_value(&iter, 0, &glib::GString::from(text).to_value());
    }
    completion.set_text_column(0);
    completion.set_model(Some(&store));
    entry_completion.set_completion(Some(&completion));
}

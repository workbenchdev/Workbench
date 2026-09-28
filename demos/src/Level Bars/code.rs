use crate::workbench;
use gtk::glib;
use gtk::prelude::*;

pub fn main() {
    let bar_continuous: gtk::LevelBar = workbench::builder().object("bar_continuous").unwrap();

    bar_continuous.add_offset_value("full", 100.0);
    bar_continuous.add_offset_value("half", 50.0);
    bar_continuous.add_offset_value("low", 25.0);

    let bar_discrete: gtk::LevelBar = workbench::builder().object("bar_discrete").unwrap();

    bar_discrete.add_offset_value("very-weak", 1.0);
    bar_discrete.add_offset_value("weak", 2.0);
    bar_discrete.add_offset_value("moderate", 4.0);
    bar_discrete.add_offset_value("strong", 6.0);

    let entry: gtk::PasswordEntry = workbench::builder().object("entry").unwrap();
    let label_strength: gtk::Label = workbench::builder().object("label_strength").unwrap();

    // We're using the glib::clone! macro to
    // provide access to the object from the handling closure
    // https://gtk-rs.org/gtk-rs-core/stable/latest/docs/glib/macro.clone.html

    entry.connect_text_notify(glib::clone!(
        @weak label_strength, @weak bar_discrete => move |entry| {
            // This is not a secure way to estimate password strength
            // Use appropriate solutions instead
            // such as https://github.com/dropbox/zxcvbn
            let level = std::cmp::min(entry.text().len() / 2, 6);

            match level {
                1 => {
                    label_strength.set_label("Very Weak");
                    label_strength.set_css_classes(&["very-weak-label"]);
                }
                2 => {
                    label_strength.set_label("Weak");
                    label_strength.set_css_classes(&["weak-label"]);
                }
                3 | 4 => {
                    label_strength.set_label("Moderate");
                    label_strength.set_css_classes(&["moderate-label"]);

                }
                5 | 6 => {
                    label_strength.set_label("Strong");
                    label_strength.set_css_classes(&["strong-label"]);
                }
                _ => {
                    label_strength.set_label("");
                    label_strength.set_css_classes(&[]);
                }
            }

            bar_discrete.set_value(level as f64)
        }
    ));
}

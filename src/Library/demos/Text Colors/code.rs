use crate::workbench;
use gtk::pango;

// Pango is a text layout library. It can e.g. be used for formatting text
// https://docs.rs/pango/0.18.0/pango/index.html

pub fn main() {
    let label: gtk::Label = workbench::builder().object("label").unwrap();
    label.connect_label_notify(update_attributes);
    update_attributes(&label);
}

fn update_attributes(label: &gtk::Label) {
    // A Pango Attribute List is used to style the label
    label.set_attributes(Some(&rainbow_attributes(label.label().as_str())));
}

/// Generates an Attribute List that styles the label in rainbow colors.
/// The `str` parameter is needed to detect string length + position of spaces
fn rainbow_attributes(input_str: &str) -> pango::AttrList {
    let rainbow_colors = ["#D00", "#C50", "#E90", "#090", "#24E", "#55E", "#C3C"];

    // Create a color array with the length needed to color all the letters
    let mut color_array = Vec::new();
    let mut i = 0;
    while i < input_str.chars().count() {
        color_array.extend_from_slice(&rainbow_colors);
        i = color_array.len();
    }

    // Independent variable from `i` in the following loop to avoid spaces "consuming" a color
    let mut color_idx = 0;
    let mut attr_list_string = String::new();
    for (i, character) in input_str.chars().enumerate() {
        // Skip space characters
        if !character.is_whitespace() {
            let start_idx = i;
            let end_idx = i + 1;

            let color = color_array[color_idx];
            color_idx += 1;
            // See comment below
            attr_list_string.push_str(&format!("{start_idx} {end_idx} foreground {color},"));
        }
    }
    // For more info about the syntax for this function, see:
    // https://docs.rs/pango/0.18.0/pango/struct.AttrList.html#method.from_string
    pango::AttrList::from_string(&attr_list_string).unwrap()
}


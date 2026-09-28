#! /usr/bin/env -S vala workbench.vala --pkg gtk4

Gtk.PasswordEntry entry;
Gtk.LevelBar bar_discrete;
Gtk.Label label_strength;

public void main () {
    var bar_continuous = (Gtk.LevelBar) workbench.builder.get_object ("bar_continuous");

    bar_continuous.add_offset_value ("full", 100);
    bar_continuous.add_offset_value ("half", 50);
    bar_continuous.add_offset_value ("low", 25);

    bar_discrete = (Gtk.LevelBar) workbench.builder.get_object ("bar_discrete");

    bar_discrete.add_offset_value ("very-weak", 1);
    bar_discrete.add_offset_value ("weak", 2);
    bar_discrete.add_offset_value ("moderate", 4);
    bar_discrete.add_offset_value ("strong", 6);


    entry = (Gtk.PasswordEntry) workbench.builder.get_object ("entry");

    label_strength = (Gtk.Label) workbench.builder.get_object ("label_strength");

    entry.notify["text"].connect (estimate_password_strength);
}

// This is not a secure way to estimate password strength
// Use appropriate solutions instead
// such as https://github.com/dropbox/zxcvbn

public void estimate_password_strength () {
    var level = (int) Math.fmin (Math.ceil ((entry.text.length + 1) / 2), 6);

    label_strength.css_classes = new string[0];

    switch (level) {
    case 1:
        label_strength.label = "Very Weak";
        label_strength.add_css_class ("very-weak-label");
        break;
    case 2:
        label_strength.label = "Weak";
        label_strength.add_css_class ("weak-label");
        break;
    case 3:
    case 4:
        label_strength.label = "Moderate";
        label_strength.add_css_class ("moderate-label");
        break;
    case 5:
    case 6:
        label_strength.label = "Strong";
        label_strength.add_css_class ("strong-label");
        break;
    default:
        label_strength.label = "";
        label_strength.add_css_class ("");
        break;
    }

    bar_discrete.value = level;
}

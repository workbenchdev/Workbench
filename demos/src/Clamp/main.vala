#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.Button button_increase;
private Gtk.Button button_decrease;
private Adw.Clamp clamp;

public void main () {
    button_increase = (Gtk.Button) workbench.builder.get_object ("button_increase");
    button_decrease = (Gtk.Button) workbench.builder.get_object ("button_decrease");
    clamp = (Adw.Clamp) workbench.builder.get_object ("clamp");

    button_increase.clicked.connect (increase);
    button_decrease.clicked.connect (decrease);
}

private void increase () {
    int current_size = clamp.maximum_size;
    int current_threshold = clamp.tightening_threshold;

    clamp.maximum_size = current_size + 300;
    clamp.tightening_threshold = current_threshold + 200;

    if (clamp.tightening_threshold == 1000) {
        stdout.printf ("Maximum size reached\n");
    }
}

private void decrease () {
    int current_size = clamp.maximum_size;
    int current_threshold = clamp.tightening_threshold;

    clamp.maximum_size = current_size - 300;
    clamp.tightening_threshold = current_threshold - 200;

    if (clamp.tightening_threshold == 0) {
        stdout.printf ("Minimum size reached\n");
    }
}

#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main () {
    var button_slide = (Gtk.ToggleButton) workbench.builder.get_object ("button_slide");
    var button_crossfade = (Gtk.ToggleButton) workbench.builder.get_object ("button_crossfade");
    var revealer_slide = (Gtk.Revealer) workbench.builder.get_object ("revealer_slide");
    var revealer_crossfade = (Gtk.Revealer) workbench.builder.get_object ("revealer_crossfade");
    var image1 = (Gtk.Picture) workbench.builder.get_object ("image1");
    var image2 = (Gtk.Picture) workbench.builder.get_object ("image2");

    var image1_file = File.new_for_uri (workbench.resolve ("image1.png"));
    var image2_file = File.new_for_uri (workbench.resolve ("image2.png"));

    image1.file = image1_file;
    image2.file = image2_file;

    button_slide.toggled.connect (() => {
        revealer_slide.reveal_child = button_slide.active;
    });

    button_crossfade.toggled.connect (() => {
        revealer_crossfade.reveal_child = button_crossfade.active;
    });

    revealer_slide.notify["child-revealed"].connect (() => {
        if (revealer_slide.child_revealed) {
            message ("Slide Revealer Shown");
        } else {
            message ("Slide Revealer Hidden");
        }
    });
}

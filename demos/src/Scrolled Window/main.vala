#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1
private bool auto_scrolling = false;

public void main () {
    var scrolled_window = (Gtk.ScrolledWindow) workbench.builder.get_object ("scrolled_window");
    var container = (Gtk.Box) workbench.builder.get_object ("container");
    var toggle_orientation = (Gtk.ToggleButton) workbench.builder.get_object ("toggle_orientation");
    var button_start = (Gtk.Button) workbench.builder.get_object ("button_start");
    var button_end = (Gtk.Button) workbench.builder.get_object ("button_end");

    button_start.sensitive = false;

    HashTable<Gtk.Orientation, Gtk.Scrollbar> scrollbars = new HashTable<Gtk.Orientation, Gtk.Scrollbar> (direct_hash, direct_equal);
    scrollbars[Gtk.Orientation.HORIZONTAL] = (Gtk.Scrollbar) scrolled_window.get_hscrollbar ();
    scrollbars[Gtk.Orientation.VERTICAL] = (Gtk.Scrollbar) scrolled_window.get_vscrollbar ();

    toggle_orientation.toggled.connect (() => {
        if (toggle_orientation.active) {
            container.orientation = Gtk.Orientation.HORIZONTAL;
        } else {
            container.orientation = Gtk.Orientation.VERTICAL;
        }
    });

    int num_items = 20;
    for (int i = 0; i < num_items; i++) {
        populate_container (container, @"Item $(i + 1)");
    }

    foreach (Gtk.Orientation orientation in scrollbars.get_keys ()) {
        Gtk.Scrollbar scrollbar = scrollbars[orientation];
        Gtk.Adjustment adj = scrollbar.adjustment;
        adj.value_changed.connect (() => {
            if (adj.value == adj.lower) {
                button_end.sensitive = true;
                button_start.sensitive = false;
            } else if (adj.value == adj.upper - adj.page_size) {
                button_end.sensitive = false;
                button_start.sensitive = true;
            } else {
                // Disable buttons if scrollbar is auto-scrolling
                button_end.sensitive = !auto_scrolling;
                button_start.sensitive = !auto_scrolling;
            }
        });
    }

    scrolled_window.edge_reached.connect (() => {
        message (@"Edge Reached");
    });

    button_start.clicked.connect (() => {
        auto_scrolling = true;
        Gtk.Scrollbar scrollbar = scrollbars[container.orientation];
        Adw.Animation anim = create_scrollbar_anim (scrollbar, false);
        anim.play ();
    });

    button_end.clicked.connect (() => {
        auto_scrolling = true;
        Gtk.Scrollbar scrollbar = scrollbars[container.orientation];
        Adw.Animation anim = create_scrollbar_anim (scrollbar, true);
        anim.play ();
    });
}

void populate_container (Gtk.Box container, string label) {
    Gtk.Widget item = new Adw.Bin () {
        margin_top = 6,
        margin_bottom = 6,
        margin_start = 6,
        margin_end = 6,
        child = new Gtk.Label (label) {
            width_request = 100,
            height_request = 100
        },
        css_classes = { "card" }
    };

    container.append (item);
}

Adw.TimedAnimation create_scrollbar_anim (Gtk.Scrollbar scrollbar, bool direction) {
    // direction = 0 -> Animates to Start
    // direction = 1 -> Animates to End
    Gtk.Adjustment adjustment = scrollbar.adjustment;
    double value_to = 0;
    if (direction) {
        value_to = adjustment.upper - adjustment.page_size;
    } else {
        value_to = 0;
    }

    var target = new Adw.PropertyAnimationTarget (adjustment, "value");
    var animation = new Adw.TimedAnimation (
                                            scrollbar, // widget
                                            adjustment.value, // value_from
                                            value_to, // value_to
                                            1000, // duration
                                            target // target
        ) {
        easing = LINEAR
    };

    animation.done.connect (() => {
        auto_scrolling = false;
    });

    return animation;
}

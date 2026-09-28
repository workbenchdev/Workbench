#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {

    var first_bar = (Gtk.ProgressBar) workbench.builder.get_object ("first");
    var second_bar = (Gtk.ProgressBar) workbench.builder.get_object ("second");
    var play = (Gtk.Button) workbench.builder.get_object ("play");
    var progress_tracker = (Gtk.Label) workbench.builder.get_object ("progress_tracker");

    var target = new Adw.PropertyAnimationTarget (first_bar, "fraction");

    var animation = new Adw.TimedAnimation (
                                            first_bar, // widget
                                            0.2, // value_from
                                            1, // value_to
                                            11000, // duration
                                            target // target
        ) {
        easing = LINEAR
    };

    animation.done.connect (() => {
        animation.reset ();
    });

    play.clicked.connect (() => {
        animation.play ();
        update_tracker (second_bar);
        pulse_progress (progress_tracker);
    });
}

void update_tracker (Gtk.ProgressBar second_bar) {
    double counter = 0.0;
    const int pulse_period = 500;
    const int duration = 10000;
    double increment = (double) pulse_period / duration;

    Timeout.add (pulse_period, () => {
        if (counter >= 1.0) {
            counter = 0.0;
            second_bar.fraction = 0.0;
            return false;
        }

        second_bar.pulse ();
        counter += increment;
        return true;
    }, Priority.DEFAULT);
}

void pulse_progress (Gtk.Label progress_tracker) {

    int time = 10;

    Timeout.add (1000, () => {
        if (time == 0) {
            progress_tracker.label = ("");
            message (@"Operation complete!");
            return false;
        }

        progress_tracker.label = (@"$time seconds remaining…");
        time -= 1;
        return true;
    }, Priority.DEFAULT);
}

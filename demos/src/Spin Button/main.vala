#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

private Gtk.SpinButton hours;
private Gtk.SpinButton minutes;

string tell_time () {
    return (@"The time selected is $(hours.text):$(minutes.text)");
}

public void main () {
    hours = (Gtk.SpinButton) workbench.builder.get_object ("hours");
    minutes = (Gtk.SpinButton) workbench.builder.get_object ("minutes");

    hours.text = "00";
    minutes.text = "00";

    hours.value_changed.connect (() => {
        message (@"$(tell_time ())");
    });

    minutes.value_changed.connect (() => {
        message (@"$(tell_time ())");
    });


    hours.output.connect (() => {
        var value = (int) hours.adjustment.value;
        hours.text = "%02d".printf (value);
        return true;
    });

    minutes.output.connect (() => {
        var value = (int) minutes.adjustment.value;
        minutes.text = "%02d".printf (value);
        return true;
    });

    // This only works for one direction
    // Add any extra logic to account for wrapping in both directions
    minutes.wrapped.connect (() => {
        hours.spin (STEP_FORWARD, 1);
    });
}

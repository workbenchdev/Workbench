#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var demo = (Adw.StatusPage) workbench.builder.get_object ("demo");

    var demo_group = new SimpleActionGroup ();
    demo.insert_action_group ("demo", demo_group);

    // Action with no state or parameters
    var simple_action = new SimpleAction ("simple", null);
    simple_action.activate.connect (() => {
        message (@"$(simple_action.name) action activated");
    });
    demo_group.add_action (simple_action);

    // Action with parameter
    var bookmarks_action = new SimpleAction ("open-bookmarks", new GLib.VariantType ("s"));
    bookmarks_action.activate.connect ((action, parameter) => {
        message (@"$(action.name) activated with $(parameter.get_string())");
    });
    demo_group.add_action (bookmarks_action);

    // Action with state
    var toggle_action = new SimpleAction.stateful ("toggle", null, new Variant.boolean (false));
    toggle_action.notify.connect ((action, state) => {
        bool b = toggle_action.state.get_boolean ();
        message (@"$(toggle_action.name) action set to " + (b ? "true" : "false"));
    });

    demo_group.add_action (toggle_action);

    // Action with state and parameter
    var scale_action = new SimpleAction.stateful ("scale", new VariantType ("s"), new Variant.string ("100%"));

    scale_action.notify.connect ((action) => {
        message (@"$(scale_action.name) action set to $(scale_action.state.get_string())");
    });

    demo_group.add_action (scale_action);

    var text = (Gtk.Label) workbench.builder.get_object ("text");
    var alignment_action = new PropertyAction ("text-align", text, "halign");
    demo_group.add_action (alignment_action);
}

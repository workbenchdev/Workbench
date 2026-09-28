#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var label = (Gtk.Label) workbench.builder.get_object ("label");

    var text_group = new SimpleActionGroup ();
    label.insert_action_group ("text", text_group);

    var text_state = new HashTable<string, Variant> (str_hash, str_equal);
    text_state.insert ("italic", false);
    text_state.insert ("bold", false);
    text_state.insert ("foreground", "green");

    var italic_action = new SimpleAction.stateful ("italic", null, new Variant.boolean (false));
    italic_action.notify["state"].connect (() => {
        text_state.replace ("italic", italic_action.state.get_boolean ());
        label.attributes = (state_to_attr (text_state));
    });
    text_group.add_action (italic_action);

    var bold_action = new SimpleAction.stateful ("bold", null, new Variant.boolean (false));
    bold_action.notify["state"].connect (() => {
        text_state.replace ("bold", bold_action.state.get_boolean ());
        label.attributes = (state_to_attr (text_state));
    });
    text_group.add_action (bold_action);

    var color_action = new SimpleAction.stateful ("color", new VariantType ("s"), new Variant.string ("green"));
    color_action.notify["state"].connect (() => {
        text_state.replace ("foreground", color_action.state.get_string ());
        label.attributes = (state_to_attr (text_state));
    });
    text_group.add_action (color_action);
}

// Helper function to create a PangoAttrList from text_state
private Pango.AttrList state_to_attr (HashTable<string, Variant> state) {
    string attr_string = "";
    GenericArray<string> attrs = new GenericArray<string> ();

    Variant? bold_variant = state.lookup ("bold");
    if (bold_variant != null && bold_variant.get_boolean ()) {
        attrs.add (@"0 -1 weight bold");
    }

    Variant? italic_variant = state.lookup ("italic");
    if (italic_variant != null && italic_variant.get_boolean ()) {
        attrs.add (@"0 -1 style italic");
    }

    string color = state.lookup ("foreground").get_string ();
    if (color != null) {
        attrs.add (@"0 -1 foreground $color");
    }

    foreach (string arr_attrb in attrs) {
        attr_string += arr_attrb + ", ";
    }
    return Pango.AttrList.from_string (attr_string);
}

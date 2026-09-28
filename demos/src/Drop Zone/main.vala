#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var bin = (Adw.Bin) workbench.builder.get_object ("bin");

    // Universal drop target for any String data
    var string_drop_target = new Gtk.DropTarget (Type.STRING, COPY);
    bin.add_controller (string_drop_target);

    string_drop_target.drop.connect ((value, x, y) => {
        bin.child = create_text_preview (value.get_string ());
        bin.remove_css_class ("overlay-drag-area");
        return true;
    });

    // Drop Target for Files
    var file_drop_target = new Gtk.DropTarget (typeof (File), COPY);
    bin.add_controller (file_drop_target);

    file_drop_target.drop.connect ((value, x, y) => {
        var file = (File) value;

        try {
            var file_info = file.query_info ("standard::content-type", 0, null);
            string content_type = file_info.get_content_type ();
            if (content_type.has_prefix ("image/")) {
                bin.child = create_image_preview (file);
            } else if (content_type.has_prefix ("video/")) {
                bin.child = create_video_preview (file);
            } else {
                bin.child = create_file_preview (file);
            }
        } catch (Error e) {
            critical (@"Unable to load preview: \"$(e.message)\"");
        }

        bin.remove_css_class ("overlay-drag-area");
        return true;
    });

    // Drop Hover Effect
    file_drop_target.enter.connect (() => {
        bin.add_css_class ("overlay-drag-area");
        return COPY;
    });

    file_drop_target.leave.connect (() => {
        bin.remove_css_class ("overlay-drag-area");
    });

    string_drop_target.enter.connect (() => {
        bin.add_css_class ("overlay-drag-area");
        return COPY;
    });

    string_drop_target.leave.connect (() => {
        bin.remove_css_class ("overlay-drag-area");
    });
}

private Gtk.Widget create_image_preview (File file) {
    var widget = create_box_widget ();

    var picture = new Gtk.Picture () {
        file = file,
        can_shrink = true,
        content_fit = SCALE_DOWN
    };
    widget.append (picture);

    return widget;
}

private Gtk.Widget create_text_preview (string text) {
    var widget = create_box_widget ();

    var label = new Gtk.Label (text) {
        wrap = true
    };
    widget.append (label);

    return widget;
}

private Gtk.Widget create_video_preview (File file) {
    var widget = create_box_widget ();

    var video = new Gtk.Video.for_file (file);
    widget.append (video);

    return widget;
}

private Gtk.Widget create_file_preview (File file) {
    var widget = create_box_widget ();

    try {
        var file_info = file.query_info ("standard::icon", NONE, null);
        var icon = new Gtk.Image.from_gicon (file_info.get_icon ());
        widget.append (icon);
        icon.icon_size = LARGE;

        var file_name = new Gtk.Label (file.get_basename ());
        widget.append (file_name);
    } catch (Error e) {
        critical (@"Failed to retrieve file icon: $(e.message)");
    }

    return widget;
}

private Gtk.Box create_box_widget () {
    return new Gtk.Box (VERTICAL, 6) {
               halign = CENTER,
               valign = CENTER,
               margin_top = 12,
               margin_bottom = 12,
               margin_start = 12,
               margin_end = 12
    };
}

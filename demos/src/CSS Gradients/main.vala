#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1 --pkg gtksourceview-5

private GtkSource.Buffer gtksource_buffer;
private Adw.ComboRow combo_row_gradient_type;
private Adw.SpinRow spin_row_angle;
private Gtk.ColorDialogButton button_color_1;
private Gtk.ColorDialogButton button_color_2;
private Gtk.ColorDialogButton button_color_3;
private Adw.StyleManager style_manager;
private GtkSource.StyleSchemeManager scheme_manager;
private Gtk.CssProvider css_provider;
private string css;

void update () {
    spin_row_angle.sensitive = combo_row_gradient_type.selected != 1;
    css = generate_css ();
    gtksource_buffer.set_text (css, -1);
    update_css_provider (css);
}

void update_css_provider (string css) {
    var display = Gdk.Display.get_default ();
    if (css_provider == null) {
        css_provider = new Gtk.CssProvider ();
    } else {
        Gtk.StyleContext.remove_provider_for_display (display, css_provider);
    }

    css_provider.load_from_string (css);
    Gtk.StyleContext.add_provider_for_display (display, css_provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
}

string generate_css () {
    double angle = spin_row_angle.get_value ();
    string angle_string = angle.to_string ();
    string first_color_string = button_color_1.get_rgba ().to_string ();
    string second_color_string = button_color_2.get_rgba ().to_string ();
    string third_color_string = button_color_3.get_rgba ().to_string ();

    uint selected = combo_row_gradient_type.selected;
    switch (selected) {
    case 0:
        css = @".background-gradient {
    background-image: linear-gradient(
        $(angle_string)deg,
        $(first_color_string),
        $(second_color_string),
        $(third_color_string)
    );
}";
        break;
    case 1:
        css = @".background-gradient {
    background-image: radial-gradient(
        $(first_color_string),
        $(second_color_string),
        $(third_color_string)
    );
}";
        break;
    case 2:
        css = @".background-gradient {
    background-image: conic-gradient(
        from $(angle_string)deg,
        $(first_color_string),
        $(second_color_string),
        $(third_color_string)
    );
}";
        break;
    }
    return css;
}

void update_color_scheme () {
    string scheme_name = style_manager.dark ? "Adwaita-dark" : "Adwaita";
    GtkSource.StyleScheme scheme = scheme_manager.get_scheme (scheme_name);

    if (scheme != null) {
        gtksource_buffer.style_scheme = scheme;
    }
}

public void main () {
    combo_row_gradient_type = (Adw.ComboRow) workbench.builder.get_object ("combo_row_gradient_type");
    spin_row_angle = (Adw.SpinRow) workbench.builder.get_object ("spin_row_angle");
    button_color_1 = (Gtk.ColorDialogButton) workbench.builder.get_object ("button_color_1");
    button_color_2 = (Gtk.ColorDialogButton) workbench.builder.get_object ("button_color_2");
    button_color_3 = (Gtk.ColorDialogButton) workbench.builder.get_object ("button_color_3");
    gtksource_buffer = (GtkSource.Buffer) workbench.builder.get_object ("gtksource_buffer");
    var button_copy_css = (Gtk.Button) workbench.builder.get_object ("button_copy_css");

    combo_row_gradient_type.notify["selected"].connect (update);
    spin_row_angle.notify["value"].connect (update);
    button_color_1.notify["rgba"].connect (update);
    button_color_2.notify["rgba"].connect (update);
    button_color_3.notify["rgba"].connect (update);
    /*
     * code view
     */
    Gdk.Clipboard clipboard = Gdk.Display.get_default ().get_clipboard ();

    button_copy_css.clicked.connect (() => {
        Gtk.TextIter start, end;
        gtksource_buffer.get_start_iter (out start);
        gtksource_buffer.get_end_iter (out end);
        string text = gtksource_buffer.get_text (start, end, false);
        clipboard.set_text (text);
    });

    scheme_manager = GtkSource.StyleSchemeManager.get_default ();
    style_manager = Adw.StyleManager.get_default ();
    style_manager.notify["dark"].connect (() => update_color_scheme ());

    var language_manager = GtkSource.LanguageManager.get_default ();
    GtkSource.Language css_language = language_manager.get_language ("css");
    gtksource_buffer.language = css_language;

    update ();
    update_color_scheme ();
}

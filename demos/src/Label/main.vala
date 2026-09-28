#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
    var label = (Gtk.Label) workbench.builder.get_object ("label");
    var justification_row = (Adw.ComboRow) workbench.builder.get_object ("justification_row");
    var style_row = (Adw.ComboRow) workbench.builder.get_object ("style_row");
    var single_line_switch = (Adw.SwitchRow) workbench.builder.get_object ("single_line_switch");

    string[] style_classes = {
        "none",
        "title-1",
        "title-2",
        "title-3",
        "title-4",
        "monospace",
        "accent",
        "success",
        "warning",
        "error",
        "heading",
        "body",
        "caption-heading",
        "caption"
    };

    string short_label =
        "<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore disputandum putant.";

    string long_label =
        "     <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem.
        Ut enim mortis metu omnis quietae vitae status perturbatur,
        et ut succumbere doloribus eosque humili animo inbecilloque ferre miserum est,
        ob eamque debilitatem animi multi parentes, multi amicos, non nulli patriam,
        plerique autem se ipsos penitus perdiderunt, sic robustus animus et excelsus omni.";

    label.label = (short_label);

    single_line_switch.notify["active"].connect (() => {
        if (!single_line_switch.active) {
            label.label = long_label;
        } else {
            label.label = short_label;
        }
    });

    justification_row.notify["selected"].connect (() => {
        label.justify = (Gtk.Justification) justification_row.selected;
    });

    style_row.notify["selected"].connect (() => {
        foreach (string style_class in style_classes) {
            label.remove_css_class (style_class);
        }

        if (style_row.selected == 0)return;

        string new_style_class = style_classes[style_row.selected];
        label.add_css_class (new_style_class);
    });
}

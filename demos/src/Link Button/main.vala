#! /usr/bin/env -S vala workbench.vala --pkg gtk4

public void main () {
    var linkbutton = (Gtk.LinkButton) workbench.builder.get_object ("linkbutton");
    linkbutton.notify["visited"].connect ((_) => message ("The link has been visited"));
    linkbutton.activate_link.connect (() => {
        message (@"About to activate $(linkbutton.uri)");
        return false;
    });
}

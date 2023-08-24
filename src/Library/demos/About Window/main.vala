#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1

public void main () {
  Gtk.init ();

  var button = workbench.builder.get_object ("button") as Gtk.Button;
  button.clicked.connect(on_button_clicked);
}

public void on_button_clicked () {
  // https://valadoc.org/libadwaita-1/Adw.AboutWindow.html
  var dialog = new Adw.AboutWindow() {
    transient_for = workbench.window,
    application_icon = "application-x-executable",
    application_name = "Typeset",
    developer_name = "Angela Avery",
    version = "1.2.3",
    comments = "Typeset is an app that doesn’t exist and is used as an example content for About Window.",
    website = "https://example.org",
    issue_url = "https://example.org",
    support_url = "https://example.org",
    copyright = "© 2023 Angela Avery",
    license_type = Gtk.License.GPL_3_0_ONLY,
    developers = { "Angela Avery <angela@example.org>" },
    artists = { "GNOME Design Team" },
    translator_credits = "translator-credits",
  };
  dialog.add_link (
    "Documentation",
    "https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/class.AboutWindow.html"
    );
  dialog.add_legal_section (
    "Fonts",
    null,
    Gtk.License.CUSTOM,
    "This application uses font data from <a href='https://example.org'>somewhere</a>."
    );

  dialog.add_acknowledgement_section ("Special thanks to", { "My cat" } );

  dialog.present();
}

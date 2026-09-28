import { gettext as _ } from "gettext";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk?version=4.0";

const button = workbench.builder.get_object("button");

function openAboutDialog() {
  const dialog = new Adw.AboutDialog({
    application_icon: "application-x-executable",
    application_name: "Typeset",
    developer_name: "Angela Avery",
    version: "1.2.3",
    comments: _(
      "Typeset is an app that doesn’t exist and is used as an example content for About Dialog.",
    ),
    website: "https://example.org",
    issue_url: "https://example.org",
    support_url: "https://example.org",
    copyright: "© 2023 Angela Avery",
    license_type: Gtk.License.GPL_3_0_ONLY,
    developers: ["Angela Avery <angela@example.org>"],
    artists: ["GNOME Design Team"],
    translator_credits: _("translator-credits"),
  });

  dialog.add_link(
    _("Documentation"),
    "https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.6/class.AboutDialog.html",
  );

  dialog.add_legal_section(
    _("Fonts"),
    null,
    Gtk.License.CUSTOM,
    _(
      "This application uses font data from <a href='https://example.org'>somewhere</a>.",
    ),
  );

  dialog.add_acknowledgement_section(_("Special thanks to"), [_("My cat")]);

  dialog.present(workbench.window);
}

button.connect("clicked", openAboutDialog);

import Gtk from "gi://Gtk";
import { gettext as _ } from "gettext";

export default function About({ application, datadir, version }) {
  const dialog = new Gtk.AboutDialog({
    application,
    authors: ["Sonny Piers https://sonny.re"],
    artists: ["Tobias Bernard <tbernard@gnome.org>"],
    comments: _("Playground for GNOME development"),
    copyright: "Copyright 2022 Sonny Piers",
    license_type: Gtk.License.GPL_3_0_ONLY,
    version,
    website: "https://workbench.sonny.re",
    logo_icon_name: "re.sonny.Workbench",
    // TRANSLATORS: eg. 'Translator Name <your.email@domain.com>' or 'Translator Name https://website.example'
    translator_credits: _("translator-credits"),
  });
  // dialog.add_credit_section("Contributors", [
  //   // Add yourself as
  //   // "John Doe",
  //   // or
  //   // "John Doe <john@example.com>",
  //   // or
  //   // "John Doe https://john.com",
  // ]);
  dialog.present();

  return { dialog };
}

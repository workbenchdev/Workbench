import Gtk from "gi://Gtk";
import { gettext as _ } from "gettext";
import GLib from "gi://GLib";
import Adw from "gi://Adw";

import {
  getGIRepositoryVersion,
  getGjsVersion,
  getGLibVersion,
} from "../troll/src/util.js";
import { getFlatpakInfo } from "./util.js";

export default function About({ application }) {
  const flatpak_info = getFlatpakInfo();

  const debug_info = `
${pkg.name} ${pkg.version}
${GLib.get_os_info("ID")} ${GLib.get_os_info("VERSION_ID")}

GJS ${getGjsVersion()}
Adw ${getGIRepositoryVersion(Adw)}
GTK ${getGIRepositoryVersion(Gtk)}
GLib ${getGLibVersion()}
Flatpak ${flatpak_info.get_string("Instance", "flatpak-version")}
${getValaVersion()}
${getBlueprintVersion()}
`.trim();

  const dialog = new Adw.AboutWindow({
    transient_for: application.get_active_window(),
    application_name: "Workbench",
    developer_name: "Sonny Piers",
    copyright: "© 2022 Sonny Piers",
    license_type: Gtk.License.GPL_3_0_ONLY,
    version: pkg.version,
    website: "https://workbench.sonny.re",
    application_icon: pkg.name,
    issue_url: "https://github.com/sonnyp/Workbench/issues",
    // TRANSLATORS: eg. 'Translator Name <your.email@domain.com>' or 'Translator Name https://website.example'
    translator_credits: _("translator-credits"),
    debug_info,
    developers: [
      "Sonny Piers https://sonny.re",
      "Lorenz Wildberg https://gitlab.gnome.org/lwildberg",
      "Andy Holmes https://gitlab.gnome.org/andyholmes",
    ],
    designers: [
      "Sonny Piers https://sonny.re",
      "Tobias Bernard <tbernard@gnome.org>",
    ],
    artists: [
      "Tobias Bernard <tbernard@gnome.org>",
      "Jakub Steiner https://jimmac.eu",
    ],
  });

  dialog.add_credit_section(_("Contributors"), [
    "Akshay Warrier https://github.com/AkshayWarrier",
    "Ben Foote http://www.bengineeri.ng",
    "Brage Fuglseth https://bragefuglseth.dev",
    "Hari Rana (TheEvilSkeleton) https://theevilskeleton.gitlab.io",
    "Sriyansh Shivam https://linktr.ee/sonic_here",
    "Angelo Verlain https://www.vixalien.com",
    "bazylevnik0 https://github.com/bazylevnik0",
    "Felipe Kinoshita https://mastodon.social/@fkinoshita",
    "Karol Lademan https://github.com/karl0d",
    "Nasah Kuma https://www.mantohnasah.com/",
    "Jose Hunter https://github.com/halfmexican/",
    "Akunne Pascal https://github.com/Kodecheff",
    "JCWasmx86 https://github.com/JCWasmx86",
    // Add yourself as
    // "John Doe",
    // or
    // "John Doe <john@example.com>",
    // or
    // "John Doe https://john.com",
  ]);
  dialog.present();

  return { dialog };
}

function getValaVersion() {
  const [, data] = GLib.spawn_command_line_sync("valac --version");
  return new TextDecoder().decode(data).trim();
}

function getBlueprintVersion() {
  return "Blueprint 0.10.0";
}

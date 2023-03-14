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
    ],
    designers: [
      "Sonny Piers https://sonny.re",
      "Tobias Bernard <tbernard@gnome.org>",
    ],
    artists: ["Tobias Bernard <tbernard@gnome.org>"],
  });

  dialog.add_credit_section(_("Contributors"), [
    "Akshay Warrier https://github.com/AkshayWarrier",
    "Ben Foote http://www.bengineeri.ng",
    "Brage Fuglseth https://bragefuglseth.dev",
    "Hari Rana (TheEvilSkeleton) https://theevilskeleton.gitlab.io",
    "Sriyansh Shivam https://linktr.ee/sonic_here",
    "Angelo Verlain https://www.vixalien.com",
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
  // https://gitlab.gnome.org/jwestman/blueprint-compiler/-/issues/61
  return "Blueprint 0.6.0-Workbench";
}

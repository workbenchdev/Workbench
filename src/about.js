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

  const dialog = new Adw.AboutDialog({
    application_name: "Workbench",
    developer_name: "Sonny Piers",
    copyright: "© 2022 Sonny Piers",
    license_type: Gtk.License.GPL_3_0_ONLY,
    version: pkg.version,
    website: "https://apps.gnome.org/Workbench",
    application_icon: pkg.name,
    issue_url: "https://github.com/workbenchdev/Workbench/issues",
    debug_info,
    developers: [
      "Sonny Piers https://sonny.re",
      "Lorenz Wildberg https://gitlab.gnome.org/lwildberg",
      "Andy Holmes https://gitlab.gnome.org/andyholmes",
      "Julian Hofer https://julianhofer.eu/",
      "Marco Köpcke https://github.com/theCapypara",
    ],
    designers: [
      "Sonny Piers https://sonny.re",
      "Tobias Bernard <tbernard@gnome.org>",
      "Brage Fuglseth https://bragefuglseth.dev",
    ],
    artists: [
      "Tobias Bernard <tbernard@gnome.org>",
      "Jakub Steiner https://jimmac.eu",
      "Brage Fuglseth https://bragefuglseth.dev",
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
    "Alex (PaladinDev) https://github.com/SpikedPaladin",
    "Diego Iván M.E https://github.com/Diego-Ivan",
    "Rasmus Thomsen <oss@cogitri.dev>",
    "Marvin W https://github.com/mar-v-in",
    "Saad Khan https://github.com/saadulkh",
    "Adeel Ahmed Qureshi https://github.com/itsAdee",
    "Muhammad Bilal https://github.com/mbilal234",
    "Onkar https://github.com/onkarrai06",
    "Sabrina Meindlhumer https://github.com/m-sabrina",
    "Urtsi Santsi <urtsi.santsi@proton.me>",
    "Roland Lötscher https://github.com/rolandlo",
    "Gregor Niehl https://fosstodon.org/@gregorni",
    "Bart Gravendeel https://monster.codeberg.page",
    "Bharat Tyagi https://github.com/BharatAtbrat",
    "Jan Fooken https://git.janvhs.com",
    // Add yourself as
    // "John Doe",
    // or
    // "John Doe <john@example.com>",
    // or
    // "John Doe https://john.com",
  ]);
  dialog.present(application.active_window);

  return { dialog };
}

function getValaVersion() {
  const [, data] = GLib.spawn_command_line_sync("valac --version");
  return new TextDecoder().decode(data).trim();
}

function getBlueprintVersion() {
  return "Blueprint d47955c5";
}

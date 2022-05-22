import GLib from "gi://GLib";
import { bindtextdomain, textdomain } from "gettext";

import "./log_handler.js";
import Application from "./application.js";

GLib.set_prgname("re.sonny.Workbench");
GLib.set_application_name("Workbench");

export default function main(argv, { version, datadir }) {
  bindtextdomain(
    "re.sonny.Workbench",
    GLib.build_filenamev([datadir, "locale"])
  );
  textdomain("re.sonny.Workbench");

  const application = Application({ version });

  return application.run(argv);
}

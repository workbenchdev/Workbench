import GLib from "gi://GLib";
import { bindtextdomain, textdomain } from "gettext";

import "./log_handler.js";
import Application from "./application.js";

export default function main(argv, { version, datadir }) {
  bindtextdomain(
    "re.sonny.Workbench",
    GLib.build_filenamev([datadir, "locale"])
  );
  textdomain("re.sonny.Workbench");

  const application = Application({ version });

  return application.run(argv);
}

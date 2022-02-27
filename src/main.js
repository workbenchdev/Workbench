import GLib from "gi://GLib";
import { bindtextdomain, textdomain } from "gettext";
import Gio from "gi://Gio";

import Application from "./application.js";
import { relativePath } from "./util.js";

GLib.set_prgname("re.sonny.Workbench");
GLib.set_application_name("Workbench");

const resource = Gio.resource_load(relativePath("./workbench.gresource"));
resource._register();

export default function main(argv, { version, datadir }) {
  bindtextdomain(
    "re.sonny.Workbench",
    GLib.build_filenamev([datadir, "locale"])
  );
  textdomain("re.sonny.Workbench");

  const application = Application({ version, datadir });

  application.run(argv);
}

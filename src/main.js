import GLib from "gi://GLib";
import { bindtextdomain, textdomain } from "gettext";
import system from "system";

import Application from "./application.js";

GLib.set_prgname("re.sonny.Workbench");
GLib.set_application_name("Workbench");

export default function main(argv, { version, datadir }) {
  bindtextdomain(
    "re.sonny.Workbench",
    GLib.build_filenamev([datadir, "locale"])
  );
  textdomain("re.sonny.Workbench");

  const application = Application({ version, datadir });

  // Temporary workaround for issue
  // https://gitlab.gnome.org/GNOME/gjs/-/issues/468
  const { mainloop } = imports;
  mainloop.idle_add(() => {
    mainloop.quit();
    const status = application.run(argv);
    system.exit(status);
  }, GLib.PRIORITY_DEFAULT);
}

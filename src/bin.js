#!@GJS@ -m

import { exit } from "system";
import GLib from "gi://GLib";
import { setConsoleLogDomain } from "console";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";

imports.package.init({
  name: "@app_id@",
  version: "@version@",
  prefix: "@prefix@",
  libdir: "@libdir@",
  datadir: "@datadir@",
});
setConsoleLogDomain(pkg.name);
GLib.set_application_name("Workbench");

if (!Xdp.Portal.running_under_flatpak()) {
  console.error(
    "Workbench is only meant to be run sandboxed as a Flatpak and a specific target environment.\nBypassing this will exposes users to arbitrary code execution and breakage.",
  );
  exit(1);
}

const resource = Gio.resource_load("@pkgdatadir@/@app_id@.gresource");
Gio.resources_register(resource);

globalThis.__DEV__ = pkg.name.endsWith(".Devel");
if (__DEV__) {
  pkg.sourcedir = "@sourcedir@";
}

const loop = new GLib.MainLoop(null, false);
import("resource:///re/sonny/Workbench/src/main.js")
  .then((main) => {
    // Workaround for issue
    // https://gitlab.gnome.org/GNOME/gjs/-/issues/468
    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
      loop.quit();
      const exit_code = imports.package.run(main);
      exit(exit_code);
      return GLib.SOURCE_REMOVE;
    });
  })
  .catch(logError);
loop.run();

#!@GJS@ -m

import Gio from "gi://Gio";
import { exit, programArgs } from "system";
import { setConsoleLogDomain } from "console";

// eslint-disable-next-line no-restricted-globals
imports.package.init({
  name: "re.sonny.Workbench.cli",
  version: "@version@",
  prefix: "@prefix@",
  libdir: "@libdir@",
  datadir: "@datadir@",
});
setConsoleLogDomain(pkg.name);

const resource = Gio.Resource.load(
  "/app/share/@app_id@/re.sonny.Workbench.cli.src.gresource",
);
resource._register();

const module = await import("resource:///re/sonny/Workbench/cli/main.js");
const exit_code = await module.main(programArgs);
exit(exit_code);

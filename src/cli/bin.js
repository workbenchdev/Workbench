#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import { exit, programArgs } from "system";
import { setConsoleLogDomain } from "console";

// globalThis.pkg = {
//   name: "re.sonny.Workbench.cli",
// };
// eslint-disable-next-line no-restricted-globals
imports.package.init({
  name: "re.sonny.Workbench.cli",
  version: "@version@",
  prefix: "@prefix@",
  libdir: "@libdir@",
  datadir: "@datadir@",
});
setConsoleLogDomain(pkg.name);

// console.log(pkg.pkgdatadir);

// const file = Gio.File.new_for_path(pkg.pkgdatadir).get_child(
//   "re.sonny.Workbench.cli.src.gresource",
// );
// const resource = Gio.Resource.load(file.get_path());
const resource = Gio.Resource.load(
  "/app/share/re.sonny.Workbench.Devel/re.sonny.Workbench.cli.src.gresource",
);
resource._register();

// console.log(
//   ...resource.enumerate_children(
//     "/re/sonny/Workbench/cli/main",
//     Gio.ResourceLookupFlags.NONE,
//   ),
// );

const module = await import("resource:///re/sonny/Workbench/cli/main.js");
const exit_code = await module.main(programArgs);
exit(exit_code);

// /troll/gjspack/bin/gjspack --appid=re.sonny.Workbench.cli --prefix=/re/sonny/Workbench --no-executable src/cli/main.js src/cli

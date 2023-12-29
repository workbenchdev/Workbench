#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import { exit, programArgs } from "system";
import { setConsoleLogDomain } from "console";
import GLib from "gi://GLib";

import { build as gjspack } from "../../troll/gjspack/src/gjspack.js";

// eslint-disable-next-line no-restricted-globals
imports.package.init({
  name: "re.sonny.Workbench.Devel",
  version: "dev",
  prefix: "/tmp/workbench-cli",
  libdir: "/tmp/workbench-cli",
  datadir: "/tmp/workbench-cli",
});
setConsoleLogDomain("re.sonny.Workbench.cli");
GLib.set_application_name("workbench-cli");

globalThis.__DEV__ = true;

const project_root = Gio.File.new_for_uri(
  import.meta.url,
).resolve_relative_path("../../..");
const { gresource_path, prefix } = gjspack({
  appid: "re.sonny.Workbench.cli",
  prefix: "/re/sonny/Workbench",
  project_root,
  resource_root: project_root.resolve_relative_path("./src"),
  entry: project_root.resolve_relative_path("./src/cli/main.js"),
  output: project_root.resolve_relative_path("./src/cli"),
});
const resource = Gio.resource_load(gresource_path);
Gio.resources_register(resource);

const module = await import(`resource://${prefix}/cli/main.js`);
const exit_code = await module.main(programArgs);
exit(exit_code);

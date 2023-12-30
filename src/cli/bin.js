#!/usr/bin/env -S gjs -m

import Gio from "gi://Gio";
import { exit, programArgs } from "system";
import { setConsoleLogDomain } from "console";
import GLib from "gi://GLib";

// eslint-disable-next-line no-restricted-globals
imports.package.init({
  name: "@app_id@",
  version: "@version@",
  prefix: "@prefix@",
  libdir: "@libdir@",
  datadir: "@datadir@",
});

const app_id = "re.sonny.Workbench.cli";

setConsoleLogDomain(app_id);
GLib.set_application_name("workbench-cli");

const resource = Gio.Resource.load(
  `/app/share/${app_id}/${app_id}.src.gresource`,
);
resource._register();

const module = await import("resource:///re/sonny/Workbench/cli/main.js");
const exit_code = await module.main(programArgs);
exit(exit_code);

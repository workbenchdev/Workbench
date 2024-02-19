import Adw from "gi://Adw";
import Gio from "gi://Gio";

import Window from "./window.js";
import Actions from "./actions.js";
import { settings, data_dir, ensureDir } from "./util.js";
import { overrides } from "./overrides.js";
import Library, { getDemo } from "./Library/Library.js";
import Extensions from "./Extensions/Extensions.js";
import {
  Session,
  addToRecentProjects,
  createSessionFromDemo,
  getSessions,
} from "./sessions.js";
import ShortcutsWindow from "./shortcutsWindow.js";

ensureDir(data_dir);

const application = new Adw.Application({
  application_id: pkg.name,
  flags: Gio.ApplicationFlags.HANDLES_OPEN,
  // Defaults to /re/sonny/Workbench/Devel
  // if pkg.name is re.sonny.Workbench.Devel
  resource_base_path: "/re/sonny/Workbench",
});

application.connect("open", (_self, files, hint) => {
  const [file] = files;
  if (!file || hint !== "project") return;

  const session = new Session(file);

  addToRecentProjects(file.get_path());
  const { load } = Window({
    application,
    session,
  });
  load().catch(console.error);
});

let proc_biome;

application.connect("startup", () => {
  // biome lsp-proxy starts a background server
  // it does not get stopped and leaves a process hanging
  // so manage it manually instead
  // See https://github.com/workbenchdev/Workbench/issues/828
  const subprocess_launcher = Gio.SubprocessLauncher.new(
    Gio.SubprocessFlags.STDERR_SILENCE,
  );
  proc_biome = subprocess_launcher.spawnv([
    "biome",
    "__run_server",
    "--config-path",
    pkg.pkgdatadir,
  ]);

  Library({
    application,
  });

  Extensions({
    application,
  });

  ShortcutsWindow({ application });

  restoreSessions().catch(console.error);
});

application.connect("shutdown", () => {
  proc_biome?.force_exit();
});

application.connect("activate", () => {
  if (application.is_remote) {
    bootstrap().catch(console.error);
  }
});

application.set_option_context_description(
  "<https://apps.gnome.org/Workbench>",
);

Actions({ application });

overrides();

const style_manager = Adw.StyleManager.get_default();
function setColorScheme() {
  const color_scheme = settings.get_int("color-scheme");
  style_manager.set_color_scheme(color_scheme);
}
setColorScheme();
settings.connect("changed::color-scheme", setColorScheme);

async function restoreSessions() {
  const sessions = await getSessions();

  if (sessions.length < 1) {
    bootstrap().catch(console.error);
  } else {
    sessions.forEach((session) => {
      const { load } = Window({
        application,
        session,
      });
      load().catch(console.error);
    });
  }
}

async function bootstrap() {
  const first_run = settings.get_boolean("first-run");
  if (!first_run) {
    application.activate_action("library", null);
    return;
  }

  const demo = getDemo("Welcome");
  const session = await createSessionFromDemo(demo);
  const { load, window } = Window({
    application,
    session,
  });
  window.maximize();
  load().catch(console.error);
  settings.set_boolean("first-run", false);
}

export default application;

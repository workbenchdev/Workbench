import Adw from "gi://Adw";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

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
import Workbench from "gi://Workbench";

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

application.connect("startup", () => {
  const preview_window = new Workbench.PreviewWindow();
  const label = new Gtk.Label({
    label: "cool",
  });
  preview_window.set_content(label);
  preview_window.present();

  Library({
    application,
  });

  Extensions({
    application,
  });

  ShortcutsWindow({ application });

  restoreSessions();
});

application.connect("activate", () => {
  if (application.is_remote) {
    bootstrap();
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

// We are not using async otherwise the app segfaults
// does not like opening a window in a promise
// TODO: make a reproducer and file a GJS bug
function restoreSessions() {
  const sessions = getSessions();

  if (sessions.length < 1) {
    bootstrap();
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

function bootstrap() {
  const first_run = settings.get_boolean("first-run");
  if (!first_run) {
    application.activate_action("library", null);
    return;
  }

  const demo = getDemo("Welcome");
  const session = createSessionFromDemo(demo);
  const { load, window } = Window({
    application,
    session,
  });
  window.maximize();
  load().catch(console.error);
  settings.set_boolean("first-run", false);
}

export default application;

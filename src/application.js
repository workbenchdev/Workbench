import Gio from "gi://Gio";
import Adw from "gi://Adw";

import Window from "./window.js";
import Actions from "./actions.js";
import { relativePath, loadStyleSheet, settings } from "./util.js";

const style_manager = Adw.StyleManager.get_default();

export default function Application({ version, datadir }) {
  const application = new Adw.Application({
    application_id: "re.sonny.Workbench",
    flags: Gio.ApplicationFlags.HANDLES_OPEN,
  });

  let window;

  application.connect("open", (self, files, hint) => {
    if (!window) return;

    for (const file of files) {
      window.openFile(file);
    }
  });

  application.connect("activate", () => {
    window = Window({
      application,
      data: default_data,
    });
  });

  application.connect("startup", () => {
    loadStyleSheet(relativePath("./style.css"));
  });

  application.set_option_context_description("<https://workbench.sonny.re>");
  application.set_option_context_parameter_string("[files…]");
  // TODO: Add examples
  // application.set_option_context_summary("");

  Actions({ application, datadir, version });

  return application;
}

function readFileContent(relative_path) {
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(
    Gio.File.new_for_path(relativePath(relative_path)).load_contents(null)[1]
  );
}

const default_data = {
  js: readFileContent("./welcome.js"),
  css: readFileContent("./welcome.css"),
  xml: readFileContent("./welcome.ui"),
};

function setColorScheme() {
  const toggle_color_scheme = settings.get_boolean("toggle-color-scheme");
  if (toggle_color_scheme) {
    style_manager.set_color_scheme(
      style_manager.dark
        ? Adw.ColorScheme.FORCE_LIGHT
        : Adw.ColorScheme.FORCE_DARK
    );
  } else {
    style_manager.set_color_scheme(Adw.ColorScheme.DEFAULT);
  }
}
setColorScheme();
settings.connect("changed::toggle-color-scheme", setColorScheme);

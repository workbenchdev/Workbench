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

  application.connect("open", (self, files, hint) => {
    for (const file of files) {
      Window({
        application,
        data: readFile(file),
      });
    }
  });

  application.connect("activate", () => {
    Window({
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

const text_decoder = new TextDecoder();
function readFile(file) {
  let content_type;

  try {
    const info = file.query_info(
      "standard::content-type",
      Gio.FileQueryInfoFlags.NONE,
      null
    );
    content_type = info.get_content_type();
  } catch (err) {
    logError(err);
  }

  if (!content_type) {
    return default_data;
  }

  let data;

  try {
    [, data] = file.load_contents(null);
    data = text_decoder.decode(data);
  } catch (err) {
    logError(err);
    return default_data;
  }

  const js = content_type.includes("/javascript") ? data : "";
  const css = content_type.includes("text/css") ? data : "";
  const xml = content_type.includes("application/x-gtk-builder") ? data : "";

  if (!js && !css && !xml) return default_data;

  return {
    js,
    css,
    xml,
  };
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

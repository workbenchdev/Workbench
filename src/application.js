import Gio from "gi://Gio";
import Adw from "gi://Adw";

import Window from "./window.js";
import Actions from "./actions.js";
import { settings } from "./util.js";
import { overrides } from "./overrides.js";

const application = new Adw.Application({
  application_id: pkg.name,
  flags: Gio.ApplicationFlags.HANDLES_OPEN,
  // Defaults to /re/sonny/Workbench/Devel
  // if pkg.name is re.sonny.Workbench.Devel
  resource_base_path: "/re/sonny/Workbench",
});

let window;
application.connect("open", (_self, files, _hint) => {
  if (!window) return;

  for (const file of files) {
    window.openFile(file).catch(logError);
  }
});

application.connect("activate", () => {
  if (!window) {
    window = Window({
      application,
    });
  }
  window.window.present();
});

application.set_option_context_description("<https://workbench.sonny.re>");
application.set_option_context_parameter_string("[files…]");
// TODO: Add examples
application.set_option_context_summary("");

Actions({ application });

overrides();

const style_manager = Adw.StyleManager.get_default();
function setColorScheme() {
  const color_scheme = settings.get_int("color-scheme");
  style_manager.set_color_scheme(color_scheme);
}
setColorScheme();
settings.connect("changed::color-scheme", setColorScheme);

export default application;

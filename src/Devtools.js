import Gio from "gi://Gio";

import TermConsole from "./TermConsole.js";

export default function Devtools({ application, window, builder, settings }) {
  const button_console = builder.get_object("button_console");
  const terminal = builder.get_object("terminal");
  const paned = builder.get_object("paned");
  const toolbar_devtools = builder.get_object("toolbar_devtools");
  const devtools = builder.get_object("devtools");

  // For some reasons those don't work
  // as builder properties
  paned.set_shrink_start_child(false);
  paned.set_shrink_end_child(true);
  paned.set_resize_start_child(true);
  paned.set_resize_end_child(true);
  paned.get_start_child().set_size_request(-1, 200);

  settings.bind(
    "show-console",
    button_console,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );

  let position;

  function uncollapse() {
    terminal.visible = true;
    settings.set_boolean("show-console", true);
  }

  function collapse() {
    const { height: toolbar_height } = toolbar_devtools.get_allocation();
    const { height: paned_height } = paned.get_allocation();

    terminal.visible = false;
    settings.set_boolean("show-console", false);
    paned.position = paned_height - toolbar_height;
  }

  function isCollapsed() {
    const { height: paned_height } = paned.get_allocation();
    const { height: toolbar_height } = toolbar_devtools.get_allocation();
    return paned_height <= paned.position + toolbar_height;
  }

  paned.connect_after("notify::position", () => {
    const { height: toolbar_height } = toolbar_devtools.get_allocation();
    const { height: paned_height } = paned.get_allocation();

    if (paned.position + toolbar_height > paned_height - 50) {
      collapse();
    } else {
      uncollapse();
    }
  });

  function setupPaned() {
    const { height: paned_height } = paned.get_allocation();
    const { height: toolbar_height } = toolbar_devtools.get_allocation();

    if (button_console.active) {
      terminal.visible = true;
      if (isCollapsed()) {
        devtools.set_size_request(-1, 200);
        paned.position =
          position >= paned_height - toolbar_height - 50
            ? paned_height - 200
            : position;
      }
    } else {
      position = paned.position;
      const { height: toolbar_height } = toolbar_devtools.get_allocation();
      paned.position = paned_height - toolbar_height;
      terminal.visible = false;
      devtools.set_size_request(-1, toolbar_height);
    }
  }
  button_console.connect_after("notify::active", setupPaned);

  const action_console = new Gio.SimpleAction({
    name: "console",
    parameter_type: null,
  });
  action_console.connect("activate", () => {
    settings.set_boolean("show-console", !settings.get_boolean("show-console"));
  });
  window.add_action(action_console);
  application.set_accels_for_action("win.console", ["<Control><Shift>K"]);

  return {
    term_console: TermConsole({ builder, window, application, settings }),
  };
}

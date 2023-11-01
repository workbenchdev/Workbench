import Gio from "gi://Gio";

import resource from "./shortcutsWindow.blp" with { type: "uri" };

import { build } from "../troll/src/builder.js";

export default function ShortcutsWindow({ application }) {
  let window;

  const action_shortcuts = new Gio.SimpleAction({
    name: "shortcuts",
    parameter_type: null,
  });
  action_shortcuts.connect("activate", () => {
    if (!window) {
      ({ window } = build(resource));
      window.set_transient_for(application.get_active_window());
      window.set_application(application);
    }
    window.present();
  });
  application.add_action(action_shortcuts);
  application.set_accels_for_action("app.shortcuts", ["<Control>question"]);
}

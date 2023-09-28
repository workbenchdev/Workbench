import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

import resource from "./shortcutsWindow.blp";

export default function ShortcutsWindow({ application }) {
  let window_shortcuts;

  const action_shortcuts = new Gio.SimpleAction({
    name: "shortcuts",
    parameter_type: null,
  });
  action_shortcuts.connect("activate", () => {
    if (!window_shortcuts) {
      const builder = Gtk.Builder.new_from_resource(resource);
      window_shortcuts = builder.get_object("window_shortcuts");
      window_shortcuts.set_transient_for(application.get_active_window());
      window_shortcuts.set_application(application);
    }
    window_shortcuts.present();
  });
  application.add_action(action_shortcuts);
  application.set_accels_for_action("app.shortcuts", ["<Control>question"]);
}

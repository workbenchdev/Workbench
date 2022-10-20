import Gtk from "gi://Gtk";

import resource from "./shortcutsWindow.blp";

export default function ShortcutsWindow({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);

  const window = builder.get_object("shortcuts_window");
  window.set_transient_for(application.get_active_window());
  window.set_application(application);

  window.show();
}

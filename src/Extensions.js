import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import resource from "./Extensions.blp";

export default function Extensions({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("window");

  const action_extensions = new Gio.SimpleAction({
    name: "extensions",
    parameter_type: null,
  });
  action_extensions.connect("activate", () => {
    window.present();
  });
  application.add_action(action_extensions);
}

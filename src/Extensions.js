import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import resource from "./Extensions.blp";

import { settings } from "./util.js";

import "./Extensions/Extension.js";

export default function Extensions({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("window");

  const action_extensions = new Gio.SimpleAction({
    name: "extensions",
    parameter_type: null,
  });
  action_extensions.connect("activate", () => {
    settings.set_boolean("open-extensions", true);
    window.present();
  });

  window.connect("close-request", () => {
    settings.set_boolean("open-extensions", false);
  });

  if (settings.get_boolean("open-extensions")) {
    window.present();
  }

  application.add_action(action_extensions);
}

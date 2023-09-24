import Gio from "gi://Gio";
import GLib from "gi://GLib";

import { build } from "../troll/src/main.js";

import Interace from "./Extensions.blp" with { type: "uri" };
import { settings } from "./util.js";
import "./Extensions/Extension.js";

export default function Extensions({ application }) {
  const { window, extension_rust, extension_vala, extension_documentation } =
    build(Interace);

  const extensions = getExtensions();
  extension_rust.enabled =
    extensions.includes("org.freedesktop.Sdk.Extension.rust-stable") &&
    extensions.includes("org.freedesktop.Sdk.Extension.llvm16");
  extension_documentation.enabled = extensions.includes("org.gnome.Sdk.Docs");
  extension_vala.enabled = extensions.includes(
    "org.freedesktop.Sdk.Extension.vala",
  );

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

function getExtensions() {
  const keyfile = new GLib.KeyFile();

  keyfile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);

  return keyfile
    .get_string_list("Instance", "runtime-extensions")
    .map((extension) => extension.split("=")[0]);
}

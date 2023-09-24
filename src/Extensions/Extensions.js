import Gio from "gi://Gio";
import GLib from "gi://GLib";

import { build } from "../../troll/src/main.js";

import Interace from "./Extensions.blp" with { type: "uri" };
import { settings } from "../util.js";

import "./Extension.js";

const extensions = (() => {
  const keyfile = new GLib.KeyFile();

  keyfile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);

  return keyfile
    .get_string_list("Instance", "runtime-extensions")
    .map((extension) => extension.split("=")[0]);
})();

export const action_extensions = new Gio.SimpleAction({
  name: "extensions",
  parameter_type: null,
});

export default function Extensions({ application }) {
  const { window, extension_rust, extension_vala, extension_documentation } =
    build(Interace);

  extension_rust.enabled = isRustEnabled();
  extension_documentation.enabled = isDocumentationEnabled();
  extension_vala.enabled = isValaEnabled();

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

export function isRustEnabled() {
  return (
    extensions.includes("org.freedesktop.Sdk.Extension.rust-stable") &&
    extensions.includes("org.freedesktop.Sdk.Extension.llvm16")
  );
}

export function isValaEnabled() {
  return extensions.includes("org.freedesktop.Sdk.Extension.vala");
}

export function isDocumentationEnabled() {
  return extensions.includes("org.gnome.Sdk.Docs");
}

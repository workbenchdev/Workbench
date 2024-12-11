import Gio from "gi://Gio";

import { build } from "../../troll/src/main.js";

import Interface from "./Extensions.blp" with { type: "uri" };
import illustration from "./extensions.svg";

import "./Extension.js";
import { settings } from "../util.js";
import { getFlatpakInfo } from "../flatpak.js";

export const action_extensions = new Gio.SimpleAction({
  name: "extensions",
  parameter_type: null,
});

export function Extensions({ window }) {
  const {
    dialog,
    picture_illustration,
    extension_rust,
    extension_vala,
    extension_typescript,
    restart_hint,
    all_set_hint,
  } = build(Interface);

  picture_illustration.set_resource(illustration);

  extension_rust.available = isRustAvailable();
  extension_rust.command = `flatpak install flathub org.freedesktop.Sdk.Extension.rust-stable//${freedesktop_version} org.freedesktop.Sdk.Extension.${llvm}//${freedesktop_version}`;

  extension_vala.available = isValaAvailable();
  extension_vala.command = `flatpak install flathub org.freedesktop.Sdk.Extension.vala//${freedesktop_version}`;

  extension_typescript.available = isTypeScriptAvailable();
  extension_typescript.command = `flatpak install flathub org.freedesktop.Sdk.Extension.${node}//${freedesktop_version} org.freedesktop.Sdk.Extension.typescript//${freedesktop_version}`;
  extension_typescript.visible = isTypeScriptEnabled();

  for (const extension of [
    extension_rust,
    extension_vala,
    extension_typescript,
  ]) {
    if (!extension.available) {
      all_set_hint.set_visible(false);
      restart_hint.set_visible(true);
    }
  }

  action_extensions.connect("activate", () => {
    dialog.present(window);
  });

  window.add_action(action_extensions);
}

let rust_available = null;
export function isRustAvailable() {
  rust_available ??=
    Gio.File.new_for_path("/usr/lib/sdk/rust-stable").query_exists(null) &&
    Gio.File.new_for_path(`/usr/lib/sdk/${llvm}`).query_exists(null);
  return rust_available;
}

let vala_available = null;
export function isValaAvailable() {
  vala_available ??=
    Gio.File.new_for_path("/usr/lib/sdk/vala").query_exists(null);
  return vala_available;
}

let typescript_available = null;
export function isTypeScriptAvailable() {
  typescript_available ??=
    isTypeScriptEnabled() &&
    Gio.File.new_for_path("/usr/lib/sdk/typescript").query_exists(null) &&
    Gio.File.new_for_path(`/usr/lib/sdk/${node}`).query_exists(null);
  return typescript_available;
}

const llvm = "llvm18";
const node = "node20";
const runtime = getFlatpakInfo().get_string("Application", "runtime");
const freedesktop_version = runtime.endsWith("master") ? "24.08" : "24.08";

export function isTypeScriptEnabled() {
  return settings.get_boolean("typescript");
}

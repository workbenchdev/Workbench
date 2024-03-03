import Gio from "gi://Gio";

import { build } from "../../troll/src/main.js";

import Interface from "./Extensions.blp" with { type: "uri" };
import illustration from "./extensions.svg";

import "./Extension.js";

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
    restart_hint,
    all_set_hint,
  } = build(Interface);

  picture_illustration.set_resource(illustration);

  extension_rust.enabled = isRustEnabled();
  extension_vala.enabled = isValaEnabled();

  for (const extension of [extension_rust, extension_vala]) {
    if (!extension.enabled) {
      all_set_hint.set_visible(false);
      restart_hint.set_visible(true);
    }
  }

  action_extensions.connect("activate", () => {
    dialog.present(window);
  });

  window.add_action(action_extensions);
}

let rust_enabled = false;
export function isRustEnabled() {
  rust_enabled ??=
    Gio.File.new_for_path("/usr/lib/sdk/rust-stable").query_exists(null) &&
    Gio.File.new_for_path("/usr/lib/sdk/llvm16").query_exists(null);
  return rust_enabled;
}

let vala_enabled = false;
export function isValaEnabled() {
  vala_enabled ??=
    Gio.File.new_for_path("/usr/lib/sdk/vala").query_exists(null);
  return vala_enabled;
}

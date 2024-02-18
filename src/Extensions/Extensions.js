import Gio from "gi://Gio";

import { build } from "../../troll/src/main.js";

import Interface from "./Extensions.blp" with { type: "uri" };
import illustration from "./extensions.svg";
import { settings } from "../util.js";

import "./Extension.js";

export const action_extensions = new Gio.SimpleAction({
  name: "extensions",
  parameter_type: null,
});

export default function Extensions({ application }) {
  const {
    window,
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

let rust_enabled;
export function isRustEnabled() {
  rust_enabled ??=
    Gio.File.new_for_path("/usr/lib/sdk/rust-stable").query_exists(null) &&
    Gio.File.new_for_path("/usr/lib/sdk/llvm16").query_exists(null);
  return rust_enabled;
}

let vala_enabled;
export function isValaEnabled() {
  vala_enabled ??=
    Gio.File.new_for_path("/usr/lib/sdk/vala").query_exists(null);
  return vala_enabled;
}

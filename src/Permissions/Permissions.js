import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";

import { build } from "../../troll/src/main.js";

import Interface from "./Permissions.blp" with { type: "uri" };

import illustration from "./permissions.svg";

import { getFlatpakInfo } from "../util.js";

const action_permissions = new Gio.SimpleAction({
  name: "permissions",
  parameter_type: null,
});

export function Permissions({ window }) {
  const { dialog, picture_illustration, label_command, button_info } =
    build(Interface);

  picture_illustration.set_resource(illustration);
  label_command.label = `flatpak override --user --share=network --socket=pulseaudio --device=input ${GLib.getenv(
    "FLATPAK_ID",
  )}`;

  button_info.connect("clicked", () => {
    new Gtk.UriLauncher({
      uri: "https://docs.flatpak.org/en/latest/sandbox-permissions.html",
    })
      .launch(window, null)
      .catch(console.error);
  });

  action_permissions.connect("activate", () => {
    dialog.present(window);
  });

  window.add_action(action_permissions);
}

const missing_permissions = (() => {
  const flatpak_info = getFlatpakInfo();
  const shared = flatpak_info.get_string_list("Context", "shared");
  const sockets = flatpak_info.get_string_list("Context", "sockets");
  const devices = flatpak_info.get_string_list("Context", "devices");

  return (
    !shared.includes("network") ||
    !sockets.includes("pulseaudio") ||
    !devices.includes("all")
  );
})();

export function needsAdditionalPermissions({ demo }) {
  if (!demo["flatpak-finish-args"]) return false;
  return missing_permissions;
}

export function showPermissionsDialog({ window }) {
  window.activate_action("permissions", null);
}

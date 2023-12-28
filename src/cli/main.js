/* eslint-disable no-restricted-globals */
// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import { createLSPClient, languages } from "../common.js";
import lint from "./lint.js";
import format from "./format.js";

Gtk.init();

export async function main([action, language_id, ...filenames]) {
  const lang = languages.find((language) => language.id === language_id);
  if (!lang) {
    printerr(`Unknown language "${language_id}"`);
    return 1;
  }

  const current_dir = Gio.File.new_for_path(GLib.get_current_dir());
  if (lang.id === "vala") {
    const api_file = (
      GLib.getenv("FLATPAK_ID")
        ? Gio.File.new_for_path(pkg.pkgdatadir)
        : current_dir.resolve_relative_path("src/langs/vala")
    ).get_child("workbench.vala");
    api_file.copy(
      current_dir.get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null,
    );
  }

  const lspc = createLSPClient({
    lang,
    root_uri: current_dir.get_uri(),
  });
  lspc._start_process();
  await lspc._initialize();

  let success = false;

  if (action === "lint") {
    success = await lint({ filenames, lang, lspc, ci: false });
  } else if (action === "ci") {
    success = await lint({ filenames, lang, lspc, ci: true });
  } else if (action === "format") {
    success = await format({ filenames, lang, lspc });
  } else {
    printerr(`Unknown action "${action}"}`);
  }

  return success ? 0 : 1;
}

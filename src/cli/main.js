#!/usr/bin/env -S gjs -m

// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import LSPClient from "../lsp/LSPClient.js";
import { languages } from "./util.js";
import lint from "./lint.js";
import format from "./format.js";

Gtk.init();

export async function main([action, language_id, ...filenames]) {
  const lang = languages.find((language) => language.id === language_id);
  if (!lang) {
    console.error(`Unknown language "${language_id}"`);
    return 1;
  }

  const lspc = createLSPClient({ lang });
  lspc._start_process();
  await lspc._initialize();

  let success = false;

  if (action === "lint") {
    success = await lint({ filenames, lang, lspc });
  } else if (action === "format") {
    success = await format({ filenames, lang, lspc });
  } else {
    console.error(`Unknown action "${action}"}`);
  }

  return success ? 0 : 1;
}

function createLSPClient({ lang }) {
  const language_id = lang.id;

  const current_dir = Gio.File.new_for_path(GLib.get_current_dir());
  if (lang.id === "vala") {
    const api_file = Gio.File.new_for_path(pkg.pkgdatadir).get_child(
      "workbench.vala",
    );
    api_file.copy(
      current_dir.get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null,
    );
  }

  const lspc = new LSPClient(lang.language_server, {
    rootUri: current_dir.get_uri(),
    languageId: language_id,
    quiet: true,
  });
  lspc.connect("exit", () => {
    console.debug(`${language_id} language server exit`);
  });
  lspc.connect("output", (_self, message) => {
    console.debug(
      `${language_id} language server OUT:\n${JSON.stringify(message)}`,
    );
  });
  lspc.connect("input", (_self, message) => {
    console.debug(
      `${language_id} language server IN:\n${JSON.stringify(message)}`,
    );
  });

  return lspc;
}

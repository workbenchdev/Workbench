#!/usr/bin/env -S gjs -m

// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";
import { once } from "../../troll/src/async.js";

import LSPClient from "../lsp/LSPClient.js";
import { applyTextEdits } from "../lsp/sourceview.js";
import { languages } from "./info.js";

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

  let exit_code = 0;

  for await (const filename of filenames) {
    const success = await processFile({ filename, lang, lspc, action });
    if (!success) {
      exit_code = 1;
    }
  }

  return exit_code;
}

async function processFile({ filename, lang, lspc, action }) {
  const file = Gio.File.new_for_path(filename);
  const [contents] = await file.load_contents_async(null);
  const text = new TextDecoder().decode(contents);
  const buffer = new Gtk.TextBuffer({ text });

  const uri = file.get_uri();
  const languageId = lang.id;
  const version = 0;

  await lspc._notify("textDocument/didOpen", {
    textDocument: {
      uri,
      languageId,
      version,
      text: buffer.text,
    },
  });

  let success = false;

  try {
    if (action === "lint") {
      success = await lint({ buffer, file, lang, lspc });
    } else if (action === "format") {
      success = await format({ buffer, file, lang, lspc });
    }
  } catch (err) {
    console.error(err);
  }

  await lspc._notify("textDocument/didClose", {
    textDocument: {
      uri,
    },
  });

  return success;
}

async function formatting({ buffer, file, lang, lspc }) {
  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_formatting
  const text_edits = await lspc._request("textDocument/formatting", {
    textDocument: {
      uri: file.get_uri(),
    },
    options: lang.formatting_options,
  });

  applyTextEdits(text_edits, buffer);
}

async function format({ buffer, file, lang, lspc }) {
  await formatting({ buffer, file, lang, lspc });

  await file.replace_contents_async(
    new TextEncoder().encode(buffer.text),
    null,
    false,
    Gio.FileCreateFlags.REPLACE_DESTINATION,
    null,
  );

  return true;
}

async function lint({ buffer, file, lang, lspc }) {
  const params = await once(
    lspc,
    "notification::textDocument/publishDiagnostics",
  );

  const [{ uri, diagnostics }] = params;
  if (uri !== file.get_uri()) {
    console.error("Unknwon uri", uri);
    return false;
  }

  if (diagnostics.length > 0) {
    console.error(file.get_path(), JSON.stringify(diagnostics, null, 2));
    return false;
  }

  const buffer_tmp = new Gtk.TextBuffer({ text: buffer.text });
  await formatting({ buffer: buffer_tmp, file, lang, lspc });

  if (buffer_tmp.text !== buffer.text) {
    console.error(file.get_path(), "Formatting differs");
    return false;
  }

  return true;
}

function createLSPClient({ lang }) {
  const language_id = lang.id;

  const lspc = new LSPClient(lang.language_server, {
    rootUri: Gio.File.new_for_path(GLib.get_current_dir()).get_uri(),
    languageId: language_id,
    // quiet: false,
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

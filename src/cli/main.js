#!/usr/bin/env -S gjs -m

// G_MESSAGES_DEBUG=re.sonny.Workbench.cli ./src/cli.js blueprint

import "../init.js";

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";
import { once } from "../../troll/src/async.js";

import LSPClient from "../lsp/LSPClient.js";
import { applyTextEdits } from "../lsp/sourceview.js";

Gtk.init();

const formatting_options = {
  tabSize: 2,
  insertSpaces: true,
  trimTrailingWhitespace: true,
  insertFinalNewline: true,
  trimFinalNewlines: true,
};

const languages = {
  vala: {
    args: ["vala-language-server"],
    options: {
      ...formatting_options,
      tabSize: 4,
    },
  },
  javascript: {
    args: [
      "biome",
      "lsp-proxy",
      // src/meson.build installs biome.json there
      `--config-path=${GLib.build_filenamev([pkg.pkgdatadir])}`,
      // `--config-path=${GLib.build_filenamev([
      //   GLib.get_current_dir(),
      //   "./src/languages/javascript",
      // ])}`,
    ],
    options: formatting_options,
  },
  css: {
    args: ["gtkcsslanguageserver"],
    options: formatting_options,
  },
  blueprint: {
    args: ["blueprint-compiler", "lsp"],
    options: formatting_options,
  },
};

// const loop = GLib.MainLoop.new(null, false);

const [action, language, path] = ARGV;

const lang = languages[language];

const file = Gio.File.new_for_path(path);

const buffer = new Gtk.TextBuffer();
const lspc = createLSPClient({ buffer, file });

export async function main() {
  const [contents] = await file.load_contents_async(null);
  const text = new TextDecoder().decode(contents);
  buffer.text = text;

  await lspc.start();
  // await lspc.didChange();

  let success;
  if (action === "lint") {
    success = await lint();
  } else if (action === "format") {
    success = await format();
  }

  return success ? 0 : 1;
}

async function formatting(buffer) {
  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_formatting
  const text_edits = await lspc.request("textDocument/formatting", {
    textDocument: {
      uri: file.get_uri(),
    },
    options: lang.options,
  });

  applyTextEdits(text_edits, buffer);
}

async function format() {
  await formatting(buffer);

  await file.replace_contents_async(
    new TextEncoder().encode(buffer.text),
    null,
    false,
    Gio.FileCreateFlags.REPLACE_DESTINATION,
    null,
  );

  return true;
}

async function lint() {
  const params = await once(
    lspc,
    "notification::textDocument/publishDiagnostics",
  );

  const [{ uri, diagnostics }] = params;
  if (uri !== file.get_uri()) {
    console.log("Unknwon uri", uri);
    return false;
  }

  if (diagnostics.length > 0) {
    console.log(diagnostics);
    return false;
  }

  const buffer_tmp = new Gtk.TextBuffer({ text: buffer.text });
  await formatting(buffer_tmp);

  if (buffer_tmp.text !== buffer.text) {
    console.log("Formatting differs", file.get_path());
    return false;
  }

  return true;
}

function createLSPClient({ buffer, file }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(lang.args, {
    rootUri: file.get_parent().get_uri(),
    uri,
    languageId: language,
    buffer,
  });
  lspc.connect("exit", () => {
    console.debug(`${language} language server exit`);
  });
  lspc.connect("output", (_self, message) => {
    console.debug(
      `${language} language server OUT:\n${JSON.stringify(message)}`,
    );
  });
  lspc.connect("input", (_self, message) => {
    console.debug(
      `${language} language server IN:\n${JSON.stringify(message)}`,
    );
  });

  return lspc;
}

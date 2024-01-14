/* eslint-disable no-restricted-globals */
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

import { formatting } from "./format.js";
import { diagnostic_severities } from "../lsp/LSP.js";

export default async function lint({ filenames, lang, lspc, ci }) {
  let success = true;

  for await (const filename of filenames) {
    const file = Gio.File.new_for_path(filename);
    const [contents] = await file.load_contents_async(null);
    const text = new TextDecoder().decode(contents);
    const buffer = new Gtk.TextBuffer({ text });

    const uri = file.get_uri();
    const languageId = lang.id;
    let version = 0;

    await lspc._notify("textDocument/didOpen", {
      textDocument: {
        uri,
        languageId,
        version: version++,
        text: buffer.text,
      },
    });

    const diagnostics = await waitForDiagnostics({ uri, lspc });

    if (diagnostics.length > 0) {
      printerr(serializeDiagnostics({ file, diagnostics }));
      success = false;
    }

    if (ci) {
      const buffer_tmp = new Gtk.TextBuffer({ text: buffer.text });
      await formatting({ buffer: buffer_tmp, uri, lang, lspc });
      if (buffer_tmp.text === buffer.text) continue;

      printerr(`\n${file.get_path()}\nFormatting differs\n`);
      success = false;
    }
  }

  return success;
}

export function waitForDiagnostics({ uri, lspc }) {
  return new Promise((resolve) => {
    const handler_id = lspc.connect(
      "notification::textDocument/publishDiagnostics",
      (_self, params) => {
        if (uri !== params.uri) return;
        lspc.disconnect(handler_id);
        resolve(params.diagnostics);
      },
    );
  });
}

function serializeDiagnostics({ file, diagnostics }) {
  return (
    `\n${file.get_path()}\n` +
    diagnostics
      .map(({ severity, range, message }) => {
        return (
          diagnostic_severities[severity] +
          "  " +
          range.start.line +
          ":" +
          range.start.character +
          "  " +
          message.split("\n")[0]
        );
      })
      .join("\n") +
    "\n"
  );
}

// Vala Language Server does not support this
// https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocument_pullDiagnostics
// const res = await lspc._request("textDocument/diagnostic", {
//   textDocument: {
//     uri: file.get_uri(),
//   },
// });

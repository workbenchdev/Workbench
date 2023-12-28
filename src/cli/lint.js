import Gtk from "gi://Gtk";

import { openFiles } from "./util.js";
import { formatting } from "./format.js";

export default async function lint({ filenames, lang, lspc }) {
  const documents = await openFiles({ filenames, lang, lspc });

  const diagnostic_payloads = await Promise.all(
    documents.map((document) => waitForDiagnostics({ document, lspc })),
  );

  let success = true;

  for (const { document, diagnostics } of diagnostic_payloads) {
    const { filename, uri, buffer } = document;

    if (diagnostics.length > 0) {
      console.error(filename, JSON.stringify(diagnostics, null, 2));
      success = false;
    } else {
      const buffer_tmp = new Gtk.TextBuffer({ text: buffer.text });
      await formatting({ buffer: buffer_tmp, uri, lang, lspc });
      if (buffer_tmp.text === buffer.text) continue;

      console.error(filename, "Formatting differs");
      success = false;
    }
  }

  return success;
}

function waitForDiagnostics({ document, lspc }) {
  return new Promise((resolve) => {
    const handler_id = lspc.connect(
      "notification::textDocument/publishDiagnostics",
      (_self, { uri, diagnostics }) => {
        if (uri !== document.uri) return;
        lspc.disconnect(handler_id);
        resolve({ document, diagnostics });
      },
    );
  });
}

// Vala Language Server does not support this
// https://microsoft.github.io/language-server-protocol/specifications/lsp/3.18/specification/#textDocument_pullDiagnostics
// const res = await lspc._request("textDocument/diagnostic", {
//   textDocument: {
//     uri: file.get_uri(),
//   },
// });

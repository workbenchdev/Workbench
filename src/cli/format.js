import Gio from "gi://Gio";

import { applyTextEdits } from "../lsp/sourceview.js";
import { openFiles } from "./util.js";

export default async function format({ filenames, lang, lspc }) {
  const documents = await openFiles({ filenames, lang, lspc });

  for await (const { buffer, uri, file } of documents) {
    await formatting({ buffer, uri, lang, lspc });

    await file.replace_contents_async(
      new TextEncoder().encode(buffer.text),
      null,
      false,
      Gio.FileCreateFlags.REPLACE_DESTINATION,
      null,
    );
  }

  return true;
}

export async function formatting({ buffer, uri, lang, lspc }) {
  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_formatting
  const text_edits = await lspc._request("textDocument/formatting", {
    textDocument: {
      uri,
    },
    options: lang.formatting_options,
  });

  applyTextEdits(text_edits, buffer);
}

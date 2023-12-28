import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import { applyTextEdits } from "../lsp/sourceview.js";

export default async function format({ filenames, lang, lspc }) {
  const success = true;

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

    await formatting({ buffer, uri, lang, lspc });

    await file.replace_contents_async(
      new TextEncoder().encode(buffer.text),
      null,
      false,
      Gio.FileCreateFlags.REPLACE_DESTINATION,
      null,
    );
  }

  return success;
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

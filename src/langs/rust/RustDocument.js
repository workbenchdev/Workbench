import { setup } from "./rust.js";

import Document from "../../Document.js";
import { applyTextEdits } from "../../lsp/sourceview.js";

export class RustDocument extends Document {
  constructor(...args) {
    super(...args);

    this.lspc = setup({ document: this });
  }

  async format() {
    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_formatting
    const text_edits = await this.lspc.request("textDocument/formatting", {
      textDocument: {
        uri: this.file.get_uri(),
      },
      options: {
        tabSize: 4,
        insertSpaces: true,
        trimTrailingWhitespace: true,
        insertFinalNewline: true,
        trimFinalNewlines: true,
      },
    });

    applyTextEdits(text_edits, this.buffer);
  }
}

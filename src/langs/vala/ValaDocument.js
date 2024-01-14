import { setup as setupVala } from "./vala.js";

import Document from "../../Document.js";
import { applyTextEdits } from "../../lsp/sourceview.js";

export class ValaDocument extends Document {
  constructor(...args) {
    super(...args);

    this.lspc = setupVala({ document: this });
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

    // vala language server doesn't support diff - it just returns one edit
    // we don't want to loose the cursor position so we use this
    const state = this.code_view.saveState();
    applyTextEdits(text_edits, this.buffer);
    await this.code_view.restoreState(state);
  }
}

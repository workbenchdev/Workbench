import { setup } from "./javascript.js";

import Document from "../../Document.js";
import { applyTextEdits } from "../../lsp/sourceview.js";

export class JavaScriptDocument extends Document {
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
        tabSize: 2,
        insertSpaces: true,
        trimTrailingWhitespace: true,
        insertFinalNewline: true,
        trimFinalNewlines: true,
      },
    });

    // Biome doesn't support diff - it just returns one edit
    // we don't want to loose the cursor position so we use this
    const state = this.code_view.saveState();
    applyTextEdits(text_edits, this.buffer);
    await this.code_view.restoreState(state);
  }
}

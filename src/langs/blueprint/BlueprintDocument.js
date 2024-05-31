import Document from "../../Document.js";
import { applyTextEdits } from "../../lsp/sourceview.js";

import { setup } from "./blueprint.js";

export class BlueprintDocument extends Document {
  constructor(...args) {
    super(...args);

    this.lspc = setup({ document: this });
    this.code_view.lspc = this.lspc;
  }
  async update() {
    return this.lspc.didChange();
  }
  async compile() {
    await this.update();

    let xml = null;

    try {
      ({ xml } = await this.lspc.request("textDocument/x-blueprint-compile", {
        textDocument: {
          uri: this.file.get_uri(),
        },
      }));
    } catch (err) {
      console.debug(err);
    }

    return xml;
  }
  async decompile(text) {
    const { blp } = await this.lspc.request("x-blueprint/decompile", {
      text,
    });
    return blp;
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

    applyTextEdits(text_edits, this.buffer);
  }
}

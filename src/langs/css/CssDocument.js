import { format as prettier } from "../../lib/prettier.js";
import prettier_postcss from "../../lib/prettier-postcss.js";

import Document from "../../Document.js";

export class CssDocument extends Document {
  async format() {
    const code = await prettier(this.buffer.text, {
      parser: "css",
      plugins: [prettier_postcss],
    });
    this.code_view.replaceText(code, true);
  }
}

import * as xml from "../../langs/xml/xml.js";
import Document from "../../Document.js";

export class XmlDocument extends Document {
  async format() {
    const code = xml.format(this.buffer.text, 2);
    this.code_view.replaceText(code, false);
  }
}

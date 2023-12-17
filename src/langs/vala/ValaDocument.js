import { setup as setupVala } from "./vala.js";

import Document from "../../Document.js";

export class ValaDocument extends Document {
  constructor(...args) {
    super(...args);

    this.lspc = setupVala({ document: this });
  }
}

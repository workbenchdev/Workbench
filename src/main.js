import "./init.js";
import "./log_handler.js";
import application from "./application.js";

pkg.initGettext();

import "./language-specs/blueprint.lang";
import "./style.css";
import "./style-dark.css";
import "./libworkbench/workbench-preview-window.blp";

export function main(argv) {
  return application.runAsync(argv);
}

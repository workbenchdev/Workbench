import "./init.js";
import "./log_handler.js";
import application from "./application.js";

pkg.initGettext();

import "./language-specs/blueprint.lang";

export function main(argv) {
  return application.runAsync(argv);
}

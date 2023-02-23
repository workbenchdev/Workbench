import "./init.js";
import "./log_handler.js";
import application from "./application.js";

pkg.initGettext();

export function main(argv) {
  return application.runAsync(argv);
}

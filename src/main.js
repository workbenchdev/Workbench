import "./log_handler.js";
import Application from "./application.js";

pkg.initGettext();

export function main(argv) {
  const application = Application();
  return application.run(argv);
}

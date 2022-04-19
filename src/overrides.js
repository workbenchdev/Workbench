import system from "system";
import logger from "./logger.js";

/*
 * These overrides only exist to make documentation examples
 * work in Workbench - keep them to a minimum
 */

// Makes the app unersponsive - by blocking the mainloop I presume.
// Anyway, code shouldn't be able to exit
system.exit = function exit(code) {
  logger.log(`Intercept exit with status "${code}"`);
};

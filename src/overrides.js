import system from "system";
import logger from "./logger.js";
import GObject from "gi://GObject";

/*
 * These overrides only exist to make documentation examples
 * work in Workbench - keep them to a minimum
 */

// Makes the app unersponsive - by blocking the mainloop I presume.
// Anyway, code shouldn't be able to exit
system.exit = function exit(code) {
  logger.log(`Intercept exit with status "${code}"`);
};

// GTypeName must be unique globally
// there is no unregister equivalent to registerClass and
// this is what GNOME Shell does too according to Verdre
// https://github.com/sonnyp/Workbench/issues/50
// const types = Object.create(null);
// const _registerClass = GObject.registerClass;
// GObject.registerClass = function registerClass(klass, ...args) {
//   const { GTypeName } = klass;
//   types[GTypeName] = (types[GTypeName] || 0) + 1;
//   klass.GTypeName = GTypeName + types[GTypeName];
//   return _registerClass(klass, ...args);
// };

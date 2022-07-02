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
// https://gitlab.gnome.org/GNOME/gnome-shell/-/issues/1011#note_451228
// https://gitlab.gnome.org/GNOME/glib/-/issues/282#note_662735
// https://gitlab.gnome.org/GNOME/glib/-/issues/2336
// https://gitlab.gnome.org/GNOME/glib/-/issues/667
const types = Object.create(null);
const _registerClass = GObject.registerClass;
GObject.registerClass = function registerClass(klass, ...args) {
  const { GTypeName } = klass;
  if (GTypeName) {
    types[GTypeName] = increment(GTypeName);
    klass.GTypeName = GTypeName + types[GTypeName];
  }
  return _registerClass(klass, ...args);
};
function increment(name) {
  return (types[name] || 0) + 1;
}
// This is used to tweak `workbench.template` in order to set the
//  <template class="?"/> to something that will work next time
// Object.registerClass is called with the corresponding GTypeName
export function getClassNameType(name) {
  return name + increment(name);
}

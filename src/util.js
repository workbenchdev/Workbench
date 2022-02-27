import GLib from "gi://GLib";
import Gio from "gi://Gio";

export function logEnum(obj, value) {
  console.log(
    Object.entries(obj).find(([k, v]) => {
      return v === value;
    })[0]
  );
}

// FIXME: does not work with source loaded from resource
// import.meta.url is resource:///re/sonny/Workbench/js/util.js
export function relativePath(path) {
  const [filename] = GLib.filename_from_uri(import.meta.url);
  const dirname = GLib.path_get_dirname(filename);
  return GLib.canonicalize_filename(path, dirname);
}

export const settings = new Gio.Settings({
  schema_id: "re.sonny.Workbench",
  path: "/re/sonny/Workbench/",
});

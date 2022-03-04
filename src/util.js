import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

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

export function promise(object, signal) {
  return new Promise((resolve) => {
    const handler_id = object.connect(signal, (self, ...args) => {
      object.disconnect(handler_id);
      resolve(args);
    });
  });
}

export async function confirm(params) {
  const dialog = new Gtk.MessageDialog({
    ...params,
    modal: true,
    buttons: Gtk.ButtonsType.YES_NO,
  });
  dialog.present();
  const [response_id] = await promise(dialog, "response");
  dialog.close();
  return response_id === Gtk.ResponseType.YES;
}

export function createDataDir() {
  const data_dir = GLib.build_filenamev([
    GLib.get_user_data_dir(),
    "re.sonny.Workbench",
  ]);

  try {
    Gio.File.new_for_path(data_dir).make_directory(null);
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.EXISTS) {
      throw err;
    }
  }

  console.log("cooll", data_dir);

  return data_dir;
}

import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";
import system from "system";

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

  return data_dir;
}

export function getGIRepositoryVersion(repo) {
  const {
    get_major_version = () => "?",
    get_minor_version = () => "?",
    get_micro_version = () => "?",
  } = repo;
  return `${get_major_version()}.${get_minor_version()}.${get_micro_version()}`;
}

export function getGLibVersion() {
  return `${GLib.MAJOR_VERSION}.${GLib.MINOR_VERSION}.${GLib.MICRO_VERSION}`;
}

export function getGjsVersion() {
  const v = system.version.toString();
  return `${v[0]}.${+(v[1] + v[2])}.${+(v[3] + v[4])}`;
}

export function getFlatpakInfo() {
  const keyFile = new GLib.KeyFile();
  try {
    keyFile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
  } catch (err) {
    if (err.code !== GLib.FileError.NOENT) {
      logError(err);
    }
    return null;
  }
  return keyFile;
}

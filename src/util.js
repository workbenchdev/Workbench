import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import GObject from "gi://GObject";
import { getLanguage } from "./common.js";

export const portal = new Xdp.Portal();

export const settings = new Gio.Settings({
  schema_id: pkg.name,
  path: "/re/sonny/Workbench/",
});

export const data_dir = Gio.File.new_for_path(
  GLib.build_filenamev([GLib.get_user_data_dir(), pkg.name]),
);

export function ensureDir(file) {
  try {
    file.make_directory_with_parents(null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }
}

export function getFlatpakInfo() {
  const keyFile = new GLib.KeyFile();
  try {
    keyFile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
  } catch (err) {
    if (!err.matches(GLib.FileError, GLib.FileError.NOENT)) {
      console.error(err);
    }
    return null;
  }
  return keyFile;
}

export { getLanguage };

export function listenProperty(object, property, fn, { initial = false } = {}) {
  if (initial) {
    fn(object[property]);
  }

  const signal = `notify::${property}`;
  const handler_id = object.connect(signal, () => {
    fn(object[property]);
  });
  return {
    block() {
      GObject.signal_handler_block(object, handler_id);
    },
    unblock() {
      GObject.signal_handler_unblock(object, handler_id);
    },
    disconnect() {
      return object.disconnect(handler_id);
    },
  };
}

export function decode(data) {
  if (data instanceof GLib.Bytes) {
    data = data.toArray();
  }
  return new TextDecoder().decode(data);
}

export function encode(data) {
  return new TextEncoder().encode(
    data.to_string?.() || data?.toString?.() || data,
  );
}

// Take a function that return a promise and returns a function
// that will discard all calls during a pending execution
// it's like a job queue with a max size of 1 and no concurrency
export function unstack(fn, onError = console.error) {
  let latest_promise;
  let latest_arguments;
  let pending = false;

  return function unstack_wrapper(...args) {
    latest_arguments = args;

    if (pending) return;

    if (!latest_promise)
      latest_promise = fn(...latest_arguments).catch(onError);

    pending = true;
    latest_promise.finally(() => {
      pending = false;
      latest_promise = fn(...latest_arguments).catch(onError);
    });
  };
}

export const demos_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("demos");

// There is no copy directory function
export async function copyDirectory(source, destination) {
  const enumerator = await source.enumerate_children_async(
    `${Gio.FILE_ATTRIBUTE_STANDARD_NAME},${Gio.FILE_ATTRIBUTE_STANDARD_IS_HIDDEN}`,
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    GLib.PRIORITY_DEFAULT,
    null,
  );

  for await (const file_info of enumerator) {
    if (file_info.get_is_hidden()) continue;

    const child = enumerator.get_child(file_info);
    const child_dest = destination.get_child(child.get_basename());

    if (file_info.get_file_type() === Gio.FileType.DIRECTORY) {
      await child_dest.make_directory_async(GLib.PRIORITY_DEFAULT, null);
      await copyDirectory(child, child_dest);
      continue;
    }

    try {
      await child.copy_async(
        child_dest,
        Gio.FileCopyFlags.NONE,
        GLib.PRIORITY_DEFAULT,
        null,
        null,
      );
    } catch (err) {
      if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
        throw err;
      }
    }
  }
}

export function getNowForFilename() {
  return new GLib.DateTime().format("%Y-%m-%d %H-%M-%S");
}

// https://gitlab.gnome.org/GNOME/libadwaita/-/issues/746
export function makeDropdownFlat(dropdown) {
  dropdown.get_first_child().add_css_class("flat");
}

export function buildRuntimePath(...args) {
  return GLib.build_filenamev([
    GLib.getenv("XDG_RUNTIME_DIR"),
    GLib.getenv("FLATPAK_ID"),
    ...args,
  ]);
}

export function quitOnLastWindowClose(self) {
  const { application } = self;
  const application_windows = [...application.get_windows()];
  const is_last_window_open = application_windows
    .filter((w) => w !== self)
    .every((w) => !w.get_mapped());

  if (is_last_window_open) {
    application.quit();
  }

  return false;
}

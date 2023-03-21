import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import GObject from "gi://GObject";

export const portal = new Xdp.Portal();

export const settings = new Gio.Settings({
  schema_id: pkg.name,
  path: "/re/sonny/Workbench/",
});

export function createDataDir() {
  const data_dir = GLib.build_filenamev([GLib.get_user_data_dir(), pkg.name]);

  try {
    Gio.File.new_for_path(data_dir).make_directory(null);
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.EXISTS) {
      throw err;
    }
  }

  return data_dir;
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

export const languages = [
  {
    id: "blueprint",
    name: "Blueprint",
    panel: "ui",
    extensions: [".blp"],
    types: [],
    document: null,
  },
  {
    id: "xml",
    name: "GTK Builder",
    panel: "ui",
    extensions: [".ui"],
    types: ["application/x-gtk-builder"],
    document: null,
  },
  {
    id: "javascript",
    name: "JavaScript",
    panel: "code",
    extensions: [".js", ".mjs"],
    types: ["text/javascript", "application/javascript"],
    document: null,
  },
  {
    id: "css",
    name: "CSS",
    panel: "style",
    extensions: [".css"],
    types: ["text/css"],
    document: null,
  },
  {
    id: "vala",
    name: "Vala",
    panel: "code",
    extensions: [".vala"],
    types: ["text/x-vala"],
    document: null,
  },
];

export function getLanguage(id) {
  return languages.find(
    (language) => language.id.toLowerCase() === id.toLowerCase(),
  );
}

export function getLanguageForFile(file) {
  let content_type;

  try {
    const info = file.query_info(
      "standard::content-type",
      Gio.FileQueryInfoFlags.NONE,
      null,
    );
    content_type = info.get_content_type();
  } catch (err) {
    logError(err);
  }

  if (!content_type) {
    return;
  }

  const name = file.get_basename();

  return languages.find(({ extensions, types }) => {
    return (
      types.includes(content_type) ||
      extensions.some((ext) => name.endsWith(ext))
    );
  });
}

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

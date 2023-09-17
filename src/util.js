import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import GObject from "gi://GObject";

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
    if (err.code !== Gio.IOErrorEnum.EXISTS) {
      throw err;
    }
  }
}

export function getFlatpakInfo() {
  const keyFile = new GLib.KeyFile();
  try {
    keyFile.load_from_file("/.flatpak-info", GLib.KeyFileFlags.NONE);
  } catch (err) {
    if (err.code !== GLib.FileError.NOENT) {
      console.error(err);
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
    placeholder: "// Sorry, this demo is not available in Vala yet.",
  },
  {
    id: "rust",
    name: "Rust",
    panel: "code",
    extensions: [".rs"],
    types: ["text/x-rust"],
    document: null,
    placeholder: "// Sorry, this demo is not available in Rust yet.",
  },
];

export function getLanguage(id) {
  return languages.find(
    (language) => language.id.toLowerCase() === id.toLowerCase(),
  );
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

export const demos_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("Library/demos");

export const rust_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/rust/template");

export function readDemoFile(demo_name, file_name) {
  const file = demos_dir.get_child(demo_name).get_child(file_name);

  let str;

  try {
    str = decode(file.load_contents(null)[1]);
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.NOT_FOUND) {
      throw err;
    }
    str = "";
  }

  return str;
}

export function getDemo(name) {
  const demo = JSON.parse(readDemoFile(name, "main.json"));
  demo.name = name;
  return demo;
}

export function getNowForFilename() {
  return new GLib.DateTime().format("%Y-%m-%d %H-%M-%S");
}

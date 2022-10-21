import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Xdp from "gi://Xdp";
import { rangeEquals } from "./lsp/LSP.js";

export const portal = new Xdp.Portal();

export function logEnum(obj, value) {
  console.log(
    Object.entries(obj).find(([k, v]) => {
      return v === value;
    })[0]
  );
}

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
    (language) => language.id.toLowerCase() === id.toLowerCase()
  );
}

export function getLanguageForFile(file) {
  let content_type;

  try {
    const info = file.query_info(
      "standard::content-type",
      Gio.FileQueryInfoFlags.NONE,
      null
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

export function connect_signals(target, signals) {
  return Object.entries(signals).map(([signal, handler]) => {
    return target.connect_after(signal, handler);
  });
}

export function disconnect_signals(target, handler_ids) {
  handler_ids.forEach((handler_id) => target.disconnect(handler_id));
}

export function replaceBufferText(buffer, text, scroll_start = true) {
  // this is against GtkSourceView not accounting an empty-string to empty-string change as user-edit
  if (text === "") {
    text = " ";
  }
  buffer.begin_user_action();
  buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
  buffer.insert(buffer.get_start_iter(), text, -1);
  buffer.end_user_action();
  scroll_start && buffer.place_cursor(buffer.get_start_iter());
}

export function decode(data) {
  if (data instanceof GLib.Bytes) {
    data = data.toArray();
  }
  return new TextDecoder().decode(data);
}

// Take a function that return a promise and returns a function
// that will discard all calls during a pending execution
// it's like a job queue with a max size of 1 and no concurrency
export function unstack(fn) {
  let latest_promise;
  let latest_arguments;
  let pending = false;

  return function unstack_wrapper(...args) {
    latest_arguments = args;

    if (pending) return;

    if (!latest_promise) latest_promise = fn(...latest_arguments);

    pending = true;
    latest_promise.finally(() => {
      pending = false;
      latest_promise = fn(...latest_arguments);
    });
  };
}

export function getItersAtRange(buffer, { start, end }) {
  let start_iter;
  let end_iter;

  // Apply the tag on the whole line
  // if diagnostic start and end are equals such as
  // Blueprint-Error 13:12 to 13:12 Could not determine what kind of syntax is meant here
  if (rangeEquals(start, end)) {
    [, start_iter] = buffer.get_iter_at_line(start.line);
    [, end_iter] = buffer.get_iter_at_line(end.line);
    end_iter.forward_to_line_end();
    start_iter.forward_find_char((char) => char !== "", end_iter);
  } else {
    [, start_iter] = buffer.get_iter_at_line_offset(
      start.line,
      start.character
    );
    [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);
  }

  return [start_iter, end_iter];
}

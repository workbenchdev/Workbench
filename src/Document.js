import Source from "gi://GtkSource";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

export default function Document({ code_view, file, lang }) {
  const { buffer } = code_view;
  let handler_id = null;

  const source_file = new Source.File({
    location: file,
  });

  start();

  function save() {
    saveSourceBuffer({ source_file, buffer }).catch(logError);
  }

  function start() {
    stop();
    handler_id = buffer.connect("modified-changed", () => {
      if (!buffer.get_modified()) return;
      save();
    });
  }

  function stop() {
    if (handler_id !== null) {
      buffer.disconnect(handler_id);
      handler_id = null;
    }
  }

  function load() {
    return loadSourceBuffer({ source_file, buffer, lang });
  }

  return { start, stop, save, code_view, file, load };
}

async function saveSourceBuffer({ source_file, buffer }) {
  const file_saver = new Source.FileSaver({
    buffer,
    file: source_file,
  });
  const success = await file_saver.save_async(
    GLib.PRIORITY_DEFAULT,
    null,
    null,
  );

  if (success) {
    buffer.set_modified(false);
  }
}

async function loadSourceBuffer({ source_file, buffer, lang }) {
  const file_loader = new Source.FileLoader({
    buffer,
    file: source_file,
  });
  let success;
  try {
    success = await file_loader.load_async(GLib.PRIORITY_DEFAULT, null, null);
  } catch (err) {
    if (err.code === Gio.IOErrorEnum.NOT_FOUND) {
      if (lang.placeholder) {
        buffer.set_text(lang.placeholder, -1);
      }
      success = true;
    } else {
      throw err;
    }
  }

  if (success) {
    buffer.set_modified(false);
  }
}

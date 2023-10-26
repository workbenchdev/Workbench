import Source from "gi://GtkSource";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

export default function Document({ session, code_view, lang }) {
  const { buffer } = code_view;
  let handler_id = null;

  const file = session.file.get_child(lang.default_file);
  const source_file = new Source.File({
    location: file,
  });

  start();

  function save() {
    saveSourceBuffer({ source_file, buffer })
      .catch(console.error)
      .finally(() => {
        try {
          session.settings.set_boolean("edited", true);
        } catch (err) {
          console.error(err);
        }
      });
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
  try {
    await file_loader.load_async(GLib.PRIORITY_DEFAULT, null, null);
  } catch (err) {
    if (!err.matches?.(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) {
      throw err;
    }
  }

  buffer.set_modified(false);
}

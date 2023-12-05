import Source from "gi://GtkSource";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

export default function Document({ session, code_view, lang }) {
  const { buffer } = code_view;
  let modified_changed_handler_id = null;
  let changed_signal_handler_id = null;

  const file = session.file.get_child(lang.default_file);

  const file_monitor = file.monitor(Gio.FileMonitorFlags.NONE, null);

  function watchFile() {
    unwatchFile();
    changed_signal_handler_id = file_monitor.connect(
      "changed",
      (_self, _file, _other_file, event_type) => {
        const event_name = Object.entries(Gio.FileMonitorEvent).find(
          ([_key, value]) => value === event_type,
        )?.[0];
        console.log("wow", event_name);
      },
    );
  }

  function unwatchFile() {
    if (changed_signal_handler_id === null) return;
    file_monitor.disconnect(changed_signal_handler_id);
    changed_signal_handler_id = null;
  }

  const source_file = new Source.File({
    location: file,
  });

  start();

  function save() {
    unwatchFile();
    saveSourceBuffer({ source_file, buffer })
      .catch(console.error)
      .finally(() => {
        watchFile();
        try {
          session.settings.set_boolean("edited", true);
        } catch (err) {
          console.error(err);
        }
      });
  }

  function start() {
    stop();
    modified_changed_handler_id = buffer.connect("modified-changed", () => {
      if (!buffer.get_modified()) return;
      save();
    });
    watchFile();
  }

  function stop() {
    if (modified_changed_handler_id !== null) {
      buffer.disconnect(modified_changed_handler_id);
      modified_changed_handler_id = null;
    }
    unwatchFile();
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

async function loadSourceBuffer({ source_file, buffer }) {
  const file_loader = new Source.FileLoader({
    buffer,
    file: source_file,
  });
  try {
    await file_loader.load_async(GLib.PRIORITY_DEFAULT, null, null);
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.NOT_FOUND)) {
      throw err;
    }
  }

  buffer.set_modified(false);
}

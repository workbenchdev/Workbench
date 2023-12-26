import Source from "gi://GtkSource";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

export default class Document {
  handler_id = null;

  constructor({ session, code_view, lang }) {
    this.code_view = code_view;
    this.buffer = code_view.buffer;
    this.session = session;
    this.source_view = code_view.source_view;

    const file = session.file.get_child(lang.default_file);
    this.file = file;
    this.source_file = new Source.File({
      location: file,
    });

    this.start();
  }

  save() {
    const { source_file, buffer, session } = this;
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

  start() {
    this.stop();
    this.handler_id = this.buffer.connect("modified-changed", () => {
      if (!this.buffer.get_modified()) return;
      this.save();
    });
  }

  stop() {
    if (this.handler_id !== null) {
      this.buffer.disconnect(this.handler_id);
      this.handler_id = null;
    }
  }

  load() {
    const { source_file, buffer } = this;
    return loadSourceBuffer({ source_file, buffer });
  }

  format() {}
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

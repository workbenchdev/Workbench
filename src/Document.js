import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { settings } from "./util.js";

const language_manager = Source.LanguageManager.get_default();

export default function Document({
  user_datadir,
  source_view,
  lang,
  placeholder,
  ext,
}) {
  const { buffer } = source_view;

  buffer.set_language(language_manager.get_language(lang));

  const file = Gio.File.new_for_path(
    GLib.build_filenamev([user_datadir, `state.${ext}`])
  );

  const source_file = new Source.File({
    location: file,
  });

  load();

  buffer.connect("modified-changed", () => {
    if (!buffer.get_modified()) return;
    save();
    settings.set_boolean("has-edits", true);
  });

  function load() {
    const file_loader = new Source.FileLoader({
      buffer,
      file: source_file,
    });
    file_loader.load_async(
      GLib.PRIORITY_DEFAULT,
      null,
      null,
      (self, result) => {
        let success;
        try {
          success = file_loader.load_finish(result);
        } catch (err) {
          if (err.code !== Gio.IOErrorEnum.NOT_FOUND) {
            logError(err);
          }
        }
        if (success) buffer.set_modified(false);
        if (!success) buffer.set_text(placeholder, -1);
        settings.set_boolean("has-edits", false);
      }
    );
  }

  function save() {
    const file_saver = new Source.FileSaver({
      buffer,
      file: source_file,
    });
    file_saver.save_async(GLib.PRIORITY_DEFAULT, null, null, (self, result) => {
      const success = file_saver.save_finish(result);
      if (success) buffer.set_modified(false);
    });
  }

  return {
    source_view,
    buffer,
  };
}

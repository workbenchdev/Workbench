import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { settings } from "./util.js";
import { promiseTask } from "./troll/src/util.js";

export default function Document({
  data_dir,
  source_view,
  lang,
  placeholder,
  ext,
}) {
  const { buffer } = source_view;

  buffer.set_language(language_manager.get_language(lang));

  const file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, `state.${ext}`])
  );

  const source_file = new Source.File({
    location: file,
  });

  loadSourceBuffer({ file: source_file, buffer })
    .then((success) => {
      if (!success) buffer.set_text(placeholder, -1);
      settings.set_boolean("has-edits", false);
    })
    .catch(logError);

  buffer.connect("modified-changed", () => {
    if (!buffer.get_modified()) return;
    saveSourceBuffer({ file: source_file, buffer }).catch(logError);
    settings.set_boolean("has-edits", true);
  });

  return { source_view, buffer };
}

async function saveSourceBuffer({ file, buffer }) {
  const file_saver = new Source.FileSaver({
    buffer,
    file,
  });
  const success = await promiseTask(
    file_saver,
    "save_async",
    "save_finish",
    GLib.PRIORITY_DEFAULT,
    null,
    null
  );
  if (success) {
    buffer.set_modified(false);
  }
}

async function loadSourceBuffer({ file, buffer }) {
  const file_loader = new Source.FileLoader({
    buffer,
    file,
  });
  let success;
  try {
    success = await promiseTask(
      file_loader,
      "load_async",
      "load_finish",
      GLib.PRIORITY_DEFAULT,
      null,
      null
    );
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.NOT_FOUND) {
      throw err;
    }
  }

  if (success) {
    buffer.set_modified(false);
  }
  return success;
}

const language_manager = new Source.LanguageManager();
language_manager.set_search_path([
  ...language_manager.get_search_path(),
  "resource:///re/sonny/Workbench/language-specs",
]);

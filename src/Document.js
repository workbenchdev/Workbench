import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { replaceBufferText } from "./util.js";
import { promiseTask } from "../troll/src/util.js";

export default function Document({
  data_dir,
  source_view,
  lang,
  placeholder,
  ext,
}) {
  const { buffer } = source_view;
  let handler_id = null;

  buffer.set_language(language_manager.get_language(lang));

  const file = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, `state.${ext}`])
  );

  const source_file = new Source.File({
    location: file,
  });

  loadSourceBuffer({ file: source_file, buffer })
    .then((success) => {
      if (!success) replaceBufferText(buffer, placeholder, true);
    })
    .catch(logError);
  start();

  function save() {
    saveSourceBuffer({ file: source_file, buffer }).catch(logError);
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

  return { start, stop, save, source_view, buffer, file };
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
language_manager.append_search_path(
  "resource:///re/sonny/Workbench/language-specs"
);

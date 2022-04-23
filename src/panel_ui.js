import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

export default function panel_ui({
  builder,
  source_view,
  lang,
  placeholder,
  ext,
  user_datadir,
}) {
  const language_manager = new Source.LanguageManager();
  language_manager.set_search_path([
    ...language_manager.get_search_path(),
    "resource:///re/sonny/Workbench/language-specs",
  ]);

  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");
  dropdown_ui_lang.set_active_id(lang);

  let mode;
  let source_file;

  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_ui_lang
    .get_first_child()
    .get_first_child()
    .get_style_context()
    .add_class("flat");

  dropdown_ui_lang.connect("changed", setMode);

  const { buffer } = source_view;

  function setMode() {
    mode = dropdown_ui_lang.get_active_id();
    console.log(mode);
    buffer.set_language(language_manager.get_language("blueprint"));

    const file = Gio.File.new_for_path(
      GLib.build_filenamev([user_datadir, `state.${ext}`])
    );

    source_file = new Source.File({
      location: file,
    });

    load();
  }

  setMode();

  buffer.connect("modified-changed", () => {
    const modified = buffer.get_modified();
    if (!modified) return;
    save();
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
        if (!success) reset();
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

  function reset() {
    const text = placeholder;
    buffer.set_text(text, -1);
  }

  function get_text() {
    const text = source_view.buffer.text.trim();
    if (mode === "xml" || !text) return text;

    return compileBlueprint(source_file.location.get_path());
  }

  return { reset, source_view, get_text };
}

function compileBlueprint(path) {
  try {
    console.time("blueprint-compiler compile");
    const result = GLib.spawn_command_line_sync(
      `blueprint-compiler compile ${path}`
    );
    console.timeEnd("blueprint-compiler compile");

    let [, stdout, stderr, status] = result;

    if (stdout instanceof Uint8Array) stdout = new TextDecoder().decode(stdout);

    if (status !== 0) {
      if (stderr instanceof Uint8Array) {
        console.error(new TextDecoder().decode(stderr));
      }
      console.log(status, stdout);

      throw new Error("Could not compile blueprint");
    }

    return stdout;
  } catch (e) {
    logError(e);
    return "";
  }
}

const lsp = {
  init() {
    // The process starts running immediately after this function is called. Any
    // error thrown here will be a result of the process failing to start, not
    // the success or failure of the process itself.
    let proc = Gio.Subprocess.new(
      // The program and command options are passed as a list of arguments
      ["blueprint-compiler", , "lsp"],

      // The flags control what I/O pipes are opened and how they are directed
      Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE
    );
    this.proc = proc;
  },
  stop() {
    this.proc.force_exit();
  },
};

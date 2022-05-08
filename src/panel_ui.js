import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "./lsp/LSPClient.js";

export default function panel_ui({
  builder,
  source_view,
  lang,
  placeholder,
  ext,
  data_dir,
}) {
  const language_manager = new Source.LanguageManager();
  language_manager.set_search_path([
    ...language_manager.get_search_path(),
    "resource:///re/sonny/Workbench/language-specs",
  ]);

  // const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");
  // dropdown_ui_lang.set_active_id(lang);

  let mode;
  let source_file;

  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  // dropdown_ui_lang
  //   .get_first_child()
  //   .get_first_child()
  //   .get_style_context()
  //   .add_class("flat");

  // dropdown_ui_lang.connect("changed", setMode);

  const { buffer } = source_view;

  function setMode() {
    // mode = dropdown_ui_lang.get_active_id();
    // console.log(mode);
    buffer.set_language(language_manager.get_language("blueprint"));

    const file = Gio.File.new_for_path(
      GLib.build_filenamev([data_dir, `state.${ext}`])
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

  const p_lsp_client = getLSPClient();

  async function get_text() {
    const text = source_view.buffer.text.trim();
    if (mode === "xml" || !text) return text;

    const lsp_client = await p_lsp_client;
    const { xml } = await lsp_client.request("x-blueprintcompiler/compile", {
      text,
    });
    return xml;
  }

  return { reset, source_view, get_text };
}

async function getLSPClient() {
  const lsp_client = new LSPClient(["blueprint-compiler", "lsp"]);

  // lsp_client.connect("output", (self, message) => {
  //   console.log("OUT:\n", message);
  // });

  // lsp_client.connect("input", (self, message) => {
  //   console.log("IN:\n", message);
  // });

  await lsp_client.request("initialize");
  // Make Blueprint language server cache Gtk 4
  // to make subsequence call faster (~500ms -> ~3ms)
  await lsp_client.request("x-blueprintcompiler/compile", {
    text: "using Gtk 4.0;\nBox {}",
  });

  return lsp_client;
}

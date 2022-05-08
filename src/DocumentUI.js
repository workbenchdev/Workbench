import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { settings, language_manager } from "./util.js";
import { getDemoSources } from "./Library.js";

import LSPClient from "./lsp/LSPClient.js";

export default function DocumentUI({ builder, data_dir, source_view }) {
  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");

  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_ui_lang
    .get_first_child()
    .get_first_child()
    .get_style_context()
    .add_class("flat");

  settings.bind(
    "ui-lang",
    dropdown_ui_lang,
    "active_id",
    Gio.SettingsBindFlags.DEFAULT
  );

  // dropdown_ui_lang.connect("changed", setMode);

  const { buffer } = source_view;
  let lang;
  let file;
  let source_file;
  let ext;
  let placeholder;

  settings.connect_after("changed::ui-lang", setMode);
  async function setMode() {
    if (source_file) {
      try {
        await save();
      } catch (err) {
        logError(err);
      }
    }

    lang = settings.get_string("ui-lang");
    // dropdown_ui_lang.set_active_id(lang);
    ext = lang === "xml" ? "ui" : "blp";
    file = Gio.File.new_for_path(
      GLib.build_filenamev([data_dir, `state.${ext}`])
    );
    source_file = new Source.File({
      location: file,
    });
    placeholder = getDemoSources("Welcome")[lang];
    buffer.set_language(language_manager.get_language(lang));
    load();
  }
  setMode();

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

  async function getBuilderString() {
    let str = source_view.buffer.text;
    if (lang === "blueprint") {
      str = await compileBlueprint(str);
    }

    return str.trim();
  }

  return {
    source_view,
    buffer,
    getBuilderString,
  };
}

let lsp_client;
async function compileBlueprint(text) {
  if (!lsp_client) {
    lsp_client = new LSPClient(["blueprint-compiler", "lsp"]);

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
  }

  const { xml } = await lsp_client.request("x-blueprintcompiler/compile", {
    text,
  });

  return xml;
}

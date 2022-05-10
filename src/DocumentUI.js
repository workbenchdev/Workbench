import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { settings, language_manager } from "./util.js";
import { getDemoSources } from "./Library.js";

import LSPClient from "./lsp/LSPClient.js";
import { loadSourceBuffer, saveSourceBuffer } from "./Document.js";

const { addSignalMethods } = imports.signals;

export default function DocumentUI({
  source_view_xml,
  source_view_blueprint,
  builder,
  data_dir,
}) {
  const document = {};

  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");

  let value = "";

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

  const source_view = source_view_blueprint;

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
  buffer.connect("changed", async () => {
    let str = buffer.text;

    if (lang === "blueprint") {
      try {
        str = await compileBlueprint(str);
      } catch (err) {
        return logError;
      }
    }

    str.trim();
    value = str;

    document.emit("changed");
  });

  function load() {
    loadSourceBuffer({ file: source_file, buffer })
      .then((success) => {
        if (!success) buffer.set_text(placeholder, -1);
        settings.set_boolean("has-edits", false);
      })
      .catch(logError);
  }

  function save() {
    saveSourceBuffer({ file: source_file, buffer }).catch(logError);
  }

  async function getBuilderString() {
    // let str = source_view.buffer.text;
    // if (lang === "blueprint") {
    //   str = await compileBlueprint(str);
    // }

    // return str.trim();
    return value;
  }

  Object.assign(document, { source_view, buffer, getBuilderString });
  addSignalMethods(document);
  return document;
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

    // await lsp_client.request("initialize");
    // Make Blueprint language server cache Gtk 4
    // to make subsequence call faster (~500ms -> ~3ms)
    // await lsp_client.request("x-blueprintcompiler/compile", {
    //   text: "using Gtk 4.0;\nBox {}",
    // });
  }

  const { xml } = await lsp_client.request("x-blueprintcompiler/compile", {
    text,
  });

  return xml;
}

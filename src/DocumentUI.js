import Source from "gi://GtkSource?version=5";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import { settings, language_manager } from "./util.js";
import { getDemoSources } from "./Library.js";

import LSPClient from "./lsp/LSPClient.js";
import { loadSourceBuffer, saveSourceBuffer } from "./Document.js";

export default function DocumentUI({
  source_view_xml,
  source_view_blueprint,
  builder,
  data_dir,
}) {
  source_view_xml.buffer.set_language(language_manager.get_language("xml"));
  source_view_blueprint.buffer.set_language(
    language_manager.get_language("blueprint")
  );

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
  settings.bind(
    "ui-lang",
    builder.get_object("stack_ui"),
    "visible-child-name",
    Gio.SettingsBindFlags.DEFAULT
  );

  const file_blueprint = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, `state.blp`])
  );
  const source_file_blueprint = new Source.File({
    location: file_blueprint,
  });
  const file_xml = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, `state.xml`])
  );
  const source_file_xml = new Source.File({
    location: file_xml,
  });
  const { blueprint: placeholder_blueprint, xml: placeholder_xml } =
    getDemoSources("Welcome");

  loadSourceBuffer({
    file: source_file_blueprint,
    buffer: source_view_blueprint.buffer,
  })
    .then((success) => {
      if (!success)
        source_view_blueprint.buffer.set_text(placeholder_blueprint, -1);
      settings.set_boolean("has-edits", false);
    })
    .catch(logError);
  source_view_blueprint.buffer.connect("modified-changed", () => {
    if (!source_view_blueprint.buffer.get_modified()) return;
    saveSourceBuffer({
      file: source_file_blueprint,
      buffer: source_view_blueprint.buffer,
    }).catch(logError);
    settings.set_boolean("has-edits", true);
  });

  loadSourceBuffer({
    file: source_file_xml,
    buffer: source_view_xml.buffer,
  })
    .then((success) => {
      if (!success) source_view_xml.buffer.set_text(placeholder_xml, -1);
      settings.set_boolean("has-edits", false);
    })
    .catch(logError);
  source_view_xml.buffer.connect("modified-changed", () => {
    if (!source_view_xml.buffer.get_modified()) return;
    saveSourceBuffer({
      file: source_file_xml,
      buffer: source_view_xml.buffer,
    }).catch(logError);
    settings.set_boolean("has-edits", true);
  });

  source_view_blueprint.buffer.connect("changed", () => {
    compileBlueprint(source_view_blueprint.buffer.text)
      .then((xml) => {
        source_view_xml.buffer.text = xml.trim();
      })
      .catch(logError);
  });
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

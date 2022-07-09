import Gio from "gi://Gio";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";

import LSPClient from "./lsp/LSPClient.js";
import { LSPError, diagnostic_severities } from "./lsp/LSP.js";
import {
  getLanguage,
  settings,
  connect_signals,
  disconnect_signals,
  replaceBufferText,
} from "./util.js";

import { getPid, once } from "./troll/src/util.js";
import logger from "./logger.js";

const { addSignalMethods } = imports.signals;

export default function PanelUI({ builder, data_dir, version, term_console }) {
  let lang;

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

  const buffer_blueprint = getLanguage("blueprint").document.buffer;
  const buffer_xml = getLanguage("xml").document.buffer;

  const blueprint = createBlueprintClient({
    data_dir,
    panel,
    buffer: buffer_blueprint,
  });

  let document_version = 0;
  prepareSourceView(getLanguage("blueprint").document.source_view);

  async function convertToXML() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    let xml;

    try {
      xml = await compileBlueprint(buffer_blueprint.text);
    } catch (err) {
      if (err instanceof LSPError) {
        logBlueprintError(err);
        return;
      }
      throw err;
    }
    replaceBufferText(buffer_xml, xml);
    settings.set_string("ui-lang", "xml");
  }
  const button_ui_export_xml = builder.get_object("button_ui_export_xml");
  button_ui_export_xml.connect("clicked", () => {
    convertToXML().catch(logError);
  });

  async function convertToBlueprint() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    let blp;

    try {
      blp = await decompileXML(buffer_xml.text);
    } catch (err) {
      if (err instanceof LSPError) {
        logBlueprintError(err);
        return;
      }
      throw err;
    }
    replaceBufferText(buffer_blueprint, blp);
    settings.set_string("ui-lang", "blueprint");
  }
  const button_ui_export_blueprint = builder.get_object(
    "button_ui_export_blueprint"
  );
  button_ui_export_blueprint.connect("clicked", () => {
    convertToBlueprint().catch(logError);
  });

  const button_ui = builder.get_object("button_ui");
  const panel_ui = builder.get_object("panel_ui");
  settings.bind("show-ui", button_ui, "active", Gio.SettingsBindFlags.DEFAULT);
  button_ui.bind_property(
    "active",
    panel_ui,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
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

  let handler_ids = null;

  async function update() {
    let xml;
    if (lang.id === "xml") {
      xml = lang.document.buffer.text;
    } else {
      xml = await compileBlueprint(lang.document.buffer.text);
    }
    panel.xml = xml || "";
    panel.emit("updated");
  }

  function onUpdate() {
    update().catch(logBlueprintError);
  }

  function start() {
    stop();
    lang = getLanguage(settings.get_string("ui-lang"));
    // cannot use "changed" signal as it triggers many time for pasting
    handler_ids = connect_signals(lang.document.buffer, {
      "end-user-action": onUpdate,
      undo: onUpdate,
      redo: onUpdate,
    });
  }

  function stop() {
    if (handler_ids !== null) {
      disconnect_signals(lang.document.buffer, handler_ids);
      handler_ids = null;
    }
  }

  settings.connect_after("changed::ui-lang", () => {
    start();
    onUpdate();
  });

  start();

  async function setupLSP() {
    if (blueprint.proc) return;
    blueprint.start();

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await blueprint.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: "re.sonny.Workbench",
        version,
      },
      // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#clientCapabilities
      capabilities: {
        textDocument: {
          publishDiagnostics: {},
          "x-blueprintcompiler/publishCompiled": {},
        },
      },
      locale: "en",
    });

    await blueprint.notify("textDocument/didOpen", {
      textDocument: {
        uri: "workbench://state.blp",
        languageId: "blueprint",
        version: ++document_version,
        text: buffer_blueprint.text,
      },
    });
  }

  async function compileBlueprint() {
    await setupLSP();

    await blueprint.notify("textDocument/didChange", {
      textDocument: {
        uri: "workbench://state.blp",
        version: ++document_version,
      },
      contentChanges: [buffer_blueprint.text],
    });

    const [{ xml }] = await once(
      blueprint,
      "notification::textDocument/x-blueprintcompiler/publishCompiled"
    );

    return xml;
  }

  async function decompileXML(text) {
    await setupLSP();

    const { blp } = await blueprint.request("x-blueprintcompiler/decompile", {
      text,
    });
    return blp;
  }

  panel.start = start;
  panel.stop = stop;
  panel.update = update;

  return panel;
}

function logBlueprintError(err) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_CRITICAL, {
    MESSAGE: `${err.message}`,
    SYSLOG_IDENTIFIER: "re.sonny.Workbench",
  });
}

// function logBlueprintInfo(info) {
//   GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
//     MESSAGE: `${info.line + 1}:${info.col} ${info.message}`,
//     SYSLOG_IDENTIFIER: "re.sonny.Workbench",
//   });
// }

function logBlueprintDiagnostic({ range, message, severity }) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
    MESSAGE: `Blueprint-${diagnostic_severities[severity]} ${
      range.start.line + 1
    }:${range.start.character} to ${range.end.line + 1}:${
      range.end.character
    } ${message}`,
    SYSLOG_IDENTIFIER: "re.sonny.Workbench",
  });
}

function createBlueprintClient({ data_dir, panel, buffer }) {
  const file_blueprint_logs = Gio.File.new_for_path(
    GLib.build_filenamev([data_dir, `blueprint-logs`])
  );
  file_blueprint_logs.replace_contents(
    " ",
    null,
    false,
    Gio.FileCreateFlags.REPLACE_DESTINATION,
    null
  );
  const blueprint = new LSPClient([
    // "/home/sonny/Projects/Workbench/blueprint-compiler/blueprint-compiler.py",
    "blueprint-compiler",
    "lsp",
    "--logfile",
    file_blueprint_logs.get_path(),
  ]);
  blueprint.connect("exit", () => {
    logger.debug("blueprint exit");
  });
  blueprint.connect("output", (self, message) => {
    logger.debug(`blueprint OUT:\n${JSON.stringify(message)}`);
  });
  blueprint.connect("input", (self, message) => {
    logger.debug(`blueprint IN:\n${JSON.stringify(message)}`);
  });

  blueprint.connect(
    "notification::textDocument/publishDiagnostics",
    (self, params) => {
      handleDiagnostics(params.diagnostics, buffer);
    }
  );

  return blueprint;
}

function prepareSourceView(source_view) {
  const tag_table = source_view.buffer.get_tag_table();
  const tag = new Gtk.TextTag({
    name: "error",
    underline: Pango.Underline.ERROR,
  });
  tag_table.add(tag);
}

function handleDiagnostics(diagnostics, buffer) {
  buffer.remove_tag_by_name(
    "error",
    buffer.get_start_iter(),
    buffer.get_end_iter()
  );

  diagnostics.forEach((d) => handleDiagnostic(d, buffer));
}

function handleDiagnostic(diagnostic, buffer) {
  logBlueprintDiagnostic(diagnostic);

  const [start_iter, end_iter] = get_iters_at_range(buffer, diagnostic.range);
  buffer.apply_tag_by_name("error", start_iter, end_iter);
}

function get_iters_at_range(buffer, { start, end }) {
  let start_iter;
  let end_iter;

  // Blueprint-Error 13:12 to 13:12 Could not determine what kind of syntax is meant here
  if (start.line === end.line && start.character === end.character) {
    [, start_iter] = buffer.get_iter_at_line(start.line);
    start_iter.forward_sentence_end();
    start_iter.backward_sentence_start();
    [, end_iter] = buffer.get_iter_at_line(end.line);
    end_iter.forward_sentence_end();
  } else {
    [, start_iter] = buffer.get_iter_at_line_offset(
      start.line,
      start.character
    );
    [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);
  }

  return [start_iter, end_iter];
}

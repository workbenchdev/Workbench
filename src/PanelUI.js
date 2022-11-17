import Gio from "gi://Gio";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk";

import LSPClient from "./lsp/LSPClient.js";
import { LSPError } from "./lsp/LSP.js";
import {
  getLanguage,
  settings,
  connect_signals,
  disconnect_signals,
  replaceBufferText,
  unstack,
  handleDiagnostics,
  prepareSourceView,
} from "./util.js";

import { getPid, once } from "../troll/src/util.js";
import WorkbenchHoverProvider from "./WorkbenchHoverProvider.js";

const { addSignalMethods } = imports.signals;

const SYSLOG_IDENTIFIER = pkg.name;

export default function PanelUI({
  application,
  builder,
  data_dir,
  term_console,
}) {
  let lang;

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

  const buffer_blueprint = getLanguage("blueprint").document.buffer;
  const buffer_xml = getLanguage("xml").document.buffer;
  const provider = new WorkbenchHoverProvider();

  const blueprint = createBlueprintClient({
    data_dir,
    buffer: buffer_blueprint,
    provider,
  });

  let document_version = 0;
  prepareSourceView({
    source_view: getLanguage("blueprint").document.source_view,
    provider,
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

  const stack_ui = builder.get_object("stack_ui");
  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_ui_lang.get_first_child().get_style_context().add_class("flat");

  async function convertToXML() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    const xml = await compileBlueprint(buffer_blueprint.text);
    replaceBufferText(buffer_xml, xml);
    settings.set_int("ui-language", 0);
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
    settings.set_int("ui-language", 1);
  }
  const button_ui_export_blueprint = builder.get_object(
    "button_ui_export_blueprint"
  );
  button_ui_export_blueprint.connect("clicked", () => {
    convertToBlueprint().catch(logError);
  });

  settings.bind(
    "ui-language",
    dropdown_ui_lang,
    "selected",
    Gio.SettingsBindFlags.DEFAULT
  );

  const button_ui_experimental_blueprint = builder.get_object(
    "button_ui_experimental_blueprint"
  );
  button_ui_experimental_blueprint.connect("clicked", () => {
    const modal = builder.get_object("modal_blueprint_experimental");
    modal.set_transient_for(application.get_active_window());
    modal.present();
  });
  const button_blueprint_documentation = builder.get_object(
    "button_blueprint_documentation"
  );
  button_blueprint_documentation.connect("clicked", () => {
    Gtk.show_uri(
      null,
      "https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/",
      null
    );
  });

  dropdown_ui_lang.connect("notify::selected-item", switchLanguage);
  function switchLanguage() {
    const language = getLanguage(dropdown_ui_lang.selected_item.string);
    stack_ui.set_visible_child_name(language.id);
    button_ui_experimental_blueprint.visible = language.id === "blueprint";
  }
  switchLanguage();

  let handler_ids = null;

  const scheduleUpdate = unstack(update);
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

  function start() {
    stop();
    lang = getLanguage(dropdown_ui_lang.selected_item.string);
    // cannot use "changed" signal as it triggers many time for pasting
    handler_ids = connect_signals(lang.document.buffer, {
      "end-user-action": scheduleUpdate,
      undo: scheduleUpdate,
      redo: scheduleUpdate,
    });
  }

  function stop() {
    if (handler_ids !== null) {
      disconnect_signals(lang.document.buffer, handler_ids);
      handler_ids = null;
    }
  }

  settings.connect_after("changed::ui-language", () => {
    start();
    scheduleUpdate();
  });

  start();

  const uri = "workbench://state.blp";

  async function setupLSP() {
    if (blueprint.proc) return;
    blueprint.start();

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await blueprint.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: pkg.name,
        version: pkg.version,
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
        uri,
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
        uri,
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
  panel.panel = panel_ui;

  return panel;
}

function logBlueprintError(err) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_CRITICAL, {
    MESSAGE: `${err.message}`,
    SYSLOG_IDENTIFIER,
  });
}

// function logBlueprintInfo(info) {
//   GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
//     MESSAGE: `${info.line + 1}:${info.col} ${info.message}`,
//     SYSLOG_IDENTIFIER,
//   });
// }

function createBlueprintClient({ data_dir, buffer, provider }) {
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
    // "/app/bin/blueprint-compiler",
    "blueprint-compiler",
    "lsp",
    "--logfile",
    file_blueprint_logs.get_path(),
  ]);
  blueprint.connect("exit", () => {
    console.debug("blueprint exit");
  });
  blueprint.connect("output", (self, message) => {
    console.debug(`blueprint OUT:\n${JSON.stringify(message)}`);
  });
  blueprint.connect("input", (self, message) => {
    console.debug(`blueprint IN:\n${JSON.stringify(message)}`);
  });

  blueprint.connect(
    "notification::textDocument/publishDiagnostics",
    (self, { diagnostics }) => {
      handleDiagnostics({
        language: "Blueprint",
        diagnostics,
        buffer,
        provider,
      });
    }
  );

  return blueprint;
}

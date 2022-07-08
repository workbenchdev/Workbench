import Gio from "gi://Gio";
import GObject from "gi://GObject";
import GLib from "gi://GLib";

import LSPClient, { LSPError } from "./lsp/LSPClient.js";
import {
  getLanguage,
  settings,
  connect_signals,
  disconnect_signals,
  replaceBufferText,
} from "./util.js";

import { getPid } from "./troll/src/util.js";
import logger from "./logger.js";

const { addSignalMethods } = imports.signals;

export default function PanelUI({ builder, data_dir, term_console }) {
  let lang;
  const blueprint = createBlueprintClient({ data_dir });

  async function convertToXML() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    let xml;

    try {
      xml = await compileBlueprint(
        getLanguage("blueprint").document.buffer.text
      );
    } catch (err) {
      if (err instanceof LSPError) {
        logBluePrintError(err);
        return;
      }
      throw err;
    }
    replaceBufferText(getLanguage("xml").document.buffer, xml);
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
      blp = await decompileXML(getLanguage("xml").document.buffer.text);
    } catch (err) {
      if (err instanceof LSPError) {
        logBluePrintError(err);
        return;
      }
      throw err;
    }
    replaceBufferText(getLanguage("blueprint").document.buffer, blp);
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

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

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
      xml = "";
      // await compileBlueprint(lang.document.buffer.text);
    }
    panel.xml = xml || "";
    panel.emit("updated");
  }

  function onUpdate() {
    update().catch(logBluePrintError);
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

  // async function compileBlueprint(text) {
  //   if (!blueprint.proc) {
  //     blueprint.start();

  //     await blueprint.request("initialize");
  //     await blueprint.notify("textDocument/didOpen", {
  //       textDocument: {
  //         uri: "re.sonny.Workbench/state.blp",
  //         languageId: "blueprint",
  //         version: Date.now(),
  //         text,
  //       },
  //     });
  //     // Make Blueprint language server cache Gtk 4
  //     // to make subsequence call faster (~500ms -> ~3ms)
  //     // await lsp_client.request("x-blueprintcompiler/compile", {
  //     //   text: "using Gtk 4.0;\nBox {}",
  //     // });
  //   }

  //   // const { xml } = await blueprint.request("x-blueprintcompiler/compile", {
  //   //   text,
  //   // });
  //   // console.clear();

  //   return "";
  // }

  (async () => {
    // if (!blueprint.proc) {
    //   blueprint.start();
    // }

    let i = 0;

    const buffer = getLanguage("blueprint").document.buffer;

    let pid = getPid();

    async function youpi() {
      if (!blueprint.proc) {
        blueprint.start();

        // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
        const res = await blueprint.request("initialize", {
          processId: pid,
          clientInfo: {
            name: "Workbench",
            version: i,
          },
          locale: "en",
        });
        console.log(res);
        await blueprint.notify("textDocument/didOpen", {
          textDocument: {
            uri: "workbench://state.blp",
            languageId: "blueprint",
            version: ++i,
            text: buffer.text,
          },
        });
        // Make Blueprint language server cache Gtk 4
        // to make subsequence call faster (~500ms -> ~3ms)
        // await lsp_client.request("x-blueprintcompiler/compile", {
        //   text: "using Gtk 4.0;\nBox {}",
        // });
      }

      await blueprint.notify("textDocument/didChange", {
        textDocument: {
          uri: "workbench://state.blp",
          version: ++i,
        },
        contentChanges: [buffer.text],
      });
    }

    buffer.connect("end-user-action", () => {
      youpi().catch(logError);
    });

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#diagnosticSeverity
    const severities = {
      1: "Error",
      2: "Warning",
      3: "Information",
      4: "Hint",
    };

    blueprint.connect(
      "notification::textDocument/publishDiagnostics",
      (self, params) => {
        console.clear();
        params.diagnostics.forEach(({ range, message, severity }) => {
          logger.log(
            `Blueprint-${severities[severity]} ${range.start.line + 1}:${
              range.start.character
            } to ${range.end.line + 1}:${range.end.character} ${message}`
          );
        });
      }
    );

    blueprint.connect(
      "notification::textDocument/x-blueprintcompiler/publishCompiled",
      (self, params) => {
        panel.xml = params.xml;
        panel.emit("updated");
      }
    );
  })().catch(logError);

  async function compileBlueprint(text) {
    if (!blueprint.proc) {
      blueprint.start();

      // await blueprint.request("initialize");
      // Make Blueprint language server cache Gtk 4
      // to make subsequence call faster (~500ms -> ~3ms)
      // await blueprint.request("x-blueprintcompiler/compile", {
      //   text: "using Gtk 4.0;\nusing Adw 1;\nAdwBin {}",
      // });
    }

    const { xml, info } = await blueprint.request(
      "x-blueprintcompiler/compile",
      {
        text,
      }
    );

    if (info.length) {
      info.forEach(logBluePrintInfo);
    } else {
      term_console.clear();
    }

    return xml;
  }

  async function decompileXML(text) {
    if (!blueprint.proc) {
      blueprint.start();

      // await blueprint.request("initialize");
      // Make Blueprint language server cache Gtk 4
      // to make subsequence call faster (~500ms -> ~3ms)
      // await blueprint.request("x-blueprintcompiler/compile", {
      //   text: "using Gtk 4.0;\nusing Adw 1;\nAdwBin {}",
      // });
    }

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

function logBluePrintError(err) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_CRITICAL, {
    MESSAGE: `${err.message}`,
    SYSLOG_IDENTIFIER: "re.sonny.Workbench",
  });
}

function logBluePrintInfo(info) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
    MESSAGE: `${info.line + 1}:${info.col} ${info.message}`,
    SYSLOG_IDENTIFIER: "re.sonny.Workbench",
  });
}

function createBlueprintClient({ data_dir }) {
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
    logger.debug(`blueprint OUT:\n${message}`);
  });
  blueprint.connect("input", (self, message) => {
    logger.debug(`blueprint IN:\n${message}`);
  });
  return blueprint;
}

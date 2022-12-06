import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";

import {
  getLanguage,
  prepareSourceView,
  handleDiagnostics,
} from "../../util.js";
import WorkbenchHoverProvider from "../../WorkbenchHoverProvider.js";
import { getPid, once } from "../../../troll/src/util.js";

export function setup({ data_dir }) {
  const buffer = getLanguage("blueprint").document.buffer;
  const provider = new WorkbenchHoverProvider();

  // FIXME: Blueprint language server emits a KeyError for this
  // const state_file = getLanguage("blueprint").document.file;
  // const uri = state_file.get_uri();
  const uri = "workbench://state.blp";
  let document_version = 0;
  prepareSourceView({
    source_view: getLanguage("blueprint").document.source_view,
    provider,
  });

  const lspc = createLSPClient({
    buffer: buffer,
    provider,
  });

  async function setupLSP() {
    if (lspc.proc) return;

    lspc.start();

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await lspc.request("initialize", {
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
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
      locale: "en",
    });

    await lspc.notify("textDocument/didOpen", {
      textDocument: {
        uri,
        languageId: "blueprint",
        version: ++document_version,
        text: buffer.text,
      },
    });
  }
  setupLSP().catch(logError);

  function createLSPClient({ buffer, provider }) {
    const file_blueprint_logs = Gio.File.new_for_path(
      GLib.build_filenamev([data_dir, "blueprint-logs"]),
    );
    file_blueprint_logs.replace_contents(
      " ",
      null,
      false,
      Gio.FileCreateFlags.REPLACE_DESTINATION,
      null,
    );
    const lspc = new LSPClient([
      __DEV__
        ? GLib.build_filenamev([
            pkg.sourcedir,
            "blueprint-compiler/blueprint-compiler.py",
          ])
        : "/app/bin/blueprint-compiler",
      "lsp",
    ]);
    lspc.connect("exit", () => {
      console.debug("blueprint language server exit");
    });
    lspc.connect("output", (_self, message) => {
      console.debug(
        `blueprint language server OUT:\n${JSON.stringify(message)}`,
      );
    });
    lspc.connect("input", (_self, message) => {
      console.debug(
        `blueprint language server IN:\n${JSON.stringify(message)}`,
      );
    });

    lspc.connect(
      "notification::textDocument/publishDiagnostics",
      (_self, { diagnostics }) => {
        handleDiagnostics({
          language: "Blueprint",
          diagnostics,
          buffer,
          provider,
        });
      },
    );

    return lspc;
  }

  return {
    lspc,
    async update(text) {
      return lspc.notify("textDocument/didChange", {
        textDocument: {
          uri,
          version: ++document_version,
        },
        contentChanges: [{ text }],
      });
    },
    async compile(text) {
      await setupLSP();

      await lspc.notify("textDocument/didChange", {
        textDocument: {
          uri,
          version: ++document_version,
        },
        contentChanges: [{ text }],
      });

      const [{ xml }] = await once(
        lspc,
        "notification::textDocument/x-blueprintcompiler/publishCompiled",
      );

      return xml;
    },
    async decompile(text) {
      await setupLSP();

      const { blp } = await lspc.request("x-blueprintcompiler/decompile", {
        text,
      });
      return blp;
    },
  };
}

const SYSLOG_IDENTIFIER = pkg.name;

export function logBlueprintError(err) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_CRITICAL, {
    MESSAGE: `${err.message}`,
    SYSLOG_IDENTIFIER,
  });
}

export function logBlueprintInfo(info) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
    MESSAGE: `${info.line + 1}:${info.col} ${info.message}`,
    SYSLOG_IDENTIFIER,
  });
}

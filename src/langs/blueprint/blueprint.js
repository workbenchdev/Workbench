import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";

import { once } from "../../../troll/src/util.js";

export function setup({ data_dir, document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    uri: file.get_uri(),
    data_dir,
  });

  lspc.start().catch(logError);

  return {
    lspc,
    async update() {
      return lspc.didChange();
    },
    async compile() {
      await lspc.didChange();

      const [{ xml }] = await once(
        lspc,
        "notification::textDocument/x-blueprintcompiler/publishCompiled",
        { timeout: 5000 },
      );

      return xml;
    },
    async decompile(text) {
      const { blp } = await lspc.request(
        "x-blueprintcompiler/decompile",
        {
          text,
        },
        { timeout: 5000 },
      );
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

function createLSPClient({ code_view, data_dir, uri }) {
  const bin = __DEV__
    ? GLib.build_filenamev([
        pkg.sourcedir,
        "blueprint-compiler/blueprint-compiler.py",
      ])
    : "/app/bin/blueprint-compiler";

  const lspc = new LSPClient([bin, "lsp"], {
    rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    uri,
    languageId: "blueprint",
    buffer: code_view.buffer,
  });
  lspc.capabilities.textDocument["x-blueprintcompiler/publishCompiled"] = {};

  lspc.connect("exit", () => {
    console.debug("blueprint language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`blueprint language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`blueprint language server IN:\n${JSON.stringify(message)}`);
  });

  lspc.connect(
    "notification::textDocument/publishDiagnostics",
    (_self, params) => {
      if (params.uri !== uri) {
        return;
      }
      code_view.handleDiagnostics(params.diagnostics);
    },
  );

  return lspc;
}

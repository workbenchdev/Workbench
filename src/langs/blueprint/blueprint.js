import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";

export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  lspc.start().catch(logError);

  return {
    lspc,
    async update() {
      return lspc.didChange();
    },
    async compile() {
      await lspc.didChange();

      let xml = null;

      try {
        ({ xml } = await lspc.request("textDocument/x-blueprint-compile", {
          textDocument: {
            uri: file.get_uri(),
          },
        }));
      } catch (err) {
        console.debug(err);
      }

      return xml;
    },
    async decompile(text) {
      const { blp } = await lspc.request("x-blueprint/decompile", {
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

function createLSPClient({ code_view, file }) {
  const bin = "/app/bin/blueprint-compiler";
  const uri = file.get_uri();
  // const bin = GLib.build_filenamev([
  //   pkg.sourcedir,
  //   "blueprint-compiler/blueprint-compiler.py",
  // ]);

  const lspc = new LSPClient([bin, "lsp"], {
    rootUri: file.get_parent().get_uri(),
    uri,
    languageId: "blueprint",
    buffer: code_view.buffer,
  });

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

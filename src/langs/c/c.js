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
  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(logError);
  });
}

function createLSPClient({ code_view, file }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(
    [
      // "/usr/lib/sdk/vala/bin/vala-language-server",
      "vala-language-server",
    ],
    {
      rootUri: file.get_parent().get_uri(),
      uri,
      languageId: "vala",
      buffer: code_view.buffer,
    },
  );
  lspc.connect("exit", () => {
    console.debug("vala language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`vala language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`vala language server IN:\n${JSON.stringify(message)}`);
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

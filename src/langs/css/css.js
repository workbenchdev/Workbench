import Gio from "gi://Gio";

import LSPClient from "../../lsp/LSPClient.js";

export function setup({ data_dir, document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    uri: file.get_uri(),
    data_dir,
  });

  lspc.start().catch(logError);
  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(logError);
  });
}

function createLSPClient({ uri, code_view, data_dir }) {
  const lspc = new LSPClient(["gtkcsslanguageserver"], {
    rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    uri,
    languageId: "css",
    buffer: code_view.buffer,
  });

  lspc.connect("exit", () => {
    console.debug("gtkcsslanguageserver language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`gtkcsslanguageserver language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`gtkcsslanguageserver language server IN:\n${JSON.stringify(message)}`);
  });

  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_publishDiagnostics
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

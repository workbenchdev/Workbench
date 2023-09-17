import LSPClient from "../../lsp/LSPClient.js";

export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  lspc.start().catch(console.error);
  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(console.error);
  });

  return {
    lspc,
    async completion(iter_cursor) {
      log(iter_cursor.get_line_offset());
      // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_completion
      return lspc.request("textDocument/completion", {
        textDocument: {
          uri: file.get_uri(),
        },
        position: {
          line: iter_cursor.get_line(),
          character: iter_cursor.get_line_offset() - 1,
        },
      });
    },
  };
}

function createLSPClient({ code_view, file }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(["gtkcsslanguageserver"], {
    rootUri: file.get_parent().get_uri(),
    uri,
    languageId: "css",
    buffer: code_view.buffer,
  });

  lspc.connect("exit", () => {
    console.debug("gtkcsslanguageserver language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(
      `gtkcsslanguageserver language server OUT:\n${JSON.stringify(message)}`,
    );
  });
  lspc.connect("input", (_self, message) => {
    console.debug(
      `gtkcsslanguageserver language server IN:\n${JSON.stringify(message)}`,
    );
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

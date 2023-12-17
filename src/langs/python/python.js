import LSPClient from "../../lsp/LSPClient.js";

// Initializes the LSP and sets an error handling strategy.
// The document is a reference to the current text in the python section.
export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  lspc.start().catch(console.error);
}

function createLSPClient({ code_view, file }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(
    [
      "ruff-lsp",
    ],
    {
      rootUri: file.get_parent().get_uri(),
      uri,
      languageId: "python3",
      buffer: code_view.buffer,
    },
  );

  lspc.connect("exit", () => {
    console.debug("python language server exit");
  });

  lspc.connect("output", (_self, message) => {
    console.debug(`python language server OUT:\n${JSON.stringify(message)}`);
  });

  lspc.connect("input", (_self, message) => {
    console.debug(`python language server IN:\n${JSON.stringify(message)}`);
  });

  lspc.connect(
    "notification::textDocument/publishDiagnostics",
    (_self, params) => {
      // Check, if the current python file is affected
      if (params.uri !== uri) {
        return;
      }
      code_view.handleDiagnostics(params.diagnostics);
    },
  );

  return lspc;
}

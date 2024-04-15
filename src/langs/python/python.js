import { PYTHON_LSP_CONFIG, createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";

export function setup({ document }) {
  const { file, buffer, code_view } = document;

  const lspc = createLSPClient({
    lang: getLanguage("python"),
    root_uri: file.get_parent().get_uri(),
    quiet: true,
  });

  lspc.request("workspace/didChangeConfiguration", {
    settings: PYTHON_LSP_CONFIG,
  });

  lspc.buffer = buffer;
  lspc.uri = file.get_uri();
  lspc.connect(
    "notification::textDocument/publishDiagnostics",
    (_self, params) => {
      if (params.uri !== file.get_uri()) {
        return;
      }
      code_view.handleDiagnostics(params.diagnostics);
    },
  );

  lspc.start().catch(console.error);

  buffer.connect("modified-changed", () => {
    if (!buffer.get_modified()) return;
    lspc.didChange().catch(console.error);
  });

  return lspc;
}

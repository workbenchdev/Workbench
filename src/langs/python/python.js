import { createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";

export function setup({ document }) {
  const { file, buffer, code_view } = document;

  const lspcs = createLSPClient({
    lang: getLanguage("python"),
    root_uri: file.get_parent().get_uri(),
    quiet: false,
  });

  const combinedDiagnostics = {};

  for (const lspc of lspcs) {
    lspc.buffer = buffer;
    lspc.uri = file.get_uri();
    lspc.connect(
      "notification::textDocument/publishDiagnostics",
      (self, params) => {
        if (params.uri !== file.get_uri()) {
          return;
        }
        combinedDiagnostics[self.argv[0]] = params.diagnostics;

        let totalDiagnostics = [];
        for (const d of Object.values(combinedDiagnostics)) {
          totalDiagnostics = totalDiagnostics.concat(...d);
        }

        code_view.handleDiagnostics(totalDiagnostics);
      },
    );

    lspc.start().catch(console.error);

    buffer.connect("modified-changed", () => {
      if (!buffer.get_modified()) return;
      lspc.didChange().catch(console.error);
    });
  }

  return lspcs;
}

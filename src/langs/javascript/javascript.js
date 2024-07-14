import Gio from "gi://Gio";

import { createLSPClient } from "../../common.js";
import { getLanguage, copy } from "../../util.js";

export function setup({ document }) {
  const { file, buffer, code_view } = document;

  const lspc = createLSPClient({
    lang: getLanguage("javascript"),
    root_uri: file.get_parent().get_uri(),
    quiet: true,
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

const javascript_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/javascript/template");

export async function setupJavascriptProject(destination, document) {
  const destination_file = await copy(
    "jsconfig.json",
    javascript_template_dir,
    destination,
    Gio.FileCopyFlags.NONE,
  );

  // Notify the language server that the jsconfig file was created
  // to initialize diagnostics and type checkings
  await document.lspc.notify("workspace/didCreateFile", {
    files: [{ uri: destination_file.get_uri() }],
  });
}

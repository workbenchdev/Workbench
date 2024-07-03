import Gio from "gi://Gio";

import { createLSPClient } from "../../common.js";
import { copy, getLanguage } from "../../util.js";
import { isTypeScriptEnabled } from "../../Extensions/Extensions.js";

export function setup({ document }) {
  if (!isTypeScriptEnabled()) return;

  const { file, buffer, code_view } = document;

  const lspc = createLSPClient({
    lang: getLanguage("typescript"),
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

const typescript_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/typescript/template");

export async function setupTypeScriptProject(destination, document) {
  const destination_file = await copy(
    "tsconfig.json",
    typescript_template_dir,
    destination,
    Gio.FileCopyFlags.NONE,
  );

  // Notify the language server that the tsconfig file was created
  // to initialized diagnostics and type checkings
  document.lspc._notify("workspace/didCreateFile", {
    files: [{ uri: destination_file.get_uri() }],
  });
}

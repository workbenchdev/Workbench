import Gio from "gi://Gio";

import { createLSPClient } from "../../common.js";
import { getLanguage, copy } from "../../util.js";
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

export async function setupTypeScriptProject(destination) {
  const types_destination = destination.get_child("types");

  if (!types_destination.query_exists(null)) {
    types_destination.make_directory_with_parents(null);
  }

  return Promise.all([
    copy(
      "types/ambient.d.ts",
      typescript_template_dir,
      types_destination,
      Gio.FileCopyFlags.NONE,
    ),
    copy(
      "types/gi-module.d.ts",
      typescript_template_dir,
      types_destination,
      Gio.FileCopyFlags.NONE,
    ),
    copy(
      "tsconfig.json",
      typescript_template_dir,
      destination,
      Gio.FileCopyFlags.NONE,
    ),
  ]);
}

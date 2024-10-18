import Gio from "gi://Gio";

import { isValaAvailable } from "../../Extensions/Extensions.js";
import { createLSPClient } from "../../common.js";
import { getLanguage, copy } from "../../util.js";

export function setup({ document }) {
  if (!isValaAvailable()) return;

  const { file, buffer, code_view } = document;

  // VLS needs the project to be already setup once it starts,
  // otherwise it won't pick it up later.
  setupValaProject(file.get_parent()).catch(console.error);

  const lspc = createLSPClient({
    lang: getLanguage("vala"),
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

const vala_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/vala/template");

export async function setupValaProject(destination) {
  return Promise.all([
    copy(
      "meson.build",
      vala_template_dir,
      destination,
      Gio.FileCopyFlags.OVERWRITE,
    ),
    copy(
      "workbench.vala",
      vala_template_dir,
      destination,
      Gio.FileCopyFlags.OVERWRITE,
    ),
  ]);
}

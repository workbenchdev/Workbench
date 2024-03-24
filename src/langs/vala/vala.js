import Gio from "gi://Gio";

import { isValaEnabled } from "../../Extensions/Extensions.js";
import { createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";

export function setup({ document }) {
  if (!isValaEnabled()) return;

  const { file, buffer, code_view } = document;

  const api_file = Gio.File.new_for_path(pkg.pkgdatadir).get_child(
    "workbench.vala",
  );
  api_file.copy(
    file.get_parent().get_child("workbench.vala"),
    Gio.FileCopyFlags.OVERWRITE,
    null,
    null,
  );

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

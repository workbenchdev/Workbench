import Gio from "gi://Gio";

import { createLSPClient } from "../../common.js";
import { getLanguage, copy } from "../../util.js";
import { isRustAvailable } from "../../Extensions/Extensions.js";

export function setup({ document }) {
  if (!isRustAvailable()) return;

  const { file, buffer, code_view } = document;

  const lspc = createLSPClient({
    lang: getLanguage("rust"),
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

const rust_template_dir = Gio.File.new_for_path(
  pkg.pkgdatadir,
).resolve_relative_path("langs/rust/template");

export async function setupRustProject(destination) {
  return Promise.all([
    copy("Cargo.toml", rust_template_dir, destination, Gio.FileCopyFlags.NONE),
    copy("Cargo.lock", rust_template_dir, destination, Gio.FileCopyFlags.NONE),
  ]);
}

export async function installRustLibraries(destination) {
  return Promise.all([
    copy("lib.rs", rust_template_dir, destination, Gio.FileCopyFlags.OVERWRITE),
    copy(
      "workbench.rs",
      rust_template_dir,
      destination,
      Gio.FileCopyFlags.OVERWRITE,
    ),
  ]);
}

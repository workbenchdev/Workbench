import Gio from "gi://Gio";
import GLib from "gi://GLib";

import { createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";

export function setup({ document }) {
  const { file, buffer, code_view } = document;

  const lspc = createLSPClient({
    lang: getLanguage("rust"),
    root_uri: file.get_parent().get_uri(),
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

async function copy(filename, source_dir, dest_dir, flags) {
  const file = source_dir.get_child(filename);
  try {
    await file.copy_async(
      dest_dir.get_child(file.get_basename()),
      flags,
      GLib.PRIORITY_DEFAULT,
      null,
      null,
      null,
    );
  } catch (err) {
    if (!err.matches(Gio.IOErrorEnum, Gio.IOErrorEnum.EXISTS)) {
      throw err;
    }
  }
}

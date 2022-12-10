import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";

export function setup({ data_dir, document }) {
  const { file: state_file, code_view } = document;

  const api_file = Gio.File.new_for_path(
    GLib.build_filenamev([pkg.pkgdatadir, "workbench-api.vala"]),
  );

  const uri = state_file.get_uri();

  api_file.copy(
    Gio.File.new_for_path(data_dir).get_child("workbench.vala"),
    Gio.FileCopyFlags.OVERWRITE,
    null,
    null,
  );

  const lspc = createLSPClient({
    code_view,
    uri,
    data_dir,
    state_file,
  });

  lspc.start().catch(logError);
  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(logError);
  });
}

function createLSPClient({ code_view, uri, data_dir, state_file }) {
  const lspc = new LSPClient(
    [
      // "/usr/lib/sdk/vala/bin/vala-language-server",
      "vala-language-server",
    ],
    {
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
      uri,
      languageId: "vala",
      buffer: code_view.buffer,
    },
  );
  lspc.connect("exit", () => {
    console.debug("vala language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`vala language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`vala language server IN:\n${JSON.stringify(message)}`);
  });

  lspc.connect(
    "notification::textDocument/publishDiagnostics",
    (_self, { diagnostics, uri }) => {
      if (!state_file.equal(Gio.File.new_for_uri(uri))) {
        return;
      }
      code_view.handleDiagnostics(diagnostics);
    },
  );

  return lspc;
}

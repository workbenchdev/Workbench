import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../lsp/LSPClient.js";

import { getLanguage, prepareSourceView, handleDiagnostics } from "../util.js";
import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { getPid } from "../../troll/src/util.js";

export function setup({ data_dir }) {
  const buffer = getLanguage("vala").document.buffer;
  const state_file = getLanguage("vala").document.file;
  const provider = new WorkbenchHoverProvider();

  const api_file = Gio.File.new_for_path(
    GLib.build_filenamev([pkg.pkgdatadir, "workbench-api.vala"]),
  );

  let document_version = 0;
  prepareSourceView({
    source_view: getLanguage("vala").document.source_view,
    provider,
  });

  const lspc = createLSPClient({
    buffer: buffer,
    provider,
  });

  async function setupLSP() {
    if (lspc.proc) return;
    lspc.start();

    api_file.copy(
      Gio.File.new_for_path(data_dir).get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null,
    );

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await lspc.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: "re.sonny.Workbench",
        version: pkg.name,
      },
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    });

    await lspc.notify("textDocument/didOpen", {
      textDocument: {
        uri: state_file.get_uri(),
        languageId: "vala",
        version: ++document_version,
        text: buffer.text,
      },
    });
  }
  setupLSP().catch(logError);

  function createLSPClient({ buffer, provider }) {
    const lspc = new LSPClient([
      // "/usr/lib/sdk/vala/bin/vala-language-server",
      "vala-language-server",
    ]);
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
        handleDiagnostics({ language: "Vala", diagnostics, buffer, provider });
      },
    );

    buffer.connect("modified-changed", () => {
      if (!buffer.get_modified()) return;
      sendChanges().catch(logError);
    });

    return lspc;
  }

  async function sendChanges() {
    await setupLSP();

    await lspc.notify("textDocument/didChange", {
      textDocument: {
        uri: state_file.get_uri(),
        version: ++document_version,
      },
      contentChanges: [{ text: buffer.text }],
    });
  }
}

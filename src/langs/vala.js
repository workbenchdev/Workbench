import Gio from "gi://Gio";
import GLib from "gi://GLib";

import LSPClient from "../lsp/LSPClient.js";

import { getLanguage, prepareSourceView, handleDiagnostics } from "../util.js";
import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { getPid } from "../../troll/src/util.js";

export function setup({ data_dir }) {
  const buffer_vala = getLanguage("vala").document.buffer;
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

  const vls = createVLSClient({
    buffer: buffer_vala,
    provider,
  });

  async function setupLSP() {
    if (vls.proc) return;
    vls.start();

    api_file.copy(
      Gio.File.new_for_path(data_dir).get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null,
    );

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await vls.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: "re.sonny.Workbench",
        version: pkg.name,
      },
      rootPath: data_dir,
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    });

    await vls.notify("textDocument/didOpen", {
      textDocument: {
        uri: state_file.get_uri(),
        languageId: "vala",
        version: ++document_version,
        text: buffer_vala.text,
      },
    });
  }
  setupLSP().catch(logError);

  function createVLSClient({ buffer, provider }) {
    const vls = new LSPClient([
      // "/usr/lib/sdk/vala/bin/vala-language-server",
      "vala-language-server",
    ]);
    vls.connect("exit", () => {
      console.debug("vls exit");
    });
    vls.connect("output", (_self, message) => {
      console.debug(`vls OUT:\n${JSON.stringify(message)}`);
    });
    vls.connect("input", (_self, message) => {
      console.debug(`vls IN:\n${JSON.stringify(message)}`);
    });

    vls.connect(
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
      updateVLS().catch(logError);
    });

    return vls;
  }

  async function updateVLS() {
    await setupLSP();

    await vls.notify("textDocument/didChange", {
      textDocument: {
        uri: state_file.get_uri(),
        version: ++document_version,
      },
      contentChanges: [{ text: buffer_vala.text }],
    });
  }
}

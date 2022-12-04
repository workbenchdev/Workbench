import Gio from "gi://Gio";

import LSPClient from "../lsp/LSPClient.js";

import { getLanguage, prepareSourceView, handleDiagnostics } from "../util.js";
import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { getPid } from "../../troll/src/util.js";

export function setup({ data_dir }) {
  const buffer = getLanguage("javascript").document.buffer;
  const state_file = getLanguage("javascript").document.file;
  const provider = new WorkbenchHoverProvider();

  let document_version = 0;
  prepareSourceView({
    source_view: getLanguage("javascript").document.source_view,
    provider,
  });

  const lspc = createLSPClient({
    buffer: buffer,
    provider,
  });

  async function setupLSP() {
    if (lspc.proc) return;
    lspc.start();

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await lspc.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: "re.sonny.Workbench",
        version: pkg.name,
      },
      capabilities: {
        workspace: {
          configuration: true,
        },
      },
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    });

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialized
    await lspc.notify("initialized", {});

    await lspc.notify("textDocument/didOpen", {
      textDocument: {
        uri: state_file.get_uri(),
        languageId: "javascript",
        version: ++document_version,
        text: buffer.text,
      },
    });
  }
  setupLSP().catch(logError);

  function createLSPClient({ buffer, provider }) {
    const lspc = new LSPClient(["rome", "lsp-proxy"]);
    lspc.connect("exit", () => {
      console.debug("rome language server exit");
    });
    lspc.connect("output", (_self, message) => {
      console.debug(`rome language server OUT:\n${JSON.stringify(message)}`);
    });
    lspc.connect("input", (_self, message) => {
      console.debug(`rome language server IN:\n${JSON.stringify(message)}`);
    });

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_configuration
    lspc.connect(
      "request::workspace/configuration",
      (_self, { id, params }) => {
        lspc.send({
          id,
          result: params.items.map((item) => {
            return item.section === "rome"
              ? {
                  formatter: {
                    enabled: true,
                    indentStyle: "space",
                    indentSize: 2,
                  },
                  linter: {
                    enabled: true,
                    rules: {
                      recommended: true,
                      correctness: {
                        noUnusedVariables: "warn",
                      },
                      style: {
                        useBlockStatements: "warn",
                      },
                    },
                  },
                }
              : undefined;
          }),
        });
      },
    );

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_publishDiagnostics
    lspc.connect(
      "notification::textDocument/publishDiagnostics",
      (_self, { diagnostics, uri }) => {
        if (!state_file.equal(Gio.File.new_for_uri(uri))) {
          return;
        }
        handleDiagnostics({
          language: "JavaScript",
          diagnostics,
          buffer,
          provider,
        });
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

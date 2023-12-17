import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";
import { applyTextEdits } from "../../lsp/sourceview.js";

export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  lspc.start().catch(console.error);

  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(console.error);
  });

  return {
    lspc,
    async format() {
      // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_formatting
      const text_edits = await lspc.request("textDocument/formatting", {
        textDocument: {
          uri: file.get_uri(),
        },
        options: {
          tabSize: 2,
          insertSpaces: true,
          trimTrailingWhitespace: true,
          insertFinalNewline: true,
          trimFinalNewlines: true,
        },
      });

      applyTextEdits(text_edits, document.code_view.buffer);
    },
  };
}

function createLSPClient({ file, code_view }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(
    [
      "biome",
      "lsp-proxy",
      // src/meson.build installs biome.json there
      `--config-path=${GLib.build_filenamev([pkg.pkgdatadir])}`,
    ],
    {
      rootUri: file.get_parent().get_uri(),
      uri,
      languageId: "javascript",
      buffer: code_view.buffer,
      // quiet: false,
      // env: {
      //   BIOME_LOG_DIR: "/tmp/biome",
      // },
    },
  );

  lspc.connect("exit", () => {
    console.debug("biome language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`biome language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`biome language server IN:\n${JSON.stringify(message)}`);
  });

  // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_publishDiagnostics
  lspc.connect(
    "notification::textDocument/publishDiagnostics",
    (_self, params) => {
      if (params.uri !== uri) {
        return;
      }
      code_view.handleDiagnostics(params.diagnostics);
    },
  );

  return lspc;
}

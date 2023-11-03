import Gio from "gi://Gio";

import LSPClient from "../../lsp/LSPClient.js";

import biome_configuration from "./biome.json" with { type: "bytes" };

export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  (async () => {
    try {
      // This is the only way to configure Biome language server at the moment
      // see https://github.com/biomejs/biome/issues/675
      await createBiomeConfiguration(file.get_parent());
    } catch (err) {
      console.error(err);
    }
    await lspc.start();
  })().catch(console.error);

  code_view.buffer.connect("modified-changed", () => {
    if (!code_view.buffer.get_modified()) return;
    lspc.didChange().catch(console.error);
  });
}

function createLSPClient({ file, code_view }) {
  const uri = file.get_uri();

  const lspc = new LSPClient(
    [
      "biome",
      "lsp-proxy",
      // "--log-level=debug"
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

function createBiomeConfiguration(file) {
  return file.get_child("biome.json").replace_contents_async(
    biome_configuration,
    null, // etag
    false, // make_backup
    Gio.FileCreateFlags.NONE, //flags
    null, // cancellable
  );
}

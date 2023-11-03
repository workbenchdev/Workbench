import GLib from "gi://GLib";

import LSPClient from "../../lsp/LSPClient.js";

export function setup({ document }) {
  const { file, code_view } = document;

  const lspc = createLSPClient({
    code_view,
    file,
  });

  lspc.start().catch(console.error);

  return {
    lspc,
    async update() {
      return lspc.didChange();
    },
    async compile() {
      await lspc.didChange();

      let xml = null;

      try {
        ({ xml } = await lspc.request("textDocument/x-blueprint-compile", {
          textDocument: {
            uri: file.get_uri(),
          },
        }));
      } catch (err) {
        console.debug(err);
      }

      return xml;
    },
    async decompile(text) {
      const { blp } = await lspc.request("x-blueprint/decompile", {
        text,
      });
      return blp;
    },
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

// Inspired by
// https://gitlab.gnome.org/GNOME/gnome-builder/-/blob/cbcf02bf9ac957a004fa32a17a7586f32e899a48/src/libide/code/ide-buffer-manager.c#L899
export function applyTextEdits(text_edits, buffer) {
  buffer.begin_user_action();

  // Stage TextMarks
  for (const text_edit of text_edits) {
    prepareTextEdit(text_edit, buffer);
  }

  // Perform the edits
  for (const text_edit of text_edits) {
    applyTextEdit(text_edit, buffer);
  }

  buffer.end_user_action();
}

function prepareTextEdit(text_edit, buffer) {
  const {
    range: { start, end },
  } = text_edit;
  const [, start_iter] = buffer.get_iter_at_line_offset(
    start.line,
    start.character,
  );
  const [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);

  const begin_mark = buffer.create_mark(
    null, // name
    start_iter, // where
    true, // left gravity
  );
  const end_mark = buffer.create_mark(
    null, // name
    end_iter, // where
    false, // left gravity
  );

  text_edit.begin_mark = begin_mark;
  text_edit.end_mark = end_mark;
}

function applyTextEdit(text_edit, buffer) {
  const { newText, begin_mark, end_mark } = text_edit;

  let start_iter = buffer.get_iter_at_mark(begin_mark);
  const end_iter = buffer.get_iter_at_mark(end_mark);

  buffer.delete(start_iter, end_iter);

  start_iter = buffer.get_iter_at_mark(begin_mark);
  buffer.insert(start_iter, newText, -1);

  buffer.delete_mark(begin_mark);
  buffer.delete_mark(end_mark);
}

const SYSLOG_IDENTIFIER = pkg.name;

export function logBlueprintError(err) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_CRITICAL, {
    MESSAGE: `${err.message}`,
    SYSLOG_IDENTIFIER,
  });
}

export function logBlueprintInfo(info) {
  GLib.log_structured("Blueprint", GLib.LogLevelFlags.LEVEL_WARNING, {
    MESSAGE: `${info.line + 1}:${info.col} ${info.message}`,
    SYSLOG_IDENTIFIER,
  });
}

function createLSPClient({ code_view, file }) {
  const bin = "/app/bin/blueprint-compiler";
  const uri = file.get_uri();
  // const bin = GLib.build_filenamev([
  //   "/home/sonny/Projects/GNOME",
  //   "blueprint-compiler/blueprint-compiler.py",
  // ]);

  const lspc = new LSPClient([bin, "lsp"], {
    rootUri: file.get_parent().get_uri(),
    uri,
    languageId: "blueprint",
    buffer: code_view.buffer,
    // quiet: false,
  });

  lspc.connect("exit", () => {
    console.debug("blueprint language server exit");
  });
  lspc.connect("output", (_self, message) => {
    console.debug(`blueprint language server OUT:\n${JSON.stringify(message)}`);
  });
  lspc.connect("input", (_self, message) => {
    console.debug(`blueprint language server IN:\n${JSON.stringify(message)}`);
  });

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

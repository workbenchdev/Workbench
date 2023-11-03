import GLib from "gi://GLib";
import Source from "gi://GtkSource";

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
    async format(text) {
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

      if (!text_edits || text_edits.length !== 1) return text;
      const newText = text_edits[0].newText;
      if (!newText) return text;

      return newText;
    },
  };
}

export function applyTextEdits(text_edits, text) {
  const buffer = new Source.Buffer({ text });

  let new_text = text;
  // let new_text = text;

  for (const text_edit of text_edits) {
    new_text = applyTextEdit(text_edit, buffer, new_text);
  }

  return new_text;
}

function applyTextEdit({ range, newText }, buffer, text) {
  const { start, end } = range;
  const [, start_iter] = buffer.get_iter_at_line_offset(
    start.line,
    start.character,
  );
  const [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);

  console.log(
    text.slice(0, start_iter.get_offset()) +
      newText +
      text.slice(end_iter.get_offset()),
  );

  return (
    text.slice(0, start_iter.get_offset()) +
    newText +
    text.slice(end_iter.get_offset())
  );

  // const bounds = new_buffer.get_bounds();

  // const str =
  //   new_buffer.get_slice(bounds[0], start_iter, false) +
  //   newText +
  //   new_buffer.get_slice(end_iter, bounds[1], false);
  // console.log(str);
  // new_buffer.text = str;
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
  // const bin = "/app/bin/blueprint-compiler";
  const uri = file.get_uri();
  const bin = GLib.build_filenamev([
    "/home/sonny/Projects/GNOME",
    "blueprint-compiler/blueprint-compiler.py",
  ]);

  const lspc = new LSPClient([bin, "lsp"], {
    rootUri: file.get_parent().get_uri(),
    uri,
    languageId: "blueprint",
    buffer: code_view.buffer,
    quiet: false,
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

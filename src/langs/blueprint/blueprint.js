import GLib from "gi://GLib";

import { createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";
import { CompletionItemKind } from "../../lsp/LSP.js";

export function setup({ document }) {
  const { file, code_view, buffer } = document;

  const lspc = createLSPClient({
    lang: getLanguage("blueprint"),
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

  return lspc;
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

export function sortBlueprintProposals(a, b) {
  if (a.kind === b.kind) return 0;

  if (a.kind === CompletionItemKind.Property) return -1;
  if (b.kind === CompletionItemKind.Property) return 1;
  if (a.kind === CompletionItemKind.Snippet) return -1;
  if (b.kind === CompletionItemKind.Snippet) return 1;
  if (a.kind === CompletionItemKind.Keyword) return -1;
  if (b.kind === CompletionItemKind.Keyword) return 1;
  if (a.kind === CompletionItemKind.Event) return -1;
  if (b.kind === CompletionItemKind.Event) return 1;
  if (a.kind === CompletionItemKind.Class) return -1;
  if (b.kind === CompletionItemKind.Class) return 1;

  return a.sortText.localeCompare(b.sortText);
}

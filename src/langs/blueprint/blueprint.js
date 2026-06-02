import GLib from "gi://GLib";

import { createLSPClient } from "../../common.js";
import { getLanguage } from "../../util.js";
import { CompletionItemKind } from "../../lsp/LSP.js";

export const ignore_codes = [
  // FIXME: let's add a11y label to all demo images?
  "missing_descriptive_text",
  // This is potentially confusing to newcomers?
  // Should we update all demos to use Adw.Bin instead of Box?
  "use_adw_bin",
  // The top level widget in Workbench demos has no ID
  "unused_widget",
  // Fails for:
  // adjustment: Adjustment {
  //   lower: 100;
  //   upper: 1000;
  //   value: 200;
  //   step-increment: 10;
  // };
  // TODO: file an issue
  "adjustment_prop_order",
  // Fails for:
  // Label {
  //   label: "<a href=\"...\">foo<a>"
  //   use-markup: true
  // }
  // TODO: file an issue
  "use_unicode",
  // TODO: many warnings, investigate
  "missing_user_facing_text",
  // "SVG" or "CSS" is all caps and that's fine
  "avoid_all_caps",
  // Sometimes we don't want the widget to scroll
  // e.g. CSS Gradients demo GtkSource.View
  "scrollable_parent",
];

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
      // FIXME: Somehow merge with the similar logic of cli/blueprint.js
      const diagnostics = params.diagnostics.filter(
        (diag) => !ignore_codes.includes(diag.code),
      );
      code_view.handleDiagnostics(diagnostics);
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

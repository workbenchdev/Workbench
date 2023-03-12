import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Source from "gi://GtkSource";

import { rangeEquals } from "./lsp/LSP.js";

class WorkbenchHoverProvider extends GObject.Object {
  constructor() {
    super();
    this.diagnostics = [];
  }

  findDiagnostics(context) {
    const iter = new Gtk.TextIter();
    context.get_iter(iter);

    const line = iter.get_line();
    // Looks like line_offset starts at 0
    // Blueprint starts at 1
    const character = iter.get_line_offset() + 1;

    return findDiagnostics(this.diagnostics, { line, character });
  }

  showDiagnostics(display, diagnostics) {
    const container = new Gtk.Box({
      orientation: Gtk.Orientation.VERTICAL,
      spacing: 4,
      css_classes: ["hoverdisplay", "osd", "frame"],
    });

    for (const { message } of diagnostics) {
      const label = new Gtk.Label({
        halign: Gtk.Align.START,
        label: `${message}`,
        css_classes: ["body"],
      });
      container.append(label);
    }

    display.append(container);
  }

  vfunc_populate(context, display) {
    try {
      const diagnostics = this.findDiagnostics(context);
      if (diagnostics.length < 1) return [false, null];
      this.showDiagnostics(display, diagnostics);
    } catch (err) {
      logError(err);
      return [false, null];
    }

    return [true, null];
  }
}

function findDiagnostics(diagnostics, position) {
  return diagnostics.filter((diagnostic) => {
    return isDiagnosticInRange(diagnostic, position);
  });
}

export function isDiagnosticInRange(diagnostic, { line, character }) {
  const { start, end } = diagnostic.range;

  // The tag is applied on the whole line
  // when diagnostic start and end ranges are equals
  if (rangeEquals(start, end) && line === start.line) return true;

  if (line < start.line) return false;
  if (line > end.line) return false;

  return (
    (line >= start.line && character >= start.character - 1) ||
    (line <= end.line && character <= end.character + 1)
  );
}

export default GObject.registerClass(
  {
    GTypeName: "WorkbenchHoverProvider",
    Implements: [Source.HoverProvider],
  },
  WorkbenchHoverProvider,
);

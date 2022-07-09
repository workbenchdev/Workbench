import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Source from "gi://GtkSource";

import { rangeEquals } from "./lsp/LSP.js";

class WorkbenchHoverProvider extends GObject.Object {
  constructor() {
    super();
    this.diagnostics = [];
    this.last_container = null;
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
    for (const child of this.last_container || []) {
      this.last_container.remove(child);
    }

    const container = new Gtk.Box({
      orientation: Gtk.Orientation.VERTICAL,
      spacing: 4,
    });
    container.add_css_class("hoverdisplay");
    container.add_css_class("osd");

    for (const { message } of diagnostics) {
      const label = new Gtk.Label({
        halign: Gtk.Align.START,
        label: `${message}`,
      });
      label.add_css_class("caption");
      container.append(label);
    }

    display.append(container);
    this.last_container = container;
  }

  vfunc_populate(context, display) {
    try {
      const diagnostics = this.findDiagnostics(context);
      if (diagnostics.length < 1) return false;
      this.showDiagnostics(display, diagnostics);
    } catch (err) {
      logError(err);
      return false;
    }

    return true;
  }
}

function findDiagnostics(diagnostics, range) {
  return diagnostics.filter((diagnostic) => {
    return isDiagnosticInRange(diagnostic, range);
  });
}

function isDiagnosticInRange(diagnostic, range) {
  const { start, end } = diagnostic.range;

  // The tag is applied on the whole line
  // when diagnostic start and end ranges are equals
  if (rangeEquals(start, end) && range.line === start.line) return true;

  return (
    (range.line >= start.line && range.character >= start.character - 1) ||
    (range.line <= end.line && range.character <= end.character + 1)
  );
}

export default GObject.registerClass(
  {
    GTypeName: "WorkbenchHoverProvider",
    Implements: [Source.HoverProvider],
  },
  WorkbenchHoverProvider
);

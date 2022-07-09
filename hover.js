let diags = [];

function isDiagnosticInRange(diagnostic, range) {
  const { start, end } = diagnostic.range;

  return (
    (start.line === range.line || end.line === range.line) &&
    start.character < range.character &&
    end.character > range.character
  );
}

function findDiagnostic(range) {
  return diags.find((diagnostic) => {
    return isDiagnosticInRange(diagnostic, range);
  });
}

const WorkbenchHoverProvider = GObject.registerClass(
  {
    GTypeName: "WorkbenchHoverProvider",
    Implements: [Source.HoverProvider],
  },
  class WorkbenchHoverProvider extends GObject.Object {
    // _init(params = {}) {
    //   super._init(params);
    // }
    vfunc_populate(context, display, err) {
      try {
        log("populate");

        const iter = new Gtk.TextIter();
        context.get_iter(iter);
        const tags = iter.get_tags();
        const error_tag = tags.find((tag) => tag.name === "error");
        if (!error_tag) return false;

        const line = iter.get_line();
        const character = iter.get_line_offset();
        const diagnostic = findDiagnostic({ line, character });
        if (!diagnostic) return false;
        log(diagnostic);

        const box = new Gtk.Box({
          // name: "wow",
          // styles
        });
        box.add_css_class("osd");
        box.append(
          new Gtk.Label({
            label: diagnostic.message,
            margin_top: 8,
            margin_bottom: 8,
            margin_start: 8,
            margin_end: 8,
          })
        );
        display.append(box);
      } catch (err) {
        logError(err);
      }

      return true;
    }
  }
);

function prepareView(view) {
  const tag_table = view.buffer.get_tag_table();
  const tag = new Gtk.TextTag({
    name: "error",
    underline: Pango.Underline.ERROR,
  });
  tag_table.add(tag);

  const hover = view.get_hover();
  hover.hover_delay = 25;
  const provider = new WorkbenchHoverProvider();
  hover.add_provider(provider);
}

// function updateBlueprintBuffer(buffer, error) {
//   buffer.remove_tag_by_name(
//     "error",
//     buffer.get_start_iter(),
//     buffer.get_end_iter()
//   );

//   if (error) {
//     handleError(error, buffer);
//   }
// }

function handleDiagnostics(diagnostics, buffer) {
  diags = diagnostics;
  buffer.remove_tag_by_name(
    "error",
    buffer.get_start_iter(),
    buffer.get_end_iter()
  );

  diagnostics.forEach((d) => handleDiagnostic(d, buffer));
}

function handleDiagnostic(diagnostic, buffer) {
  const [start_iter, end_iter] = get_iters_at_range(buffer, diagnostic.range);

  buffer.apply_tag_by_name("error", start_iter, end_iter);
}

function get_iters_at_range(buffer, range) {
  const [, start_iter] = buffer.get_iter_at_line_offset(
    range.start.line,
    range.start.character
  );

  const [, end_iter] = buffer.get_iter_at_line_offset(
    range.end.line,
    range.end.character
  );

  // const mark = new Source.Mark();

  return [start_iter, end_iter];
}

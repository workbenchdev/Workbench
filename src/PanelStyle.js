import Gio from "gi://Gio";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";

import {
  connect_signals,
  getLanguage,
  settings,
  getItersAtRange,
} from "./util.js";

import WorkbenchHoverProvider from "./WorkbenchHoverProvider.js";

export default function PanelStyle({ builder }) {
  const buffer = getLanguage("css").document.buffer;
  const provider = new WorkbenchHoverProvider();

  prepareSourceView({
    source_view: getLanguage("css").document.source_view,
    provider,
  });

  const button_style = builder.get_object("button_style");
  const panel_style = builder.get_object("panel_style");
  settings.bind(
    "show-style",
    button_style,
    "active",
    Gio.SettingsBindFlags.DEFAULT
  );
  button_style.bind_property(
    "active",
    panel_style,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

  const panel = {
    panel: panel_style,
  };

  function onUpdate() {
    buffer.remove_tag_by_name(
      "error",
      buffer.get_start_iter(),
      buffer.get_end_iter()
    );
    provider.diagnostics = [];
  }

  connect_signals(buffer, {
    "end-user-action": onUpdate,
    undo: onUpdate,
    redo: onUpdate,
  });

  panel.handleCssParserError = function handleCssParserError(section, error) {
    console.debug(`CssParser ${section.to_string()} ${error.message}`);

    const diagnostic = getDiagnostic(section, error);
    provider.diagnostics.push(diagnostic);

    const [start_iter, end_iter] = getItersAtRange(buffer, diagnostic.range);
    buffer.apply_tag_by_name("error", start_iter, end_iter);
  };

  return panel;
}

function prepareSourceView({ source_view, provider }) {
  const tag_table = source_view.buffer.get_tag_table();
  const tag = new Gtk.TextTag({
    name: "error",
    underline: Pango.Underline.ERROR,
  });
  tag_table.add(tag);

  const hover = source_view.get_hover();
  // hover.hover_delay = 25;
  hover.add_provider(provider);
}

// Converts a Gtk.CssSection and Gtk.CssError to an LSP diagnostic object
function getDiagnostic(section, error) {
  const start_location = section.get_start_location();
  const end_location = section.get_end_location();

  const range = {
    start: {
      line: start_location.lines,
      character: start_location.line_chars,
    },
    end: {
      line: end_location.lines,
      character: end_location.line_chars,
    },
  };

  return { range, message: error.message };
}

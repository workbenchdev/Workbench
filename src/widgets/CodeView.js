import GObject from "gi://GObject";
import Source from "gi://GtkSource";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";
import { diagnostic_severities } from "../lsp/LSP.js";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Adw from "gi://Adw";

import Template from "./CodeView.blp" with { type: "uri" };

import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { registerClass } from "../overrides.js";
import { getItersAtRange } from "../lsp/sourceview.js";

import "./CodeFind.js";

Source.init();

const scheme_manager = Source.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();

class CodeView extends Gtk.Widget {
  constructor({ language_id, ...params } = {}) {
    super(params);
    this.source_view = this._source_view;
    this.buffer = this._source_view.buffer;
    // TODO: Investigate why the Blueprint defintion does not behave as intended
    // transition-type: slide_up;
    // https://github.com/workbenchdev/Workbench/pull/853/files#r1443560736
    this._code_find.transition_type = Gtk.RevealerTransitionType.SLIDE_UP;

    this._code_find.connect("notify::reveal-child", () => {
      if (this._code_find.reveal_child === false) {
        this.source_view.grab_focus();
      }
    });

    try {
      this.language = language_manager.get_language(language_id);
      this.buffer.set_language(this.language);

      this.#prepareHoverProvider();
      this.#prepareSignals();
      this.#updateStyle();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  #prepareSignals() {
    // cannot use "changed" signal as it triggers many time for pasting
    connect_signals(this.buffer, {
      "end-user-action": this.#onUpdate,
      undo: this.#onUpdate,
      redo: this.#onUpdate,
    });

    style_manager.connect("notify::dark", this.#updateStyle);
  }

  #onUpdate = () => {
    this.clearDiagnostics();
    this.emit("changed");
  };

  #prepareHoverProvider() {
    const provider = new WorkbenchHoverProvider();
    this.hover_provider = provider;

    const tag_table = this.source_view.buffer.get_tag_table();

    const color_error = new Gdk.RGBA();
    color_error.parse("#e01b24");
    const tag_error = new Gtk.TextTag({
      name: "error",
      underline: Pango.Underline.ERROR,
      underline_rgba: color_error,
    });
    tag_table.add(tag_error);

    const color_warning = new Gdk.RGBA();
    color_warning.parse("#ffa348");
    const tag_warning = new Gtk.TextTag({
      name: "warning",
      underline: Pango.Underline.ERROR,
      underline_rgba: color_warning,
    });
    tag_table.add(tag_warning);

    const hover = this.source_view.get_hover();
    // hover.hover_delay = 25;
    hover.add_provider(provider);
  }

  clearDiagnostics() {
    const { buffer, hover_provider } = this;

    buffer.remove_tag_by_name(
      "error",
      buffer.get_start_iter(),
      buffer.get_end_iter(),
    );
    buffer.remove_tag_by_name(
      "warning",
      buffer.get_start_iter(),
      buffer.get_end_iter(),
    );

    hover_provider.diagnostics = [];
  }

  handleDiagnostics(diagnostics) {
    this.clearDiagnostics();

    this.hover_provider.diagnostics = diagnostics;
    const lanuage_name = this.language.get_name();

    for (const diagnostic of diagnostics) {
      logLanguageServerDiagnostic(lanuage_name, diagnostic);

      const [start_iter, end_iter] = getItersAtRange(
        this.buffer,
        diagnostic.range,
      );
      this.buffer.apply_tag_by_name(
        diagnostic.severity === 1 ? "error" : "warning",
        start_iter,
        end_iter,
      );
    }
  }

  saveState() {
    const { buffer, source_view } = this;
    const { cursor_position } = buffer;
    const iter_cursor = buffer.get_iter_at_offset(cursor_position);
    const line_number = iter_cursor.get_line();
    const line_offset = iter_cursor.get_line_offset();
    const h_scroll_position = source_view.hadjustment.value;
    const v_scroll_position = source_view.vadjustment.value;

    return {
      line_number,
      line_offset,
      h_scroll_position,
      v_scroll_position,
    };
  }

  restoreState(state) {
    const { line_number, line_offset, h_scroll_position, v_scroll_position } =
      state;

    const { buffer, source_view } = this;

    // https://matrix.to/#/!aUhETchlgthwWVQzhi:matrix.org/$1701651785113NJUnw:gnome.org
    GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE, () => {
      source_view.hadjustment.value = h_scroll_position;
      source_view.vadjustment.value = v_scroll_position;
      const [, iter] = buffer.get_iter_at_line_offset(line_number, line_offset);
      buffer.place_cursor(iter);
    });
  }

  replaceText(text, restore_state = false) {
    // this is against GtkSourceView not accounting an empty-string to empty-string change as user-edit
    if (text === "") {
      text = " ";
    }

    const { buffer } = this;

    const state = restore_state && this.saveState();

    buffer.begin_user_action();
    buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
    buffer.insert(buffer.get_start_iter(), text, -1);
    buffer.end_user_action();

    if (state) {
      this.restoreState(state);
    } else {
      buffer.place_cursor(buffer.get_start_iter());
    }
  }

  #updateStyle = () => {
    const scheme = scheme_manager.get_scheme(
      style_manager.dark ? "Adwaita-dark" : "Adwaita",
    );
    this.buffer.set_style_scheme(scheme);
  };
}

export default registerClass(
  {
    GTypeName: "CodeView",
    Template,
    Properties: {
      language_id: GObject.ParamSpec.string(
        "language_id",
        "",
        "",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
        null,
      ),
    },
    Signals: {
      changed: {},
    },
    InternalChildren: ["source_view", "code_find"],
  },
  CodeView,
);

const language_manager = new Source.LanguageManager();
language_manager.append_search_path(
  "resource:///re/sonny/Workbench/language-specs",
);

function logLanguageServerDiagnostic(language, { range, message, severity }) {
  GLib.log_structured(language, GLib.LogLevelFlags.LEVEL_DEBUG, {
    MESSAGE: `${language}-${diagnostic_severities[severity]} ${
      range.start.line + 1
    }:${range.start.character} to ${range.end.line + 1}:${
      range.end.character
    } ${message}`,
    SYSLOG_IDENTIFIER: pkg.name,
  });
}

// GObject.SignalGroup is unsuable with GJS
function connect_signals(target, signals) {
  return Object.entries(signals).map(([signal, handler]) => {
    return target.connect_after(signal, handler);
  });
}

// eslint-disable-next-line no-unused-vars
function disconnect_signals(target, handler_ids) {
  handler_ids.forEach((handler_id) => target.disconnect(handler_id));
}

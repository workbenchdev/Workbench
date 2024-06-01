import GObject from "gi://GObject";
import Source from "gi://GtkSource";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";
import { CompletionItemKind, diagnostic_severities } from "../lsp/LSP.js";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import Workbench from "gi://Workbench";

import Template from "./CodeView.blp" with { type: "uri" };

import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { registerClass } from "../overrides.js";
import { getItersAtRange } from "../lsp/sourceview.js";

import "./CodeFind.js";

Source.init();

const scheme_manager = Source.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();

class CodeView extends Gtk.Widget {
  lspc = null;

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
      // this.#prepareHover();
      this.#prepareCompletionProvider();
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

  #onCompletionRequest = (provider, request) => {
    if (!this.lspc) {
      request.state_changed(Workbench.RequestState.CANCELLED);
      return;
    }

    const [success, , end] = request.context.get_bounds();
    if (!success) {
      request.state_changed(Workbench.RequestState.CANCELLED);
      return;
    }

    this.lspc
      .completion(end)
      .then((result) => {
        for (const item of result) {
          request.add(new Proposal(item));
        }

        const expression = Gtk.PropertyExpression.new(Proposal, null, "label");
        const filter = new Gtk.StringFilter({
          expression,
          ignore_case: false,
          match_mode: Gtk.StringFilterMatchMode.PREFIX,
          search: request.context.get_word(),
        });
        const filter_list_model = new Gtk.FilterListModel({
          model: request,
          filter,
        });
        request.context.filter = filter;

        request.state_changed(Workbench.RequestState.COMPLETE);
        request.context.set_proposals_for_provider(provider, filter_list_model);
      })
      .catch((err) => {
        request.state_changed(Workbench.RequestState.CANCELLED);
        console.error(err);
      });
  };

  #prepareCompletionProvider() {
    const completion_provider = new CompletionProvider();

    completion_provider.connect(
      "completion-request",
      this.#onCompletionRequest,
    );

    const completion = this.source_view.get_completion();
    completion.add_provider(completion_provider);

    // completion.connect("show", () => {
    //   console.log("completion show");
    // });

    // completion.connect("hide", () => {
    //   console.log("completion hide");
    // });
  }

  #prepareHover() {
    this.buffer.connect("notify::cursor-position", (self) => {
      if (!this.lspc) return;
      const iter_cursor = self.get_iter_at_offset(self.cursor_position);
      this.lspc
        .hover(iter_cursor)
        .then((result) => console.log(result))
        .catch(console.error);
    });
  }
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

const CompletionProvider = GObject.registerClass(
  {
    GTypeName: "CompletionProvider",
    Implements: [Source.CompletionProvider],
  },
  class CompletionProvider extends Workbench.CompletionProvider {
    vfunc_activate(context, proposal) {
      context.get_buffer().begin_user_action();
      const [success, start, end] = context.get_bounds();
      if (success) context.get_buffer().delete(start, end);
      context
        .get_view()
        .push_snippet(
          Source.Snippet.new_parsed(proposal.get_typed_text()),
          null,
        );
      context.get_buffer().end_user_action();
    }

    vfunc_refilter(context, _model) {
      const word = context.get_word();
      context.filter.search = word;
    }

    vfunc_display(_context, proposal, cell) {
      // const [, start, end] = context.get_bounds();
      // const text = this.buffer.get_text(start, end, false);
      // if (text.startsWith(context.get_word())) return null;

      // log("display", proposal.label, cell.get_column());
      switch (cell.get_column()) {
        // case Source.CompletionColumn.ICON:
        //   var image = new Gtk.Image ();
        //   image_cache.request_paintable (emoji.url, (is_loaded, paintable) => {
        //     image.paintable = paintable;
        //   });
        //   cell.set_widget (image);
        //   break;
        // case Source.CompletionColumn.ICON:
        //   cell.set_icon_name("re.sonny.Workbench-symbolic");
        //   break;
        case Source.CompletionColumn.TYPED_TEXT:
          cell.set_text(proposal.label);
          break;
        default:
          cell.text = null;
          break;
      }
      // log(context);
      // log(proposals);
    }
  },
);

// class Proposal extends  {}
const Proposal = GObject.registerClass(
  {
    Implements: [Source.CompletionProposal],
    Properties: {
      label: GObject.ParamSpec.string(
        "label",
        "Label",
        "The label of the proposal",
        GObject.ParamFlags.READABLE,
        null,
      ),
    },
  },
  class Proposal extends GObject.Object {
    constructor(completion_proposal) {
      super();
      this.completion = completion_proposal;
    }

    get label() {
      return this.completion.label;
    }

    vfunc_get_typed_text() {
      let text = this.completion.insertText || this.completion.label;
      // TODO: Blueprint language server should do this
      if (this.completion.kind === CompletionItemKind.Class) {
        text += " {\n  $0\n}";
      }
      return text;
    }
  },
);

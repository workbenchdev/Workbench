import GObject from "gi://GObject";
import Source from "gi://GtkSource";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";
import {
  CompletionItemKind,
  completion_item_kinds,
  diagnostic_severities,
} from "../lsp/LSP.js";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import Workbench from "gi://Workbench";
import { gettext as _ } from "gettext";

import Template from "./CodeView.blp" with { type: "uri" };

import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { registerClass } from "../overrides.js";
import { getItersAtRange } from "../lsp/sourceview.js";

import "./CodeFind.js";
import { once } from "../../troll/src/async.js";

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
        result
          .map((item) => new Proposal(item))
          .sort((a, b) => a.sortText.localeCompare(b.sortText))
          .forEach((proposal) => request.add(proposal));

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
      const { completion } = context;
      const { view } = completion;
      const buffer = completion.get_buffer();

      const promise = showCompletionAfterActivation({
        completion,
        proposal,
        buffer,
      });

      buffer.begin_user_action();
      const [success, start, end] = context.get_bounds();
      if (success) buffer.delete(start, end);
      view.push_snippet(
        Source.Snippet.new_parsed(proposal.get_typed_text()),
        null,
      );
      buffer.end_user_action();

      promise
        ?.then(() => {
          view.emit("show-completion");
        })
        .catch(console.error);
    }

    vfunc_refilter(context, _model) {
      const word = context.get_word();
      context.filter.search = word;
    }

    vfunc_display(context, proposal, cell) {
      switch (cell.get_column()) {
        // case Source.CompletionColumn.ICON:
        //   cell.set_icon_name("re.sonny.Workbench-symbolic");
        //   break;
        // case Source.CompletionColumn.BEFORE:
        //   cell.set_text("before");
        //   break;
        case Source.CompletionColumn.TYPED_TEXT:
          cell.set_text(proposal.label);
          break;
        case Source.CompletionColumn.AFTER:
          cell.set_text(
            getProposalKindDisplay(
              proposal,
              context.completion.view.buffer.language.id,
            ),
          );
          break;
        // case Source.CompletionColumn.AFTER:
        //   cell.set_text(proposal.deprecated ? _("Deprecated") : null);
        //   break;
        // case Source.CompletionColumn.COMMENT:
        //   cell.set_text("comment");
        //   break;
        // case Source.CompletionColumn.DETAILS:
        //   cell.set_text("details");
        //   break;
        default:
          cell.text = null;
          break;
      }
    }

    vfunc_is_trigger(iter, ch) {
      if (ch !== ".") return false;
      const success = iter.backward_char();
      if (!success) return false;
      return iter.ends_word();
    }
  },
);

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
      this.kind = completion_proposal.kind;
      this.sortText = completion_proposal.sortText || completion_proposal.label;
      this.deprecated = completion_proposal.deprecated === true;
    }

    get label() {
      return this.completion.label;
    }

    vfunc_get_typed_text() {
      return this.completion.insertText || this.completion.label;
    }
  },
);

function getProposalKindDisplay(proposal, language_id) {
  if (
    proposal.kind === CompletionItemKind.Event &&
    language_id === "blueprint"
  ) {
    return _("Signal");
  }
  return completion_item_kinds[proposal.kind] || null;
}

function showCompletionAfterActivation({ completion, proposal, buffer }) {
  if (buffer.language.id !== "blueprint") return null;

  if (
    ![CompletionItemKind.Class, CompletionItemKind.Module].includes(
      proposal.kind,
    )
  ) {
    return null;
  }

  return once(completion, "hide");
}

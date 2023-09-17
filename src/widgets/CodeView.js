import GObject from "gi://GObject";
import Source from "gi://GtkSource";
import Gtk from "gi://Gtk";
import Pango from "gi://Pango";
import { rangeEquals, diagnostic_severities } from "../lsp/LSP.js";
import Gdk from "gi://Gdk";
import GLib from "gi://GLib";
import Adw from "gi://Adw";

import Template from "./CodeView.blp" with { type: "uri" };

import WorkbenchHoverProvider from "../WorkbenchHoverProvider.js";
import { registerClass } from "../overrides.js";

import Workbench from "gi://Workbench";

Source.init();

const scheme_manager = Source.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();

const CompletionProvider = GObject.registerClass(
  {
    GTypeName: "CompletionProvider",
    Implements: [Source.CompletionProvider],
  },
  class CompletionProvider extends Workbench.CompletionProvider {
    vfunc_activate(context, proposal) {
      console.log("activate", proposal);
      context
        .get_view()
        .push_snippet(
          Source.Snippet.new_parsed(proposal.get_typed_text()),
          null,
        );
    }

    vfunc_display(context, proposal, cell) {
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
          cell.set_text(proposal.get_typed_text());
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
  },
  class Proposal extends GObject.Object {
    constructor(completion_proposal) {
      super();
      Object.assign(this, completion_proposal);
    }

    get_typed_text() {
      return this.label;
    }
  },
);

class CodeView extends Gtk.Widget {
  constructor({ language_id, ...params } = {}) {
    super(params);
    this.source_view = this._source_view;
    this.buffer = this._source_view.buffer;

    try {
      this.language = language_manager.get_language(language_id);
      this.buffer.set_language(this.language);

      this.#prepareHoverProvider();
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

  #onCompletionRequest = (provider, request) => {
    console.log(`completion-request: ${request.context.get_word()}`);

    const [, start, end] = request.context.get_bounds();
    const text = this.buffer.get_text(start, end, false);

    // log(request.context.get_proposals_for_provider(completion_provider));

    // console.log({
    //   start: {
    //     line: start.get_line(),
    //     offset: start.get_line_offset(),
    //   },
    //   end: {
    //     line: end.get_line(),
    //     offset: end.get_line_offset(),
    //   },
    //   text,
    // });

    this.css
      .completion(end)
      .then((result) => {
        log(result);

        result.forEach((completion) => {
          if (completion.insertText?.startsWith(text)) {
            request.add(new Proposal(completion));
          }
        });
      })
      .catch(logError)
      .finally(() => {
        request.state_changed(Workbench.RequestState.COMPLETE);
      });
  };

  #prepareCompletionProvider() {
    const completion_provider = new CompletionProvider();

    completion_provider.connect(
      "completion-request",
      this.#onCompletionRequest,
    );

    // this.buffer.connect("notify::cursor-position", async (self) => {
    //   if (!this.blueprint) return;
    //   const iter_cursor = self.get_iter_at_offset(self.cursor_position);
    //   try {
    //     const result = await this.blueprint.hover(iter_cursor);
    //     console.log(result);
    //   } catch (err) {
    //     logError(err);
    //   }
    // });
    const completion = this.source_view.get_completion();

    completion.connect("show", () => {
      log("completion show");
    });

    completion.connect("hide", () => {
      log("completion hide");
    });

    completion.add_provider(completion_provider);
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

  replaceText(text, scroll_start = true) {
    // this is against GtkSourceView not accounting an empty-string to empty-string change as user-edit
    if (text === "") {
      text = " ";
    }

    const { buffer } = this;

    buffer.begin_user_action();
    buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
    buffer.insert(buffer.get_start_iter(), text, -1);
    buffer.end_user_action();
    scroll_start && buffer.place_cursor(buffer.get_start_iter());
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
    InternalChildren: ["source_view"],
  },
  CodeView,
);

const language_manager = new Source.LanguageManager();
language_manager.append_search_path(
  "resource:///re/sonny/Workbench/language-specs",
);

function getItersAtRange(buffer, { start, end }) {
  let start_iter;
  let end_iter;

  // Apply the tag on the whole line
  // if diagnostic start and end are equals such as
  // Blueprint-Error 13:12 to 13:12 Could not determine what kind of syntax is meant here
  if (rangeEquals(start, end)) {
    [, start_iter] = buffer.get_iter_at_line(start.line);
    [, end_iter] = buffer.get_iter_at_line(end.line);
    end_iter.forward_to_line_end();
    start_iter.forward_find_char((char) => char !== "", end_iter);
  } else {
    [, start_iter] = buffer.get_iter_at_line_offset(
      start.line,
      start.character,
    );
    [, end_iter] = buffer.get_iter_at_line_offset(end.line, end.character);
  }

  return [start_iter, end_iter];
}

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

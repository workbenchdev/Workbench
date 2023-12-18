import GObject from "gi://GObject";
import Gdk from "gi://Gdk";
import Gtk from "gi://Gtk";
import GtkSource from "gi://GtkSource";

import Template from "./Search.blp" with { type: "uri" };
import { registerClass } from "../overrides.js";

class Search extends Gtk.Revealer {
  #previous_search_term = "";
  #buffer;
  #search_settings;
  #search_context;

  constructor(params = {}) {
    super(params);

    this.#buffer = this._source_view.buffer;

    this.#initSearch();
    this.#trackOccurrences();
    this.#connectButtons();
    this.#addControllers();
  }

  set source_view(obj) {
    this._source_view = obj;
  }

  get source_view() {
    return this._source_view;
  }

  #initSearch() {
    this.#search_settings = new GtkSource.SearchSettings({
      case_sensitive: false,
      wrap_around: true,
    });

    this.#search_context = new GtkSource.SearchContext({
      buffer: this.#buffer,
      settings: this.#search_settings,
      highlight: true,
    });

    this.#search_context.connect("notify::occurrences-count", () => {
      this.#updateInfo();
    });

    this.#buffer.connect("mark-set", (_buffer, _iter, mark) => {
      const mark_name = mark.get_name();
      if (mark_name === "insert" || mark_name === "selection_bound") {
        this.#updateInfo();
      }
    });

    this._text_search_term.connect("notify", () => {
      this.#search_settings.search_text = this._text_search_term.text;
      const [, , iter] = this.#buffer.get_selection_bounds();
      const [found, ,] = this.#search_context.forward(iter);
      this._button_previous.sensitive = found;
      this._button_next.sensitive = found;
    });
  }

  #trackOccurrences() {
    this.#search_context.connect("notify::occurrences-count", () => {
      this.#updateInfo();
    });

    this.#buffer.connect("mark-set", (_buffer, _iter, mark) => {
      const mark_name = mark.get_name();
      if (mark_name === "insert" || mark_name === "selection_bound") {
        this.#updateInfo();
      }
    });
  }

  #connectButtons() {
    this._button_previous.connect("clicked", () => {
      this.#search(false);
    });

    this._button_next.connect("clicked", () => {
      this.#search(true);
    });
  }

  #addControllers() {
    const controller_key_source_view = new Gtk.EventControllerKey();
    this._source_view.add_controller(controller_key_source_view);
    controller_key_source_view.connect(
      "key-pressed",
      (_controller, keyval, _keycode, state) => {
        if (
          state & Gdk.ModifierType.CONTROL_MASK &&
          (keyval === Gdk.KEY_f || keyval === Gdk.KEY_F)
        ) {
          const selected_text = this.#getSelectedText();
          if (selected_text) {
            this._text_search_term.text = selected_text;
          } else {
            this._text_search_term.text = this.#previous_search_term;
          }
          this.reveal_child = true;
          this._text_search_term.grab_focus();
        } else if (this.reveal_child && keyval === Gdk.KEY_Escape) {
          this.#endSearch(false);
        } else if (
          this.reveal_child &&
          state & Gdk.ModifierType.CONTROL_MASK &&
          (keyval === Gdk.KEY_g || keyval === Gdk.KEY_G)
        ) {
          this.#search(!(state & Gdk.ModifierType.SHIFT_MASK));
        }
      },
    );

    const controller_key = new Gtk.EventControllerKey();
    this.add_controller(controller_key);

    controller_key.connect(
      "key-pressed",
      (_controller, keyval, _keycode, state) => {
        if (
          state & Gdk.ModifierType.CONTROL_MASK &&
          (keyval === Gdk.KEY_g || keyval === Gdk.KEY_G)
        ) {
          this.#search(!(state & Gdk.ModifierType.SHIFT_MASK));
        } else if (
          state & Gdk.ModifierType.SHIFT_MASK &&
          keyval === Gdk.KEY_Return
        ) {
          this.#search(false);
        } else if (keyval === Gdk.KEY_Escape) {
          this.#endSearch(true);
        }
      },
    );

    this._text_search_term.connect("activate", () => {
      this.#search(true);
    });
  }

  #endSearch(grabFocus) {
    this.reveal_child = false;
    this.#previous_search_term = this._text_search_term.text;
    this._text_search_term.text = "";
    if (grabFocus) {
      this._source_view.grab_focus();
    }
  }

  #getSelectedText() {
    const [, match_start, match_end] = this.#buffer.get_selection_bounds();
    return this.#buffer.get_text(match_start, match_end, true);
  }

  #search(isForward) {
    let found, match_start, match_end, iter;
    if (isForward) {
      [, , iter] = this.#buffer.get_selection_bounds();
      [found, match_start, match_end] = this.#search_context.forward(iter);
    } else {
      [, iter] = this.#buffer.get_selection_bounds();
      [found, match_start, match_end] = this.#search_context.backward(iter);
    }
    if (found) {
      this.#selectOccurence(match_start, match_end);
    }
  }

  #selectOccurence(match_start, match_end) {
    this.#buffer.select_range(match_start, match_end);
    this._source_view.scroll_mark_onscreen(this.#buffer.get_insert());
  }

  #updateInfo() {
    if (this._text_search_term.text) {
      const [, match_start, match_end] = this.#buffer.get_selection_bounds();
      const count = this.#search_context.get_occurrences_count();
      const index = this.#search_context.get_occurrence_position(
        match_start,
        match_end,
      );

      if (count < 1) {
        this._label_info.label = "";
      } else if (index === -1) {
        this._label_info.label = `${count} occurences`;
      } else {
        this._label_info.label = `${index} of ${count}`;
      }
    } else {
      this._label_info.label = "";
    }
  }
}

export default registerClass(
  {
    GTypeName: "Search",
    Template,
    InternalChildren: [
      "text_search_term",
      "label_info",
      "button_previous",
      "button_next",
    ],
    Properties: {
      source_view: GObject.ParamSpec.object(
        "source-view",
        "SourceView",
        "The SourceView that will be searched",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
        Gtk.Widget.$gtype,
      ),
    },
  },
  Search,
);

import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GObject from "gi://GObject";

import { getLanguage } from "../util.js";
import Template from "./EntryRow.blp" with { type: "uri" };

class EntryRow extends Adw.PreferencesRow {
  constructor({ demo, ...params } = {}) {
    super(params);

    this._title_label.label = demo.name;
    this._description_label.label = demo.description;

    this.#createLanguageTags(demo);

    const action_group = new Gio.SimpleActionGroup();
    const activate_action = new Gio.SimpleAction({
      name: "activate",
      parameter_type: null,
    });

    activate_action.connect("activate", () => {
      this.emit("activated", null);
    });
    action_group.add_action(activate_action);

    this.insert_action_group("demo-row", action_group);
    this.action_name = "demo-row.activate";
  }

  #createLanguageTags(demo) {
    ["javascript", "vala", "rust"].forEach((id) => {
      const language = getLanguage(id);
      if (!demo.languages.includes(language.id)) return;
      const language_tag = this.#createLanguageTag(language);
      this._languages_box.append(language_tag);
    });
  }

  #createLanguageTag(language) {
    const button = new Gtk.Button({
      label: language.name,
      valign: Gtk.Align.CENTER,
      css_classes: ["pill", "small"],
    });

    button.connect("clicked", () => {
      this.emit("activated", language);
    });

    return button;
  }
}

export default GObject.registerClass(
  {
    GTypeName: "EntryRow",
    Template,
    Properties: {
      demo: GObject.ParamSpec.jsobject(
        "demo",
        "",
        "",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
        null,
      ),
    },
    Signals: {
      activated: {
        param_types: [GObject.TYPE_JSOBJECT],
      },
    },
    InternalChildren: ["title_label", "description_label", "languages_box"],
  },
  EntryRow,
);

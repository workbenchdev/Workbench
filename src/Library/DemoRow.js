import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import GObject from "gi://GObject";

import { demoSupportsLanguage } from "../util.js";
import Template from "./DemoRow.blp" with { type: "uri" };

class DemoRow extends Adw.PreferencesRow {
  constructor({ demo, ...params } = {}) {
    super(params);

    this._title_label.label = demo.name;
    this._description_label.label = demo.description;

    this._languages_box.append(this.#createLanguageTag("JavaScript"));

    if (demoSupportsLanguage(demo, "vala")) {
      this._languages_box.append(this.#createLanguageTag("Vala"));
    }

    if (demoSupportsLanguage(demo, "rust")) {
      this._languages_box.append(this.#createLanguageTag("Rust"));
    }
  }

  #createLanguageTag(language_name) {
    return new Gtk.Label({
      label: language_name,
      css_name: "button",
      valign: Gtk.Align.CENTER,
      css_classes: ["pill", "small"],
    });
  }

  on_pressed() {
    this.emit("activated");
  }
}

export default GObject.registerClass(
  {
    GTypeName: "DemoRow",
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
      activated: {},
    },
    InternalChildren: ["title_label", "description_label", "languages_box"],
  },
  DemoRow,
);

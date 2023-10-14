import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
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

  #createLanguageTag(language_name) {
    const button = new Gtk.Button({
      label: language_name,
      valign: Gtk.Align.CENTER,
      css_classes: ["pill", "small"],
    });

    button.connect("clicked", () => {
      this.emit("activated", language_name);
    });

    return button;
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
      activated: {
        param_types: [GObject.TYPE_STRING],
      },
    },
    InternalChildren: ["title_label", "description_label", "languages_box"],
  },
  DemoRow,
);

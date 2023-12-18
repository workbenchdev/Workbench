import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

import Template from "./Extension.blp" with { type: "uri" };

export default GObject.registerClass(
  {
    GTypeName: "Extension",
    Template,
    InternalChildren: [
      "label_title",
      "image_enabled",
      "installation_guide",
      "label_hint",
      "label_command",
      "button",
      "second_button",
    ],
    Properties: {
      title: GObject.ParamSpec.string(
        "title",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      enabled: GObject.ParamSpec.boolean(
        "enabled",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        false,
      ),
      button_text: GObject.ParamSpec.string(
        "button-text",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      second_button_text: GObject.ParamSpec.string(
        "second-button-text",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      second_button_visible: GObject.ParamSpec.boolean(
        "second-button-visible",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        false,
      ),
      hint: GObject.ParamSpec.string(
        "hint",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        "",
      ),
      command: GObject.ParamSpec.string(
        "command",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        "",
      ),
    },
  },
  class Extension extends Gtk.ListBoxRow {
    constructor(properties = {}) {
      super(properties);

      this._button.connect("clicked", () => {
        let appid = "appstream://org.freedesktop.Sdk.Extension.";
        switch (this.title) {
          case "Rust":
            appid += "rust-stable";
            break;
          case "Vala":
            appid += "vala";
            break;
          default:
            return;
        }
        Gtk.show_uri(null, appid, null);
      });
      this._second_button.connect("clicked", () => {
        const appid = "appstream://org.freedesktop.Sdk.Extension.llvm16";
        if (this.title === "Rust") {
          Gtk.show_uri(null, appid, null);
        }
      });

      this.bind_property(
        "title",
        this._label_title,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "enabled",
        this._image_enabled,
        "visible",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "enabled",
        this._installation_guide,
        "visible",
        GObject.BindingFlags.SYNC_CREATE | GObject.BindingFlags.INVERT_BOOLEAN,
      );

      this.bind_property(
        "enabled",
        this._button,
        "visible",
        GObject.BindingFlags.SYNC_CREATE | GObject.BindingFlags.INVERT_BOOLEAN,
      );

      this.bind_property(
        "second-button-visible",
        this._second_button,
        "visible",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "button-text",
        this._button,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "second-button-text",
        this._second_button,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "hint",
        this._label_hint,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "command",
        this._label_command,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );
    }
  },
);

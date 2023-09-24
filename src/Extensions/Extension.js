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
      "revealer",
      "toggle",
      "label_hint",
      "label_command",
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
  class Extension extends Gtk.Box {
    constructor(properties = {}) {
      super(properties);

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

      // FIXME: report GJS bug
      setTimeout(() => {
        this._toggle.active = !this.enabled;

        if (!this.hint || !this.command) {
          this._toggle.visible = false;
        }
      }, 0);
    }
  },
);

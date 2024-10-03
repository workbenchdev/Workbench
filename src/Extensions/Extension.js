import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

import Template from "./Extension.blp" with { type: "uri" };

export default GObject.registerClass(
  {
    GTypeName: "Extension",
    Template,
    InternalChildren: [
      "label_title",
      "image_available",
      "installation_guide",
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
      available: GObject.ParamSpec.boolean(
        "available",
        "",
        "",
        GObject.ParamFlags.READWRITE,
        false,
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

      this.bind_property(
        "title",
        this._label_title,
        "label",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "available",
        this._image_available,
        "visible",
        GObject.BindingFlags.SYNC_CREATE,
      );

      this.bind_property(
        "available",
        this._installation_guide,
        "visible",
        GObject.BindingFlags.SYNC_CREATE | GObject.BindingFlags.INVERT_BOOLEAN,
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

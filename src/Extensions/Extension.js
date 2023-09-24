import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

import Template from "./Extension.blp";

export default GObject.registerClass(
  {
    GTypeName: "Extension",
    Template,
    InternalChildren: ["label_title", "image_enabled", "revealer", "toggle"],
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
    },
  },
  class Extension extends Gtk.Box {
    constructor(params) {
      super(params);
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

      this._toggle.bind_property(
        "active",
        this._revealer,
        "reveal_child",
        GObject.BindingFlags.SYNC_CREATE,
      );
    }

    onclicked() {
      console.log("Clicked");
    }
  },
);

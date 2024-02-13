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
      uri: GObject.ParamSpec.string(
        "uri",
        "",
        "",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
        "",
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

      if (properties.uri) {
        this._button.visible = true;
        this._button.connect("clicked", () => {
          new Gtk.UriLauncher({ uri: properties.uri })
            .launch(this.get_root(), null)
            .catch(console.error);
        });
      }

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

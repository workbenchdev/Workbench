import Gtk from "gi://Gtk";
import GObject from "gi://GObject";

import Template from "./IconWidget.blp" assert { type: "uri" };

class IconWidget extends Gtk.FlowBoxChild {
  constructor(params = {}) {
    super(params);
    this.bind_property(
      "icon_name",
      this._image,
      "icon-name",
      GObject.BindingFlags.SYNC_CREATE,
    );
    this.bind_property(
      "icon_name",
      this,
      "tooltip_text",
      GObject.BindingFlags.SYNC_CREATE,
    );
  }
  onClicked() {
    this.emit("clicked");
  }
}

export default GObject.registerClass(
  {
    GTypeName: "IconWidget",
    Template,
    InternalChildren: ["image"],
    Properties: {
      icon_name: GObject.ParamSpec.string(
        "icon_name", // Name
        "icon_name", // Nick
        "", // Blurb
        GObject.ParamFlags.READWRITE, // Flags
        null, // Default value
      ),
    },
    Signals: {
      clicked: {},
    },
  },
  IconWidget,
);

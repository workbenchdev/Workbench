import GObject from "gi://GObject";
import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

import Template from "./Modal.blp" assert { type: "uri" };

const trigger = Gtk.ShortcutTrigger.parse_string("Escape");

class Modal extends Adw.Window {
  #shortcut;

  constructor(params = {}) {
    super(params);

    this._container.append(this.child);

    this.#shortcut = new Gtk.Shortcut({
      trigger,
      action: Gtk.CallbackAction.new(this.#close_cb),
    });

    // Gtk.Widget.add_binding is missing in GJS
    Gtk.Widget.add_shortcut.call(Modal, this.#shortcut);
  }

  set child(obj) {
    this._child = obj;
  }

  get child() {
    return this._child;
  }

  #close_cb = () => {
    this.close();
    return true;
  };
}

export default GObject.registerClass(
  {
    GTypeName: "Modal",
    Template,
    InternalChildren: ["container"],
    Properties: {
      child: GObject.ParamSpec.object(
        "child",
        "",
        "",
        GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT_ONLY,
        Gtk.Widget.$gtype
      ),
    },
  },
  Modal
);

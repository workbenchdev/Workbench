import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

const AwesomeWidget = GObject.registerClass(
  {
    GTypeName: "AwesomeWidget",
    Template: workbench.template,
    Children: ["button"],
  },
  class AwesomeWidget extends Gtk.Box {
    _init(params = {}) {
      super._init(params);
    }
  }
);

const widget = new AwesomeWidget();
log(widget);
log(widget.button);

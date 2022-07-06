import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

const AwesomeButton = GObject.registerClass(
  {
    GTypeName: "AwesomeButton",
    Template: workbench.template,
  },
  class AwesomeButton extends Gtk.Button {
    _init(params = {}) {
      super._init(params);
    }

    onclicked() {
      console.log("Clicked");
    }
  }
);

const container = new Gtk.FlowBox({
  hexpand: true,
});

for (let i = 0; i < 100; i++) {
  const widget = new AwesomeButton();
  container.append(widget);
}

workbench.preview(container);

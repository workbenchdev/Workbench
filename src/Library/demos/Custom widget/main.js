import GObject from "gi://GObject";
import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

// rome-ignore lint(correctness/noUnusedVariables): https://github.com/rome/tools/issues/3779
const AwesomeButton = GObject.registerClass(
  {
    GTypeName: "AwesomeButton",
    Template: workbench.template,
  },
  class AwesomeButton extends Gtk.Button {
    constructor(params = {}) {
      super(params);
    }

    onclicked() {
      console.log("Clicked");
    }
  },
);

const container = new Gtk.FlowBox({
  hexpand: true,
});

for (let i = 0; i < 100; i++) {
  const widget = new AwesomeButton();
  container.append(widget);
}

workbench.preview(container);

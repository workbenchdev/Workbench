import Gtk from "gi://Gtk";
import Adw from "gi://Adw";

const flowbox = workbench.builder.get_object("flowbox");

for (let code = 128513; code <= 128591; code++) {
  addEmoji(flowbox, String.fromCodePoint(code));
}

flowbox.connect("child-activated", (_flowbox, item) => {
  // FlowBoxChild -> AdwBin -> Label
  const emoji = item.child.child.label;
  console.log("Unicode:", emoji.codePointAt(0).toString(16));
});

function addEmoji(flowbox, unicode) {
  const item = new Adw.Bin({
    child: new Gtk.Label({
      vexpand: true,
      hexpand: true,
      label: unicode,
      css_classes: ["emoji"],
    }),
    width_request: 100,
    height_request: 100,
    css_classes: ["card"],
  });
  flowbox.append(item);
}

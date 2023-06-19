import Gio from "gi://Gio";

const button_slide = workbench.builder.get_object("button_slide");
const button_crossfade = workbench.builder.get_object("button_crossfade");
const revealer_slide = workbench.builder.get_object("revealer_slide");
const revealer_crossfade = workbench.builder.get_object("revealer_crossfade");
const image1 = workbench.builder.get_object("image1");
const image2 = workbench.builder.get_object("image2");

let file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Revealer/image1.png",
);
image1.file = file;

file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Revealer/image2.png",
);
image2.file = file;

button_slide.connect("toggled", () => {
  revealer_slide.reveal_child = button_slide.active;
});

button_crossfade.connect("toggled", () => {
  revealer_crossfade.reveal_child = button_crossfade.active;
});

revealer_slide.connect("notify::child-revealed", () => {
  switch (revealer_slide.child_revealed) {
    case true:
      console.log("Slide Revealer Shown");
      break;
    case false:
      console.log("Slide Revealer Hidden");
      break;
  }
});

revealer_crossfade.connect("notify::child-revealed", () => {
  console.log("Crossfade Revealer Toggled");
});

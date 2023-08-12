import Gtk from "gi://Gtk";

const breakpoint = workbench.builder.get_object("breakpoint");
const image = workbench.builder.get_object("image");

breakpoint.connect("apply", () => {
  image.icon_size = Gtk.IconSize.NORMAL;
  console.log("Breakpoint Applied");
});

breakpoint.connect("unapply", () => {
  image.icon_size = Gtk.IconSize.LARGE;
  console.log("Breakpoint Unapplied");
});

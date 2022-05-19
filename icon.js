import Gtk from "gi://Gtk?version=4.0";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const display = Gdk.Display.get_default();
const theme = Gtk.IconTheme.get_for_display(display);
const icon_names = theme.get_icon_names();

const IconWidget = GObject.registerClass(
  {
    GTypeName: "IconWidget",
    Template: workbench.builder,
    Children: ["box"],
    InternalChildren: ["button"],
  },
  class IconWidget extends Gtk.Widget {
    _init(params = {}) {
      super._init(params);
    }
  },
);

icon_names
  .filter((icon_name) => !icon_name.startsWith("workbench"))
  .filter((icon_name) => !icon_name.startsWith("re.sonny"))
  .forEach((icon_name) => {
    const image = new Gtk.Image({
      icon_name,
      pixel_size: 24,
    });
    workbench.builder.get_object("cool").append(image);
  });


  using Gtk 4.0;

template IconWidget : Widget {

}


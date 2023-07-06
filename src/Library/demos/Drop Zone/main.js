import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const bin = workbench.builder.get_object("bin");
const drop_target = Gtk.DropTarget.new(Gio.File, Gdk.DragAction.MOVE);

bin.add_controller(drop_target);

drop_target.connect("drop", (self, value, x, y) => {
  if (!(value instanceof Gio.File)) return false;

  try {
    bin.child = createFileWidget(value);
  } catch (error) {
    console.log(`Unable to create file widget: ${error}`);
  }
});

function createFileWidget(file) {
  const widget = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    spacing: 6,
  });

  const file_info = file.query_info("standard::icon", 0, null);
  const icon = Gtk.Image.new_from_gicon(file_info.get_icon());
  widget.append(icon);
  icon.icon_size = Gtk.IconSize.LARGE;

  const file_name = new Gtk.Label({ label: file.get_basename() });
  widget.append(file_name);

  return widget;
}

import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const container = workbench.builder.get_object("container");
const drop_target = Gtk.DropTarget.new(Gio.File, Gdk.DragAction.MOVE);

container.add_controller(drop_target);

drop_target.connect("drop", (value, x, y) => {
  if (!(value instanceof Gio.File)) return false;
  const file = value.get_object();

  try {
    container.child = get_file_widget(file);
  } catch {
    console.log("aaa");
  }
});

function get_file_widget(file) {
  const file_info = file.query_info("standard::icon", 0);

  const widget = new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
  });

  const icon = new Gtk.Image.from_gicon(file_info.get_icon());
  widget.append(icon);
  icon.icon_size = Gtk.IconSize.LARGE;

  const file_name = new Gtk.Label({ label: file.get_basename() });
  widget.append(file_name);

  return widget;
}


import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const bin = workbench.builder.get_object("bin");

// Universal drop target for any String data
const string_drop_target = Gtk.DropTarget.new(
  GObject.TYPE_STRING,
  Gdk.DragAction.COPY,
);

bin.add_controller(string_drop_target);

string_drop_target.connect("drop", (_self, value, _x, _y) => {
  bin.child = createTextPreview(value);
  bin.remove_css_class("overlay-drag-area");
});

// Drop Target for Files
const file_drop_target = Gtk.DropTarget.new(Gio.File, Gdk.DragAction.COPY);
bin.add_controller(file_drop_target);
file_drop_target.connect("drop", (_self, value, _x, _y) => {
  try {
    bin.child = onDrop(value);
  } catch (err) {
    console.error(err, "Unable to load preview");
  }
  bin.remove_css_class("overlay-drag-area");
});

function onDrop(value) {
  if (!(value instanceof Gio.File)) return false;

  const file_info = value.query_info("standard::content-type", 0, null);
  const content_type = file_info.get_content_type();

  if (content_type.startsWith("image/")) {
    return createImagePreview(value);
  } else if (content_type.startsWith("video/")) {
    return createVideoPreview(value);
  } else {
    return createFilePreview(value);
  }
}

function createImagePreview(value) {
  const widget = createBoxWidget();

  const picture = Gtk.Picture.new_for_file(value);
  picture.can_shrink = true;
  picture.content_fit = Gtk.ContentFit.SCALE_DOWN;
  widget.append(picture);
  return widget;
}

function createTextPreview(text) {
  const widget = createBoxWidget();

  const label = new Gtk.Label({ label: text, wrap: true });
  widget.append(label);
  return widget;
}

function createVideoPreview(file) {
  const widget = createBoxWidget();
  const video = new Gtk.Video({ file: file });
  widget.append(video);
  return widget;
}

function createFilePreview(file) {
  const widget = createBoxWidget();

  const file_info = file.query_info("standard::icon", 0, null);
  const icon = Gtk.Image.new_from_gicon(file_info.get_icon());
  widget.append(icon);
  icon.icon_size = Gtk.IconSize.LARGE;

  const file_name = new Gtk.Label({ label: file.get_basename() });
  widget.append(file_name);

  return widget;
}

function createBoxWidget() {
  return new Gtk.Box({
    orientation: Gtk.Orientation.VERTICAL,
    halign: Gtk.Align.CENTER,
    valign: Gtk.Align.CENTER,
    spacing: 6,
    margin_top: 12,
    margin_bottom: 12,
    margin_start: 12,
    margin_end: 12,
  });
}

// Drop Hover Effect

file_drop_target.connect("enter", () => {
  bin.add_css_class("overlay-drag-area");
});

file_drop_target.connect("leave", () => {
  bin.remove_css_class("overlay-drag-area");
});

string_drop_target.connect("enter", () => {
  bin.add_css_class("overlay-drag-area");
});

string_drop_target.connect("leave", () => {
  bin.remove_css_class("overlay-drag-area");
});

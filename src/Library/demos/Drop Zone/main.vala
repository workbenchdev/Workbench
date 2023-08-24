#! /usr/bin/env -S vala workbench.vala --pkg gtk4 --pkg libadwaita-1 --pkg gio-2.0 --pkg gobject-2.0

using Gtk;
using GLib;
using Gdk;
using Adw;

void main() {
  Adw.Bin bin = workbench.builder.get_object("bin") as Adw.Bin;

  // Universal drop target for any String data
  var string_drop_target = new DropTarget(GLib.Type.STRING, Gdk.DragAction.COPY);
  bin.add_controller(string_drop_target);

  string_drop_target.drop.connect((self, value, x, y) => {
    bin.child = createTextPreview(value.get_string());
    bin.remove_css_class("overlay-drag-area");
    return true;
  });

  // Drop Target for Files
  var file_drop_target = new DropTarget(typeof(GLib.File), Gdk.DragAction.COPY);
  bin.add_controller(file_drop_target);

  file_drop_target.drop.connect((self, value, x, y) => {
    File file = value.get_object() as GLib.File;

    if (!(file is GLib.File))
      return false;

    try {
      var file_info = file.query_info("standard::content-type", 0, null);
      string content_type = file_info.get_content_type();
      if (content_type.has_prefix("image/")) {
        bin.child = createImagePreview(file);
      } else if (content_type.has_prefix("video/")) {
        bin.child = createVideoPreview(file);
      } else {
        bin.child = createFilePreview(file);
      }
    } catch (GLib.Error e) {
      message("Failed to retrieve file info: \"%s\"", e.message);
    }

    bin.remove_css_class("overlay-drag-area");
    return true;
  });

  // Drop Hover Effect
  file_drop_target.enter.connect(() => {
    bin.add_css_class("overlay-drag-area");
    return Gdk.DragAction.COPY;
  });

  file_drop_target.leave.connect(() => {
    bin.remove_css_class("overlay-drag-area");
    return;
  });

  string_drop_target.enter.connect(() => {
    bin.add_css_class("overlay-drag-area");
    return Gdk.DragAction.COPY;
  });

  string_drop_target.leave.connect(() => {
    bin.remove_css_class("overlay-drag-area");
    return;
  });
}

private Widget createImagePreview(GLib.File file) {
  var widget = createBoxWidget();

  var picture = new Picture() {
    file = file,
    can_shrink = true,
    content_fit = Gtk.ContentFit.SCALE_DOWN
  };
  widget.append(picture);

  return widget;
}

private Widget createTextPreview(string text) {
  var widget = createBoxWidget();

  var label = new Label(text) {
    wrap = true
  };
  widget.append(label);

  return widget;
}

private Widget createVideoPreview(GLib.File file) {
  var widget = createBoxWidget();

  var video = new Video.for_file(file);
  widget.append(video);

  return widget;
}

private Widget createFilePreview(GLib.File file) {
  var widget = createBoxWidget();

  try {
    var file_info = file.query_info("standard::icon", 0, null);
    var icon = new Image.from_gicon(file_info.get_icon());
    widget.append(icon);
    icon.icon_size = IconSize.LARGE;

    var file_name = new Label(file.get_basename());
    widget.append(file_name);
  } catch (GLib.Error e) {
    message("Failed to retrieve file icon: \"%s\"", e.message);
  }

  return widget;
}

private Box createBoxWidget() {
  var widget = new Box(Orientation.VERTICAL, 6);
  widget.halign = Align.CENTER;
  widget.valign = Align.CENTER;
  widget.margin_top = 12;
  widget.margin_bottom = 12;
  widget.margin_start = 12;
  widget.margin_end = 12;

  return widget;
}

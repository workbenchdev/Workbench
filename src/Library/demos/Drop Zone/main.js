import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const bin = workbench.builder.get_object("bin");

// Create a content formats builder and add multiple MIME types
const content_formats_builder = Gdk.ContentFormatsBuilder.new();
//content_formats_builder.add_gtype(GObject.TYPE_STRING);
//content_formats_builder.add_mime_type("text/plain");
content_formats_builder.add_mime_type("text/uri-list");
const formats = content_formats_builder.to_formats();

const generic_drop_target = new Gtk.DropTargetAsync({
  actions: Gdk.DragAction.COPY,
  formats: formats,
});

bin.add_controller(generic_drop_target);

// Connect drop event
generic_drop_target.connect("drop", async (self, drop, x, y) => {
  try {
<<<<<<< HEAD
    // Read data asynchronously
    const data = await new Promise((resolve, reject) => {
      drop.read_value_async(
        Gio.File, 
        Gdk.PRIORITY_DEFAULT, // I/O priority
        null, // GCancellable
        (drop, res) => {
          // Callback
          try {
            const actualValue = drop.read_value_finish(res);
            if (actualValue) {
              resolve(actualValue);
            } else {
              reject(new Error("Failed to read drop data"));
            }
          } catch (error) {
            reject(error);
          }
        },
      );
    });

    if (typeof data === "string") {
      const formats = drop.get_formats();
      const mime_types = formats.get_mime_types();

      if (mime_types.includes("text/plain")) {
        bin.child = createTextPreview(data);
      } else if (mime_types.includes("text/uri-list")) {
        const uris = data.split("\n");
        const file = Gio.File.new_for_uri(uris[0].trim());
        bin.child = await onDrop(file);
      }
    }

    bin.remove_css_class("overlay-drag-area");
    drop.finish(true);
  } catch (error) {
    console.log(error);
    drop.finish(false);
=======
    bin.child = onDrop(value);
  } catch (err) {
    console.error(err, "Unable to load preview");
>>>>>>> main
  }
});

async function onDrop(file) {
  try {
    // Log the file's URI for debugging
    console.log("Dropped file URI:", file.get_uri());

    // Log if the file exists
    const exists = file.query_exists(null);
    console.log("File exists:", exists);

    // Query the file's information
    const file_info = file.query_info(
      "standard::type,standard::content-type",
      0,
      null,
    );

    const content_type = file_info.get_content_type();
    const file_type = file_info.get_file_type();
    console.log("Content Type:", content_type, "File Type:", file_type); // Log types for debugging

    if (file_type === Gio.FileType.DIRECTORY) {
      return createFolderPreview(file);
    } else if (content_type.startsWith("image/")) {
      return createImagePreview(file);
    } else if (content_type.startsWith("video/")) {
      return createVideoPreview(file);
    } else {
      return createFilePreview(file);
    }
  } catch (error) {
    console.log("Error in onDrop:", error);
  }
}

function createFolderPreview(folder) {
  const widget = createBoxWidget();

  const folder_icon = Gtk.Image.new_from_icon_name("folder");
  widget.append(folder_icon);

  const folder_name = new Gtk.Label({ label: folder.get_basename() });
  widget.append(folder_name);

  return widget;
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

/* Drop Hover Effect

generic_drop_target.connect("enter", () => {
  bin.add_css_class("overlay-drag-area");
});

generic_drop_target.connect("leave", () => {
  bin.remove_css_class("overlay-drag-area");
});
*/

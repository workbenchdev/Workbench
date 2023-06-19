import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const controls = workbench.builder.get_object("controls");

const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Audio/Chopin-nocturne-op-9-no-2.ogg",
);

controls.media_stream = Gtk.MediaFile.new_for_file(file);


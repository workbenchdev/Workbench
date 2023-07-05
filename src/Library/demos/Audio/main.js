import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const controls = workbench.builder.get_object("controls");

const buttons = ["sound", "music"];
const audio_files = {
  sound: "Library/demos/Audio/Dog.ogg",
  music: "Library/demos/Audio/Chopin-nocturne-op-9-no-2.ogg",
};

buttons.forEach((button_name) => {
  const button = workbench.builder.get_object(`button_${button_name}`);
  const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
    audio_files[button_name],
  );

  button.connect("clicked", () => {
    if (controls.media_stream) {
      controls.media_stream.playing = false;
    }
    controls.media_stream = Gtk.MediaFile.new_for_file(file);
    controls.media_stream.play();
  });
});

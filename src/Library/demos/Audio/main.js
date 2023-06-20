import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const controls = workbench.builder.get_object("controls");

const buttons = ["dog", "cat", "cow", "bear", "music"];
const audio_files = {
  dog: "Library/demos/Audio/Dog.ogg",
  cat: "Library/demos/Audio/Cat.ogg",
  cow: "Library/demos/Audio/Cow.ogg",
  bear: "Library/demos/Audio/Bear.ogg",
  music: "Library/demos/Audio/Chopin-nocturne-op-9-no-2.ogg",
};

buttons.forEach((button_name) => {
  const button = workbench.builder.get_object(`${button_name}_button`);
  const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
    audio_files[button_name],
  );

  button.connect("clicked", () => {
    if (controls.media_stream) {
      controls.media_stream.stream_ended();
    }
    controls.media_stream = Gtk.MediaFile.new_for_file(file);
    controls.media_stream.play();
  });
});

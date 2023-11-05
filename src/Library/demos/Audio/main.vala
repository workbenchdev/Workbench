#!/usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var controls = (Gtk.MediaControls) workbench.builder.get_object ("controls");

  var audio_files = new HashTable<string, string> (string.hash, str_equal);
  audio_files["sound"] = "./Dog.ogg";
  audio_files["music"] = "./Chopin-nocturne-op-9-no-2.ogg";

  foreach (string button_name in audio_files.get_keys ()) {
    var button = (Gtk.Button) workbench.builder.get_object (@"button_$button_name");
    var file = File.new_for_uri (workbench.resolve (audio_files[button_name]));

    button.clicked.connect (() => {
      if (controls.media_stream != null) {
        controls.media_stream.playing = false;
      }
      controls.media_stream = Gtk.MediaFile.for_file (file);
      controls.media_stream.play_now ();
    });
  }
}

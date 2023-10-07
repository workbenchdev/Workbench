#! /usr/bin/env -S vala workbench.vala --pkg libadwaita-1

public void main () {
  var video = (Gtk.Video) workbench.builder.get_object ("video");
  video.file = File.new_for_uri (workbench.resolve ("./workbench-video.mp4"));

  var click_gesture = new Gtk.GestureClick ();
  click_gesture.pressed.connect (() => {
    Gtk.MediaStream media_stream = video.media_stream;

    if (media_stream.playing) {
      media_stream.pause ();
    } else {
      media_stream.play_now ();
    }
  });

  video.add_controller (click_gesture);
}

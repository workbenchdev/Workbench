import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

const video = workbench.builder.get_object("video");

video.file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Video/workbench-video.mp4",
);


const click_gesture = new Gtk.GestureClick();

click_gesture.connect("pressed", () => {
  const media_stream = video.media_stream;
  if (media_stream.playing) {
    media_stream.pause();
  } else {
    media_stream.play();
  }
});

video.add_controller(click_gesture);

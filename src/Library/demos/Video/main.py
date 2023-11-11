import gi

gi.require_version("Gtk", "4.0")
gi.require_version("Gio", "2.0")
from gi.repository import Gtk, Gio
import workbench

video: Gtk.Video = workbench.builder.get_object("video")
video.set_file(Gio.File.new_for_uri(workbench.resolve("./workbench-video.mp4")))


def on_pressed(*_):
    media_stream = video.get_media_stream()
    if media_stream.get_playing():
        media_stream.pause()
    else:
        media_stream.play()


click_gesture = Gtk.GestureClick()
click_gesture.connect("pressed", on_pressed)

video.add_controller(click_gesture)

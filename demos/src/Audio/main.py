import gi

gi.require_version("Gtk", "4.0")
from gi.repository import Gio, Gtk
import workbench

controls = workbench.builder.get_object("controls")

audio_files = {
    "sound": "./Dog.ogg",
    "music": "./Chopin-nocturne-op-9-no-2.ogg",
}


def on_button_clicked(_button, file):
    if controls.get_media_stream():
        controls.get_media_stream().set_playing(False)

    controls.set_media_stream(Gtk.MediaFile.new_for_file(file))
    controls.get_media_stream().play()


for button_name, file_name in audio_files.items():
    button = workbench.builder.get_object(f"button_{button_name}")
    file = Gio.File.new_for_uri(workbench.resolve(file_name))
    button.connect("clicked", on_button_clicked, file)

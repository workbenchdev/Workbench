from gi.repository import Gio
import workbench

button_slide = workbench.builder.get_object("button_slide")
button_crossfade = workbench.builder.get_object("button_crossfade")
revealer_slide = workbench.builder.get_object("revealer_slide")
revealer_crossfade = workbench.builder.get_object("revealer_crossfade")
image1 = workbench.builder.get_object("image1")
image2 = workbench.builder.get_object("image2")

image1.set_file(Gio.File.new_for_uri(workbench.resolve("./image1.png")))
image2.set_file(Gio.File.new_for_uri(workbench.resolve("./image2.png")))

button_slide.connect(
    "toggled", lambda *_: revealer_slide.set_reveal_child(button_slide.get_active())
)

button_crossfade.connect(
    "toggled",
    lambda *_: revealer_crossfade.set_reveal_child(button_crossfade.get_active()),
)

revealer_slide.connect(
    "notify::child-revealed",
    lambda *_: print(
        "Slide Revealer Shown"
        if revealer_slide.get_child_revealed()
        else "Slide Revealer Hidden"
    ),
)

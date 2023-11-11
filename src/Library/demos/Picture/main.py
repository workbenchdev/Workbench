import gi

from gi.repository import Gio
import workbench

picture_fill = workbench.builder.get_object("picture_fill")
picture_contain = workbench.builder.get_object("picture_contain")
picture_cover = workbench.builder.get_object("picture_cover")
picture_scale_down = workbench.builder.get_object("picture_scale_down")

file = Gio.File.new_for_uri(workbench.resolve("./keys.png"))

picture_fill.set_file(file)
picture_contain.set_file(file)
picture_cover.set_file(file)
picture_scale_down.set_file(file)

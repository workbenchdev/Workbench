import Gio from "gi://Gio";

const picture_fill = workbench.builder.get_object("picture_fill");
const picture_contain = workbench.builder.get_object("picture_contain");
const picture_cover = workbench.builder.get_object("picture_cover");
const picture_scale_down = workbench.builder.get_object("picture_scale_down");

const file = Gio.File.new_for_uri(workbench.resolve("./keys.png"));

picture_fill.file = file;
picture_contain.file = file;
picture_cover.file = file;
picture_scale_down.file = file;


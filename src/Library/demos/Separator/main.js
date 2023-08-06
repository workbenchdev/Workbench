import Gio from "gi://Gio";

const picture_one = workbench.builder.get_object("picture_one");
const picture_two = workbench.builder.get_object("picture_two");

const file = Gio.File.new_for_uri(workbench.resolve("./image.png"));

picture_one.file = file;
picture_two.file = file;

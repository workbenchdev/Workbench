import Gio from "gi://Gio";

const file = Gio.File.new_for_uri(workbench.resolve("./image.png"));

const picture = workbench.builder.get_object("picture");
picture.file = file;

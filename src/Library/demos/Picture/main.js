import Gio from "gi://Gio";

const picture1 = workbench.builder.get_object("picture1");
const picture2 = workbench.builder.get_object("picture2");
const picture3 = workbench.builder.get_object("picture3");

const file = Gio.File.new_for_uri(workbench.resolve("./keys.png"));

picture1.file = file;
picture2.file = file;
picture3.file = file;

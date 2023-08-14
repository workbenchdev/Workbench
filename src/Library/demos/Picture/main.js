import Gio from "gi://Gio";

const picture1 = workbench.builder.get_object("picture1");
const picture2 = workbench.builder.get_object("picture2");
const picture3 = workbench.builder.get_object("picture3");

const file1 = Gio.File.new_for_uri(workbench.resolve("./blobs.png"));
const file2 = Gio.File.new_for_uri(workbench.resolve("./drool.png"));
const file3 = Gio.File.new_for_uri(workbench.resolve("./keys.png"));

picture1.file = file1;
picture2.file = file2;
picture3.file = file3;

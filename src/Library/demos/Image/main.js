import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

const icon1 = workbench.builder.get_object("icon1");
const icon2 = workbench.builder.get_object("icon2");
const icon3 = workbench.builder.get_object("icon3");

const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Image/re.sonny.Workbench.png",
);

icon1.file = file.get_path();
icon2.file = file.get_path();
icon3.file = file.get_path();

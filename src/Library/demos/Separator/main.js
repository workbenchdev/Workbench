import Gio from "gi://Gio";
import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";

const picture_one = workbench.builder.get_object("picture_one");
const picture_two = workbench.builder.get_object("picture_two");

const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Frame/image.png",
);

picture_one.file = file;
picture_two.file = file;

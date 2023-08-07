import Gio from "gi://Gio";

const picture = workbench.builder.get_object("picture");
const content_fit_row = workbench.builder.get_object("content_fit_row");
const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Picture/blobs.png",
);

picture.file = file;
picture.content_fit = content_fit_row.selected;


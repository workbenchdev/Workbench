import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const picture = workbench.builder.get_object("picture");
const content_fit_row = workbench.builder.get_object("content_fit_row");
const file = Gio.File.new_for_path(pkg.pkgdatadir).resolve_relative_path(
  "Library/demos/Picture/blobs.png",
);

picture.file = file;
picture.content_fit = content_fit_row.selected;

content_fit_row.connect("notify::selected", () => {
  picture.content_fit = content_fit_row.selected;
});

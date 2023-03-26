import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";

const file = Gio.File.new_for_path("image.png");

const picture = workbench.builder.get_object("picture");
picture.set_file(file);

const toolbar = workbench.builder.get_object("toolbar");

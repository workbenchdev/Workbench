import Gtk from "gi://Gtk";
import Adw from "gi://Adw";
import Gdk from "gi://Gdk";
import GObject from "gi://GObject";

const root_box = workbench.builder.get_object("root_box");
const stack = workbench.builder.get_object("stack");
const navigation_row = workbench.builder.get_object("navigation_row");
let navigation_widget;




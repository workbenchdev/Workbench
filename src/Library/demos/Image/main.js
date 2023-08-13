import Gio from "gi://Gio";

const path = Gio.File.new_for_uri(
  workbench.resolve("workbench.png"),
).get_path();

workbench.builder.get_object("icon1").file = path;
workbench.builder.get_object("icon2").file = path;
workbench.builder.get_object("icon3").file = path;


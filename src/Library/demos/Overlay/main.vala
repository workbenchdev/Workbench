#!/usr/bin/env -S vala workbench.vala --pkg gio-2.0 --pkg gtk4 --pkg libadwaita-1

var file = File.new_for_uri(workbench.resolve("./image.png"));

var picture = workbench.builder.get_object("picture");
picture.file = file;

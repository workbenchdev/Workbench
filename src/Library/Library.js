import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import { decode } from "../util.js";

import resource from "./Library.blp";

const demo_dir = Gio.File.new_for_path(
  GLib.build_filenamev([pkg.pkgdatadir, "Library/demos"]),
);

export default function Library({
  openDemo,
  window: application_window,
  application,
}) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("library");

  let last_selected;

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new Adw.ActionRow({
      title: demo.name,
      subtitle: demo.description,
      activatable: true,
    });
    if (demo.name === "Welcome") last_selected = widget;
    widget.add_suffix(
      new Gtk.Image({
        icon_name: "go-next-symbolic",
      }),
    );
    widget.connect("activated", () => {
      last_selected = widget;
      openDemo(demo.name)
        .then(() => {
          application_window.present();
        })
        .catch(logError);
    });

    builder.get_object(`library_${demo.category}`).add(widget);
  });

  const action_library = new Gio.SimpleAction({
    name: "library",
    parameter_type: null,
  });
  action_library.connect("activate", () => {
    window.present();
    last_selected?.grab_focus();
  });
  application_window.add_action(action_library);
  application.set_accels_for_action("win.library", ["<Control><Shift>O"]);
}

export function readDemo(demo_name) {
  const javascript = readDemoFile(demo_name, "main.js");
  const css = readDemoFile(demo_name, "main.css");
  const xml = readDemoFile(demo_name, "main.ui");
  const blueprint = readDemoFile(demo_name, "main.blp");
  const vala = readDemoFile(demo_name, "main.vala");
  const json = JSON.parse(readDemoFile(demo_name, "main.json"));

  return { ...json, javascript, css, xml, blueprint, vala };
}

function getDemos() {
  const children = [
    ...demo_dir.enumerate_children(
      "",
      Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
      null,
    ),
  ];

  const folders = children.filter((file_info) => {
    return file_info.get_file_type() === Gio.FileType.DIRECTORY;
  });

  return folders.map((folder) => {
    return JSON.parse(readDemoFile(folder.get_name(), "main.json"));
  });
}

function readDemoFile(demo_name, file_name) {
  const file = demo_dir.resolve_relative_path(`${demo_name}/${file_name}`);

  let str;

  try {
    str = decode(file.load_contents(null)[1]);
  } catch (err) {
    if (err.code !== Gio.IOErrorEnum.NOT_FOUND) {
      throw err;
    }
    str = "";
  }

  return str;
}

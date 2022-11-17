import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import { decode } from "../util.js";

import resource from "./Library.blp";

const prefix = "/re/sonny/Workbench/Library";

export default function Library({
  openDemo,
  window: appliation_window,
  application,
}) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("library");
  window.set_transient_for(appliation_window);

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
        .then(() => window.close())
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
  appliation_window.add_action(action_library);
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
  return Gio.resources_enumerate_children(
    `${prefix}/demos`,
    Gio.ResourceLookupFlags.NONE,
  ).map((child) => {
    return JSON.parse(
      decode(
        Gio.resources_lookup_data(
          `${prefix}/demos/${child}main.json`,
          Gio.ResourceLookupFlags.NONE,
        ),
      ),
    );
  });
}

function readDemoFile(demo_name, file_name) {
  let str;

  try {
    str = decode(
      Gio.resources_lookup_data(
        `${prefix}/demos/${demo_name}/${file_name}`,
        Gio.ResourceLookupFlags.NONE,
      ),
    );
  } catch (err) {
    if (err.code !== Gio.ResourceError.NOT_FOUND) {
      throw err;
    }
    str = "";
  }

  return str;
}

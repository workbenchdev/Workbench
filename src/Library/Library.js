import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import { demos_dir, readDemoFile } from "../util.js";
import Window from "../window.js";

import resource from "./Library.blp";
import { createSession, createSessionFromDemo } from "../sessions.js";

export default function Library({ application }) {
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

      const file = createSessionFromDemo(demo.name);

      Window({ application, file });
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
  application.add_action(action_library);
  application.set_accels_for_action("app.library", ["<Control><Shift>O"]);
}

function getDemos() {
  const demos = [];

  for (const child of demos_dir.enumerate_children(
    "",
    Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
    null,
  )) {
    if (child.get_file_type() !== Gio.FileType.DIRECTORY) continue;

    let demo;
    try {
      demo = JSON.parse(readDemoFile(child.get_name(), "main.json"));
    } catch (err) {
      console.debug(err);
      continue;
    }

    if (demo.name !== child.get_name()) {
      console.warn(
        `The demo name "${
          demo.name
        }" does not match the folder name "${child.get_name()}" and will be ignored.`,
      );
      continue;
    }

    demos.push(demo);
  }

  return demos;
}

import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import { demos_dir, getDemo } from "../util.js";
import Window from "../window.js";

import resource from "./Library.blp";
import { createSessionFromDemo } from "../sessions.js";

import illustration from "./library.svg";

export default function Library({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("library");

  const picture_illustration = builder.get_object("picture_illustration");
  picture_illustration.set_resource(illustration);

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

      openDemo({ application, demo_name: demo.name }).catch(console.error);
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
      demo = getDemo(child.get_name());
    } catch (err) {
      console.debug(err);
      continue;
    }

    demos.push(demo);
  }

  return demos;
}

async function openDemo({ application, demo_name }) {
  const demo = getDemo(demo_name);
  const session = await createSessionFromDemo(demo);

  const is_js = session.settings.get_int("code-language") === 0;

  const { load } = Window({ application, session });
  await load({ run: demo.autorun && is_js });
}

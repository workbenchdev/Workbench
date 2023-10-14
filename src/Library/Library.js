import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import { demos_dir, getDemo, settings as global_settings } from "../util.js";
import Window from "../window.js";

import resource from "./Library.blp";
import { createSessionFromDemo } from "../sessions.js";
import EntryRow from "./EntryRow.js";

import illustration from "./library.svg";

export default function Library({ application }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const window = builder.get_object("library");

  const picture_illustration = builder.get_object("picture_illustration");
  picture_illustration.set_resource(illustration);

  let last_selected;

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new EntryRow({ demo: demo });
    if (demo.name === "Welcome") last_selected = widget;

    widget.connect("activated", (_self, language_name) => {
      last_selected = widget;

      openDemo({
        application,
        demo_name: demo.name,
        language_name,
      }).catch(console.error);
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

async function openDemo({ application, demo_name, language_name }) {
  const demo = getDemo(demo_name);
  const session = await createSessionFromDemo(demo);

  if (language_name) {
    switch (language_name.toLowerCase()) {
      case "javascript":
        session.settings.set_int("code-language", 0);
        global_settings.set_int("recent-code-language", 0);
        break;
      case "vala":
        session.settings.set_int("code-language", 1);
        global_settings.set_int("recent-code-language", 1);
        break;
      case "rust":
        session.settings.set_int("code-language", 2);
        global_settings.set_int("recent-code-language", 2);
        break;
    }
  }

  const is_js = session.settings.get_int("code-language") === 0;

  const { load } = Window({ application, session });
  await load({ run: demo.autorun && is_js });
}

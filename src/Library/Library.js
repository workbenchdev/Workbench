import Gio from "gi://Gio";

import {
  decode,
  demos_dir,
  getLanguage,
  settings as global_settings,
  quitOnLastWindowClose,
} from "../util.js";
import Window from "../window.js";

import resource from "./Library.blp" with { type: "uri" };
import { createSessionFromDemo } from "../sessions.js";
import EntryRow from "./EntryRow.js";

import illustration from "./library.svg";

import { build } from "../../troll/src/builder.js";

export default function Library({ application }) {
  const objects = build(resource);
  const { window, picture_illustration } = objects;
  window.application = application;
  picture_illustration.set_resource(illustration);

  let last_selected;

  window.connect("close-request", quitOnLastWindowClose);

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new EntryRow({ demo: demo });
    if (demo.name === "Welcome") last_selected = widget;

    widget.connect("activated", (_self, language) => {
      last_selected = widget;

      openDemo({
        application,
        demo_name: demo.name,
        language,
      }).catch(console.error);
    });

    objects[`library_${demo.category}`].add(widget);
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

const getDemos = (() => {
  let demos;
  return function getDemos() {
    if (!demos) {
      const file = demos_dir.get_child("../index.json");
      const [, data] = file.load_contents(null);
      demos = JSON.parse(decode(data));
    }
    return demos;
  };
})();

export function getDemo(name) {
  const demos = getDemos();
  return demos.find((demo) => demo.name === name);
}

async function openDemo({ application, demo_name, language }) {
  const demo = getDemo(demo_name);
  const session = createSessionFromDemo(demo);

  if (language) {
    session.settings.set_int("code-language", language.index);
    global_settings.set_int("recent-code-language", language.index);

    // If the user explictely requested to open the demo
    // in a specific language then that's probably what they are interested in
    // therefor override the demo default and force show the code panel
    session.settings.set_boolean("show-code", true);
  }

  // Override the user preferred language if the demo doesn't support it
  const lang = session.getCodeLanguage();
  if (demo.languages.length > 0 && !demo.languages.includes(lang.id)) {
    session.settings.set_int(
      "code-language",
      getLanguage(demo.languages[0]).index,
    );
  }

  const run = demo.autorun && session.getCodeLanguage().id === "javascript";
  const { load } = Window({ application, session });
  await load({ run });
}

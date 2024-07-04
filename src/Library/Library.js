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
  const { window, picture_illustration, search_entry } = objects;
  window.application = application;
  picture_illustration.set_resource(illustration);

  if (__DEV__) {
    window.add_css_class("devel");
  }

  let last_triggered;

  window.connect("close-request", quitOnLastWindowClose);

  const demos = getDemos();
  const widgets_map = new Map();
  const category_map = new Map();
  demos.forEach((demo) => {
    const entry_row = new EntryRow({ demo: demo });
    if (demo.name === "Welcome") last_triggered = entry_row;

    entry_row.connect("triggered", (_self, language) => {
      last_triggered = entry_row;

      openDemo({
        application,
        demo_name: demo.name,
        language,
      }).catch(console.error);
    });
    if (!category_map.has(demo.category)) {
      category_map.set(demo.category, objects[`library_${demo.category}`]);
    }
    objects[`library_${demo.category}`].append(entry_row);
    widgets_map.set(demo.name, { entry_row, category: demo.category });
  });

  search_entry.connect("search-changed", () => {
    const search_term = search_entry.get_text().toLowerCase();
    const visible_categories = new Set();

    widgets_map.forEach(({ entry_row, category }, demo_name) => {
      const is_match = demo_name.toLowerCase().includes(search_term);
      entry_row.visible = is_match;
      if (is_match) visible_categories.add(category);
    });

    category_map.forEach((category_widget, category_name) => {
      category_widget.visible = visible_categories.has(category_name);
    });
  });
  const action_library = new Gio.SimpleAction({
    name: "library",
    parameter_type: null,
  });
  action_library.connect("activate", () => {
    window.present();
    last_triggered?.grab_focus();
  });
  application.add_action(action_library);
  application.set_accels_for_action("app.library", ["<Control><Shift>O"]);
}

const getDemos = (() => {
  let demos;
  return function getDemos() {
    if (!demos) {
      const file = demos_dir.get_child("index.json");
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
  const session = await createSessionFromDemo(demo);

  if (language) {
    session.settings.set_int("code-language", language.index);
    global_settings.set_int("recent-code-language", language.index);

    // If the user explicitly requested to open the demo
    // in a specific language then that's probably what they are interested in
    // therefore override the demo default and force show the code panel
    session.settings.set_boolean("show-code", true);
  }

  const { autorun, languages } = demo;

  // Override the user preferred language if the demo doesn't support it
  const lang = session.getCodeLanguage();
  if (languages.length > 0 && !languages.includes(lang.id)) {
    session.settings.set_int(
      "code-language",
      getLanguage(demo.languages[0]).index,
    );
  }

  const { load, runCode } = Window({ application, session });
  await load();

  const code_language = session.getCodeLanguage();
  const run = autorun && code_language.id === "javascript";
  if (run) {
    await runCode();
  }
}

import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

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
import { gettext as _ } from "gettext";

import { build } from "../../troll/src/builder.js";

export default function Library({ application }) {
  const objects = build(resource);
  const {
    window,
    picture_illustration,
    search_entry,
    dropdown_category,
    dropdown_language,
    results_empty,
    button_reset,
  } = objects;
  window.application = application;
  picture_illustration.set_resource(illustration);

  if (__DEV__) {
    window.add_css_class("devel");
  }

  let last_triggered;

  window.connect("close-request", quitOnLastWindowClose);

  const demos = getDemos();
  const widgets_map = new Map();
  // const category_map = new Map(

  // );

  // if (!category_map.has(demo.category)) {
  //   category_map.set(demo.category, objects[`library_${demo.category}`]);
  // }
  const categories = [
    { id: "uncategorized", label: _("Uncategorized"), index: 1 },
    { id: "tools", label: _("Tools"), index: 2 },
    { id: "network", label: _("Network"), index: 3 },
    { id: "controls", label: _("Controls"), index: 4 },
    { id: "layout", label: _("Layout"), index: 5 },
    { id: "feedback", label: _("Feedback"), index: 6 },
    { id: "navigation", label: _("Navigation"), index: 7 },
    { id: "user_interface", label: _("User Interface"), index: 8 },
    { id: "platform", label: _("Platform APIs"), index: 9 },
  ];
  categories.forEach((category) => {
    category.widget = objects[`library_${category.id}`];
  });

  const language_model = new Gtk.StringList();
  language_model.append(_("Any Language"));
  dropdown_language.set_model(language_model);
  const language_check = [_("Any Language")];
  const language_labels = {
    javascript: _("JavaScript"),
    python: _("Python"),
    rust: _("Rust"),
    vala: _("Vala"),
    typescript: _("TypeScript"),
  };
  Object.values(language_labels).forEach((str) => language_model.append(str));

  const category_model = new Gtk.StringList();
  category_model.append(_("Any Category"));
  categories.forEach((category) => category_model.append(category.label));
  dropdown_category.set_model(category_model);

  demos.forEach((demo) => {
    demo.languages.forEach((lang) => {
      if (!language_check.includes(lang)) {
        language_check.push(lang);
      }
    });

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
    const category = categories.find(
      (category) => category.id === demo.category,
    );
    category.widget.append(entry_row);
    widgets_map.set(demo.name, {
      entry_row,
      category_index: category.index,
      languages_index: demo.languages.map((lang) =>
        language_check.indexOf(lang),
      ),
    });
  });

  function updateList() {
    const current_category = dropdown_category.get_selected();
    const current_language = dropdown_language.get_selected();

    const search_term = search_entry.get_text().toLowerCase();
    const visible_categories = new Set();
    let results_found = false;
    widgets_map.forEach(
      ({ entry_row, category_index, languages_index }, demo_name) => {
        const category_match =
          current_category === 0 || category_index === current_category;
        const language_match =
          current_language === 0 || languages_index.includes(current_language);
        const search_match = demo_name.toLowerCase().includes(search_term);
        const is_match =
          category_match &&
          language_match &&
          (search_term === "" || search_match);
        entry_row.visible = is_match;
        if (is_match) {
          results_found = true;
          visible_categories.add(
            categories.find((cat) => cat.index === category_index).id,
          );
        }
      },
    );

    categories.forEach((category) => {
      const label = objects[`label_${category.id}`];
      if (label)
        label.visible =
          current_category === 0 &&
          current_language === 0 &&
          search_term === "";
      category.widget.visible = visible_categories.has(category.id);
    });
    results_empty.set_visible(!results_found);
  }

  search_entry.connect("search-changed", updateList);
  dropdown_category.connect("notify::selected", updateList);
  dropdown_language.connect("notify::selected", updateList);

  button_reset.connect("clicked", () => {
    search_entry.text = "";
    dropdown_category.selected = 0;
    dropdown_language.selected = 0;
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

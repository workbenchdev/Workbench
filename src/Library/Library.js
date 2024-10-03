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
import { gettext as _ } from "gettext";

import { build } from "../../troll/src/builder.js";
import {
  needsAdditionalPermissions,
  showPermissionsDialog,
} from "../Permissions/Permissions.js";

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
    listbox,
    scrolled_window,
  } = objects;
  window.application = application;
  picture_illustration.set_resource(illustration);

  if (__DEV__) {
    window.add_css_class("devel");
  }

  let last_triggered;

  window.connect("close-request", quitOnLastWindowClose);

  const categories = [
    { id: "all", name: _("Any Category"), index: 0 },
    { id: "tools", name: _("Tools"), index: 1 },
    { id: "network", name: _("Network"), index: 2 },
    { id: "controls", name: _("Controls"), index: 3 },
    { id: "layout", name: _("Layout"), index: 4 },
    { id: "feedback", name: _("Feedback"), index: 5 },
    { id: "navigation", name: _("Navigation"), index: 6 },
    { id: "user_interface", name: _("User Interface"), index: 7 },
    { id: "platform", name: _("Platform APIs"), index: 8 },
  ];
  const categories_by_id = Object.fromEntries(
    categories.map((category) => [category.id, category]),
  );
  const categories_by_index = Object.fromEntries(
    categories.map((category) => [category.index, category]),
  );
  const category_all = categories_by_id["all"];

  categories.forEach((category) => {
    dropdown_category.model.append(category.name);
  });

  const languages = [
    { id: "all", name: _("Any Language"), index: 0 },
    { id: "javascript", name: _("JavaScript"), index: 1 },
    { id: "python", name: _("Python"), index: 2 },
    { id: "rust", name: _("Rust"), index: 3 },
    { id: "vala", name: _("Vala"), index: 4 },
    { id: "typescript", name: _("TypeScript"), index: 5 },
  ];
  const languages_by_id = Object.fromEntries(
    languages.map((language) => [language.id, language]),
  );
  const languages_by_index = Object.fromEntries(
    languages.map((language) => [language.index, language]),
  );
  languages.forEach((language) => {
    dropdown_language.model.append(language.name);
  });

  const demos = getDemos();
  const entries = demos.map((demo) => {
    const entry_row = new EntryRow({ demo });
    if (demo.name === "Welcome") last_triggered = entry_row;

    entry_row.connect("triggered", (_self, language) => {
      last_triggered = entry_row;

      openDemo({
        application,
        demo_name: demo.name,
        language,
      }).catch(console.error);
    });
    listbox.append(entry_row);

    const category = categories_by_id[demo.category];
    const widget = entry_row;
    const languages = demo.languages.map((lang) => languages_by_id[lang]);

    return { ...demo, category, widget, languages };
  });

  const language_all = languages_by_id["all"];

  function updateList() {
    const current_category =
      categories_by_index[dropdown_category.get_selected()];
    const current_language =
      languages_by_index[dropdown_language.get_selected()];

    const search_term = search_entry.get_text().toLowerCase();
    let results_found = false;
    entries.forEach(({ name, description, category, languages, widget }) => {
      const category_match =
        current_category === category_all || category === current_category;
      const language_match =
        current_language === language_all ||
        languages.includes(current_language);
      const search_match =
        search_term === "" ||
        name.toLowerCase().includes(search_term) ||
        description.toLowerCase().includes(search_term) ||
        category.name.toLowerCase().includes(search_term);
      const is_match = category_match && language_match && search_match;
      widget.visible = is_match;
      if (is_match) {
        results_found = true;
      }
    });

    results_empty.visible = !results_found;
  }

  search_entry.connect("search-changed", updateList);
  dropdown_category.connect("notify::selected", updateList);
  dropdown_language.connect("notify::selected", updateList);

  function reset() {
    scrolled_window.vadjustment = null;
    search_entry.text = "";
    dropdown_category.selected = category_all.index;
    dropdown_language.selected = language_all.index;
  }
  button_reset.connect("clicked", reset);
  window.connect("show", reset);

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

  const { load, runCode, window } = Window({
    application,
    session,
  });
  await load();

  if (needsAdditionalPermissions({ demo })) {
    showPermissionsDialog({ window });
    return;
  }

  const code_language = session.getCodeLanguage();
  const run = autorun && code_language.id === "javascript";
  if (run) {
    await runCode();
  }
}

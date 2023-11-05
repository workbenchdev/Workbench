import Gio from "gi://Gio";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

import { LSPError } from "./lsp/LSP.js";
import {
  unstack,
  listenProperty,
  getLanguage,
  makeDropdownFlat,
} from "./util.js";

import {
  setup as setupBlueprint,
  logBlueprintError,
} from "./langs/blueprint/blueprint.js";

// eslint-disable-next-line no-restricted-globals
const { addSignalMethods } = imports.signals;

const lang_blueprint = getLanguage("blueprint");
const lang_xml = getLanguage("xml");
export const ui_languages = [lang_blueprint, lang_xml];

export default function PanelUI({
  application,
  builder,
  term_console,
  document_xml,
  document_blueprint,
  settings,
}) {
  let lang;

  const code_view_xml = document_xml.code_view;
  const code_view_blueprint = document_blueprint.code_view;

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

  const buffer_blueprint = code_view_blueprint.buffer;
  const buffer_xml = code_view_xml.buffer;

  const button_ui = builder.get_object("button_ui");
  const panel_ui = builder.get_object("panel_ui");

  settings.bind("show-ui", button_ui, "active", Gio.SettingsBindFlags.DEFAULT);
  button_ui.bind_property(
    "active",
    panel_ui,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  const stack_ui = builder.get_object("stack_ui");
  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");
  makeDropdownFlat(dropdown_ui_lang);
  dropdown_ui_lang.set_selected(settings.get_enum("user-interface-language"));

  const blueprint = setupBlueprint({
    document: document_blueprint,
  });

  async function convertToXML() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    const xml = await blueprint.compile(buffer_blueprint.text);
    code_view_xml.replaceText(xml);
  }

  async function convertToBlueprint() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    const blp = await blueprint.decompile(buffer_xml.text);

    code_view_blueprint.replaceText(blp);
  }

  const button_ui_experimental_blueprint = builder.get_object(
    "button_ui_experimental_blueprint",
  );
  button_ui_experimental_blueprint.connect("clicked", () => {
    const modal = builder.get_object("modal_blueprint_experimental");
    modal.set_transient_for(application.get_active_window());
    modal.present();
  });
  const button_blueprint_documentation = builder.get_object(
    "button_blueprint_documentation",
  );
  button_blueprint_documentation.connect("clicked", () => {
    Gtk.show_uri(
      null,
      "https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/",
      null,
    );
  });

  let handler_id_xml = null;
  let handler_id_blueprint = null;

  // FIXME we should wait for previewer update instead
  // when loading demo
  async function update() {
    if (lang === lang_blueprint) {
      onXML(await blueprint.compile());
    } else if (lang === lang_xml) {
      onXML(buffer_xml.text);
    }
  }

  function onXML(xml) {
    panel.xml = xml || "";
    panel.emit("updated");
  }

  const onBlueprint = unstack(function onBlueprint() {
    return blueprint.compile().then(onXML);
  }, console.error);

  function start() {
    stop();
    lang = getLanguage(settings.get_string("user-interface-language"));
    handler_id_xml = code_view_xml.connect("changed", () => {
      if (lang !== lang_xml) return;
      onXML(code_view_xml.buffer.text);
    });
    handler_id_blueprint = code_view_blueprint.connect("changed", onBlueprint);
  }

  function stop() {
    if (handler_id_xml !== null) {
      code_view_xml.disconnect(handler_id_xml);
      handler_id_xml = null;
    }
    if (handler_id_blueprint !== null) {
      code_view_blueprint.disconnect(handler_id_blueprint);
      handler_id_blueprint = null;
    }
  }

  const dropdown_selected_signal = listenProperty(
    dropdown_ui_lang,
    "selected",
    (value) => {
      const lang = ui_languages[value];
      onChangeLang(lang).catch(console.error);
    },
  );

  async function onChangeLang(lang) {
    if (lang === lang_xml) {
      try {
        await convertToXML();
      } catch (err) {
        console.error(err);
        // FIXME: Looks like the block() calls don't work
        // and the notify::selected signal is emitted
        dropdown_selected_signal.block();
        dropdown_ui_lang.set_selected(ui_languages.indexOf(lang_blueprint));
        dropdown_selected_signal.unblock();
        return;
      }
    } else if (lang === lang_blueprint) {
      try {
        await convertToBlueprint();
      } catch (err) {
        if (err instanceof LSPError) {
          logBlueprintError(err);
        } else {
          console.error(err);
        }
        dropdown_selected_signal.block();
        dropdown_ui_lang.set_selected(ui_languages.indexOf(lang_xml));
        dropdown_selected_signal.unblock();
        return;
      }
    }

    settings.set_string("user-interface-language", lang.id);
    setupLanguage();
  }

  function setupLanguage() {
    start();
    stack_ui.set_visible_child_name(lang.id);
    button_ui_experimental_blueprint.visible = lang === lang_blueprint;
  }
  setupLanguage();

  panel.start = start;
  panel.stop = stop;
  panel.update = update;
  panel.panel = panel_ui;
  panel.format = blueprint.format;

  return panel;
}

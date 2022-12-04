import Gio from "gi://Gio";
import GObject from "gi://GObject";
import Gtk from "gi://Gtk";

import { LSPError } from "./lsp/LSP.js";
import {
  getLanguage,
  settings,
  connect_signals,
  disconnect_signals,
  replaceBufferText,
  unstack,
} from "./util.js";

import {
  setup as setupBlueprint,
  logBlueprintError,
} from "./langs/blueprint/blueprint.js";

const { addSignalMethods } = imports.signals;

export default function PanelUI({
  application,
  builder,
  data_dir,
  term_console,
}) {
  let lang;

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

  const buffer_blueprint = getLanguage("blueprint").document.buffer;
  const buffer_xml = getLanguage("xml").document.buffer;

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
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_ui_lang.get_first_child().get_style_context().add_class("flat");

  const { compile, decompile } = setupBlueprint({ data_dir });

  async function convertToXML() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    const xml = await compile();
    replaceBufferText(buffer_xml, xml);
    settings.set_int("ui-language", 0);
  }
  const button_ui_export_xml = builder.get_object("button_ui_export_xml");
  button_ui_export_xml.connect("clicked", () => {
    convertToXML().catch(logError);
  });

  async function convertToBlueprint() {
    term_console.clear();
    settings.set_boolean("show-console", true);

    let blp;

    try {
      blp = await decompile(buffer_xml.text);
    } catch (err) {
      if (err instanceof LSPError) {
        logBlueprintError(err);
        return;
      }
      throw err;
    }

    replaceBufferText(buffer_blueprint, blp);
    settings.set_int("ui-language", 1);
  }
  const button_ui_export_blueprint = builder.get_object(
    "button_ui_export_blueprint",
  );
  button_ui_export_blueprint.connect("clicked", () => {
    convertToBlueprint().catch(logError);
  });

  settings.bind(
    "ui-language",
    dropdown_ui_lang,
    "selected",
    Gio.SettingsBindFlags.DEFAULT,
  );

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

  dropdown_ui_lang.connect("notify::selected-item", switchLanguage);
  function switchLanguage() {
    const language = getLanguage(dropdown_ui_lang.selected_item.string);
    stack_ui.set_visible_child_name(language.id);
    button_ui_experimental_blueprint.visible = language.id === "blueprint";
  }
  switchLanguage();

  let handler_ids = null;

  const scheduleUpdate = unstack(update);
  async function update() {
    let xml;
    if (lang.id === "xml") {
      xml = lang.document.buffer.text;
    } else {
      xml = await compile();
    }
    panel.xml = xml || "";
    panel.emit("updated");
  }

  function start() {
    stop();
    lang = getLanguage(dropdown_ui_lang.selected_item.string);
    // cannot use "changed" signal as it triggers many time for pasting
    handler_ids = connect_signals(lang.document.buffer, {
      "end-user-action": scheduleUpdate,
      undo: scheduleUpdate,
      redo: scheduleUpdate,
    });
  }

  function stop() {
    if (handler_ids !== null) {
      disconnect_signals(lang.document.buffer, handler_ids);
      handler_ids = null;
    }
  }

  settings.connect_after("changed::ui-language", () => {
    start();
    scheduleUpdate();
  });

  start();

  panel.start = start;
  panel.stop = stop;
  panel.update = update;
  panel.panel = panel_ui;

  return panel;
}

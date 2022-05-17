import Gio from "gi://Gio";
import { settings } from "./util.js";
import GObject from "gi://GObject";
import GLib from "gi://GLib";

import LSPClient from "./lsp/LSPClient.js";

const { addSignalMethods } = imports.signals;

export default function PanelUI({
  document_xml,
  document_blueprint,
  builder,
  data_dir,
}) {
  const blueprint = new LSPClient([
    "blueprint-compiler",
    "lsp",
    "--logfile",
    GLib.build_filenamev([data_dir, `blueprint-logs`]),
  ]);
  blueprint.connect("exit", () => {
    console.debug("blueprint exit");
  });
  blueprint.connect("output", (self, message) => {
    console.debug("blueprint OUT:\n", message);
  });
  blueprint.connect("input", (self, message) => {
    console.debug("blueprint IN:\n", message);
  });

  const button_ui = builder.get_object("button_ui");
  const panel_ui = builder.get_object("panel_ui");
  settings.bind("show-ui", button_ui, "active", Gio.SettingsBindFlags.DEFAULT);
  button_ui.bind_property(
    "active",
    panel_ui,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );
  let lang;

  const panel = {
    xml: "",
  };
  addSignalMethods(panel);

  const dropdown_ui_lang = builder.get_object("dropdown_ui_lang");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_ui_lang
    .get_first_child()
    .get_first_child()
    .get_style_context()
    .add_class("flat");

  settings.bind(
    "ui-lang",
    dropdown_ui_lang,
    "active_id",
    Gio.SettingsBindFlags.DEFAULT
  );
  settings.bind(
    "ui-lang",
    builder.get_object("stack_ui"),
    "visible-child-name",
    Gio.SettingsBindFlags.DEFAULT
  );

  let handler_id_blueprint = null;
  let handler_id_xml = null;

  async function update() {
    let xml;
    if (lang === "xml") {
      xml = document_xml.buffer.text;
    } else {
      xml = await compileBlueprint(document_blueprint.buffer.text);
    }
    panel.xml = xml;
    panel.emit("updated");
  }

  function onUpdate() {
    update().catch(logError);
  }
  function start() {
    stop();
    lang = settings.get_string("ui-lang");
    if (lang === "blueprint") {
      handler_id_blueprint = document_blueprint.buffer.connect(
        "end-user-action",
        onUpdate
      );
    } else if (lang === "xml") {
      handler_id_xml = document_xml.buffer.connect("end-user-action", onUpdate);
    }
  }

  function stop() {
    if (handler_id_blueprint !== null) {
      document_blueprint.buffer.disconnect(handler_id_blueprint);
      handler_id_blueprint = null;
    }

    if (handler_id_xml !== null) {
      document_xml.buffer.disconnect(handler_id_xml);
      handler_id_xml = null;
    }
  }

  settings.connect_after("changed::ui-lang", () => {
    start();
    onUpdate();
  });
  start();

  async function compileBlueprint(text) {
    if (!blueprint.proc) {
      blueprint.start();

      // await lsp_client.request("initialize");
      // Make Blueprint language server cache Gtk 4
      // to make subsequence call faster (~500ms -> ~3ms)
      // await lsp_client.request("x-blueprintcompiler/compile", {
      //   text: "using Gtk 4.0;\nBox {}",
      // });
    }

    const { xml } = await blueprint.request("x-blueprintcompiler/compile", {
      text,
    });
    return xml;
  }

  panel.start = start;
  panel.stop = stop;
  panel.update = update;

  return panel;
}

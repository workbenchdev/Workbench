import Gio from "gi://Gio";
import { settings } from "./util.js";
import GObject from "gi://GObject";
import GLib from "gi://GLib";

import LSPClient from "./lsp/LSPClient.js";

const { addSignalMethods } = imports.signals;

export default function PanelUI({
  source_view_xml,
  source_view_blueprint,
  builder,
  data_dir,
}) {
  const button_ui = builder.get_object("button_ui");
  const panel_ui = builder.get_object("panel_ui");
  settings.bind("show-ui", button_ui, "active", Gio.SettingsBindFlags.DEFAULT);
  button_ui.bind_property(
    "active",
    panel_ui,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

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

  const { buffer: buffer_blueprint } = source_view_blueprint;
  const { buffer: buffer_xml } = source_view_xml;
  let handler_id_blueprint = null;
  let handler_id_xml = null;
  function onChangeBlueprint() {
    compileBlueprint(buffer_blueprint.text)
      .then((xml) => {
        panel.xml = xml;
        panel.emit("changed");
      })
      .catch(logError);
  }
  function onChangeXML() {
    panel.xml = buffer_xml.text;
    panel.emit("changed");
  }
  function disconnect() {
    if (handler_id_blueprint) {
      buffer_blueprint.disconnect(handler_id_blueprint);
      handler_id_blueprint = null;
    }
    if (handler_id_xml) {
      buffer_xml.disconnect(handler_id_xml);
      handler_id_xml = null;
    }
  }

  function setupLang() {
    disconnect();

    const lang = settings.get_string("ui-lang");

    if (lang === "blueprint") {
      handler_id_blueprint = buffer_blueprint.connect(
        "changed",
        onChangeBlueprint
      );
      onChangeBlueprint();
    } else if (lang === "xml") {
      handler_id_xml = buffer_xml.connect("changed", onChangeXML);
      onChangeXML();
    }
  }

  settings.connect_after("changed::ui-lang", () => {
    setupLang();
  });
  setupLang();

  const bls = new LSPClient([
    "blueprint-compiler",
    "lsp",
    "--logfile",
    GLib.build_filenamev([data_dir, `blueprint-logs`]),
  ]);
  // bls.connect("exit", (self, message) => {
  //   console.log("ls exit", message);
  // });
  // bls.connect("output", (self, message) => {
  //   console.log("ls OUT:\n", message);
  // });
  // bls.connect("input", (self, message) => {
  //   console.log("ls IN:\n", message);
  // });

  async function compileBlueprint(text) {
    if (!bls.proc) {
      bls.start();

      // await lsp_client.request("initialize");
      // Make Blueprint language server cache Gtk 4
      // to make subsequence call faster (~500ms -> ~3ms)
      // await lsp_client.request("x-blueprintcompiler/compile", {
      //   text: "using Gtk 4.0;\nBox {}",
      // });
    }

    const { xml } = await bls.request("x-blueprintcompiler/compile", {
      text,
    });
    return xml;
  }

  return panel;
}

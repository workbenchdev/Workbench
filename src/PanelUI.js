import Gio from "gi://Gio";
import { settings } from "./util.js";

import LSPClient from "./lsp/LSPClient.js";

export default function PanelUI({
  source_view_xml,
  source_view_blueprint,
  builder,
}) {
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

  source_view_blueprint.buffer.connect_after("changed", () => {
    compileBlueprint(source_view_blueprint.buffer.text)
      .then((xml) => {
        source_view_xml.buffer.text = xml.trim();
      })
      .catch(logError);
  });
}

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

const bls = new LSPClient(["blueprint-compiler", "lsp"]);
// bls.connect("exit", (self, message) => {
//   console.log("ls exit", message);
// });
// bls.connect("output", (self, message) => {
//   console.log("ls OUT:\n", message);
// });
// bls.connect("input", (self, message) => {
//   console.log("ls IN:\n", message);
// });

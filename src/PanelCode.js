import Gio from "gi://Gio";
import GLib from "gi://GLib";
import GObject from "gi://GObject";

import LSPClient from "./lsp/LSPClient.js";

import {
  getLanguage,
  settings,
  prepareSourceView,
  handleDiagnostics,
} from "./util.js";
import WorkbenchHoverProvider from "./WorkbenchHoverProvider.js";
import { getPid } from "../troll/src/util.js";

export default function PanelCode({ builder, previewer, data_dir }) {
  const panel_code = builder.get_object("panel_code");
  const button_code = builder.get_object("button_code");
  const stack_code = builder.get_object("stack_code");

  const buffer_vala = getLanguage("vala").document.buffer;
  const state_file = getLanguage("vala").document.file;
  const provider = new WorkbenchHoverProvider();

  const api_file = Gio.File.new_for_path(
    GLib.build_filenamev([pkg.pkgdatadir, "workbench-api.vala"])
  );

  let document_version = 0;
  prepareSourceView({
    source_view: getLanguage("vala").document.source_view,
    provider,
  });

  const vls = createVLSClient({
    data_dir,
    buffer: buffer_vala,
    provider,
  });

  const dropdown_code_lang = builder.get_object("dropdown_code_lang");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_code_lang.get_first_child().get_style_context().add_class("flat");

  settings.bind(
    "show-code",
    button_code,
    "active",
    Gio.SettingsBindFlags.DEFAULT
  );
  button_code.bind_property(
    "active",
    panel_code,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

  settings.bind(
    "code-language",
    dropdown_code_lang,
    "selected",
    Gio.SettingsBindFlags.DEFAULT
  );
  dropdown_code_lang.connect("notify::selected-item", switchLanguage);

  const panel = {
    panel: panel_code,
  };

  function switchLanguage() {
    panel.language = dropdown_code_lang.selected_item.string;
    stack_code.visible_child_name = panel.language;
    previewer.useInternal();
    previewer.update();
  }
  switchLanguage();

  async function setupLSP() {
    if (vls.proc) return;
    vls.start();

    api_file.copy(
      Gio.File.new_for_path(data_dir).get_child("workbench.vala"),
      Gio.FileCopyFlags.OVERWRITE,
      null,
      null
    );

    // https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initialize
    await vls.request("initialize", {
      processId: getPid(),
      clientInfo: {
        name: "re.sonny.Workbench",
        version: pkg.name,
      },
      rootPath: data_dir,
      rootUri: Gio.File.new_for_path(data_dir).get_uri(),
    });

    await vls.notify("textDocument/didOpen", {
      textDocument: {
        uri: state_file.get_uri(),
        languageId: "vala",
        version: ++document_version,
        text: buffer_vala.text,
      },
    });
  }
  setupLSP().catch(logError);

  function createVLSClient({ data_dir, buffer, provider }) {
    const vls = new LSPClient([
      // "/usr/lib/sdk/vala/bin/vala-language-server",
      "vala-language-server",
    ]);
    vls.connect("exit", () => {
      console.debug("vls exit");
    });
    vls.connect("output", (self, message) => {
      console.debug(`vls OUT:\n${JSON.stringify(message)}`);
    });
    vls.connect("input", (self, message) => {
      console.debug(`vls IN:\n${JSON.stringify(message)}`);
    });

    vls.connect(
      "notification::textDocument/publishDiagnostics",
      (self, { diagnostics, uri }) => {
        if (!state_file.equal(Gio.File.new_for_uri(uri))) {
          return;
        }
        diagnostics.language = "Vala";
        handleDiagnostics({ diagnostics, buffer, provider });
      }
    );

    buffer.connect("modified-changed", () => {
      if (!buffer.get_modified()) return;
      updateVLS().catch(logError);
    });

    return vls;
  }

  async function updateVLS() {
    await setupLSP();

    await vls.notify("textDocument/didChange", {
      textDocument: {
        uri: state_file.get_uri(),
        version: ++document_version,
      },
      contentChanges: [{ text: buffer_vala.text }],
    });
  }

  return panel;
}

import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Adw from "gi://Adw";

import { buildRuntimePath, quitOnLastWindowClose } from "./util.js";
import { languages } from "./common.js";
import PanelUI from "./PanelUI.js";
import PanelCode from "./PanelCode.js";
import PanelStyle from "./PanelStyle.js";
import Devtools from "./Devtools.js";

import Previewer from "./Previewer/Previewer.js";
import ValaCompiler from "./langs/vala/Compiler.js";
import RustCompiler from "./langs/rust/Compiler.js";
import PythonBuilder from "./langs/python/Builder.js";
import ThemeSelector from "../troll/src/widgets/ThemeSelector.js";

import resource from "./window.blp";

import "./icons/re.sonny.Workbench-beaker.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-code-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-placeholder-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-preview-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-ui-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-screenshot-symbolic.svg" with { type: "icon" };

import "./widgets/Modal.js";
import "./widgets/CodeView.js";
import {
  deleteSession,
  removeFromRecentProjects,
  saveSessionAsProject,
} from "./sessions.js";
import {
  action_extensions,
  isRustEnabled,
  isValaEnabled,
} from "./Extensions/Extensions.js";
import { JavaScriptDocument } from "./langs/javascript/JavaScriptDocument.js";
import { BlueprintDocument } from "./langs/blueprint/BlueprintDocument.js";
import { CssDocument } from "./langs/css/CssDocument.js";
import { RustDocument } from "./langs/rust/RustDocument.js";
import { PythonDocument } from "./langs/python/PythonDocument.js";
import { XmlDocument } from "./langs/xml/XmlDocument.js";
import { ValaDocument } from "./langs/vala/ValaDocument.js";

const style_manager = Adw.StyleManager.get_default();

export default function Window({ application, session }) {
  const langs = Object.fromEntries(
    languages.map((lang) => [lang.id, { ...lang }]),
  );

  const { settings } = session;

  const builder = Gtk.Builder.new_from_resource(resource);

  const window = builder.get_object("window");
  if (__DEV__) {
    window.add_css_class("devel");
  }
  window.application = application;
  window.title = `Workbench — ${session.name}`;

  // Popover menu theme switcher
  const button_menu = builder.get_object("button_menu");
  const popover = button_menu.get_popover();
  popover.add_child(new ThemeSelector(), "themeswitcher");

  const output = builder.get_object("output");

  const panel_preview = builder.get_object("panel_preview");
  const panel_placeholder = builder.get_object("panel_placeholder");

  const { term_console } = Devtools({ application, window, builder, settings });

  const document_javascript = new JavaScriptDocument({
    code_view: builder.get_object("code_view_javascript"),
    lang: langs.javascript,
    session,
  });
  langs.javascript.document = document_javascript;

  const document_vala = new ValaDocument({
    code_view: builder.get_object("code_view_vala"),
    lang: langs.vala,
    session,
  });
  langs.vala.document = document_vala;

  const document_rust = new RustDocument({
    code_view: builder.get_object("code_view_rust"),
    lang: langs.rust,
    session,
  });
  langs.rust.document = document_rust;

  const document_python = new PythonDocument({
    code_view: builder.get_object("code_view_python"),
    lang: langs.python,
    session,
  });
  langs.python.document = document_python;

  const document_blueprint = new BlueprintDocument({
    code_view: builder.get_object("code_view_blueprint"),
    lang: langs.blueprint,
    session,
  });
  langs.blueprint.document = document_blueprint;

  const document_xml = new XmlDocument({
    code_view: builder.get_object("code_view_xml"),
    lang: langs.xml,
    session,
  });
  langs.xml.document = document_xml;

  const document_css = new CssDocument({
    code_view: builder.get_object("code_view_css"),
    lang: langs.css,
    session,
  });
  langs.css.document = document_css;

  const panel_ui = PanelUI({
    application,
    builder,
    langs,
    term_console,
    document_xml,
    document_blueprint,
    settings,
  });

  PanelStyle({ builder, settings });

  const previewer = Previewer({
    output,
    builder,
    window,
    application,
    panel_ui,
    term_console,
    settings,
    session,
  });

  const panel_code = PanelCode({
    builder,
    previewer,
    session,
  });

  previewer.setPanelCode(panel_code);

  const button_run = builder.get_object("button_run");
  const button_preview = builder.get_object("button_preview");
  const button_inspector = builder.get_object("button_inspector");

  function updateStyle() {
    // For Platform Tools
    setGtk4PreferDark(style_manager.dark).catch(console.error);
  }
  updateStyle();
  style_manager.connect("notify::dark", updateStyle);

  settings.bind(
    "show-preview",
    button_preview,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  button_preview.bind_property(
    "active",
    panel_preview,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  function updatePanel() {
    panel_placeholder.visible = ![
      "show-preview",
      "show-ui",
      "show-style",
      "show-code",
    ].find((s) => settings.get_boolean(s));
  }
  updatePanel();
  settings.connect("changed", updatePanel);

  button_inspector.connect("clicked", () => {
    previewer.openInspector().catch(console.error);
  });

  async function formatCode() {
    const documents = [];

    if (panel_code.panel.visible) {
      if (panel_code.language === "JavaScript") {
        documents.push(document_javascript);
      } else if (panel_code.language === "Rust") {
        documents.push(document_rust);
      } else if (panel_code.language === "Python") {
        documents.push(document_python);
      } else if (panel_code.language === "Vala") {
        documents.push(document_vala);
      }
    }

    if (builder.get_object("panel_style").visible) {
      documents.push(document_css);
    }

    // TODO: only format the selected one
    if (panel_ui.panel.visible) {
      documents.push(document_xml);
      documents.push(document_blueprint);
    }

    return Promise.all(documents.map((document) => document.format()));
  }

  let compiler_vala = null;
  let compiler_rust = null;
  let builder_python = null;

  async function runCode() {
    button_run.set_sensitive(false);

    term_console.clear();
    previewer.stop();
    panel_ui.stop();

    try {
      await panel_ui.update();

      await formatCode();

      await compile();
    } catch (err) {
      // prettier xml errors are not instances of Error
      if (err instanceof Error || err instanceof GLib.Error) {
        console.error(err);
      } else {
        console.error(err);
      }
    }

    previewer.start();
    panel_ui.start();

    button_run.set_sensitive(true);
    term_console.scrollToEnd();
  }

  async function compile() {
    const { language } = panel_code;

    const lang = langs[language.toLowerCase()];
    // Do nothing if there is no code to avoid compile errors
    const text = lang.document.code_view.buffer.text.trim();
    if (text === "") {
      return;
    }

    if (language === "JavaScript") {
      await previewer.update(true);

      // We have to create a new file each time
      // because gjs doesn't appear to use etag for module caching
      // ?foo=Date.now() also does not work as expected
      // TODO: File a bug
      const path = buildRuntimePath(`workbench-${Date.now()}`);
      const file_javascript = Gio.File.new_for_path(path);
      await file_javascript.replace_contents_async(
        new GLib.Bytes(text),
        null,
        false,
        Gio.FileCreateFlags.NONE,
        null,
      );
      let exports;
      try {
        exports = await import(`file://${file_javascript.get_path()}`);
      } catch (err) {
        await previewer.update(true);
        throw err;
      } finally {
        file_javascript
          .delete_async(GLib.PRIORITY_DEFAULT, null)
          .catch(console.error);
      }
      previewer.setSymbols(exports);
    } else if (language === "Vala") {
      if (!isValaEnabled()) {
        action_extensions.activate(null);
        return;
      }

      compiler_vala = compiler_vala || ValaCompiler({ session });
      const success = await compiler_vala.compile();
      if (success) {
        await previewer.useExternal("vala");
        if (await compiler_vala.run()) {
          await previewer.open();
        } else {
          await previewer.useInternal();
        }
      }
    } else if (language === "Rust") {
      if (!isRustEnabled()) {
        action_extensions.activate(null);
        return;
      }

      compiler_rust = compiler_rust || RustCompiler({ session });
      const success = await compiler_rust.compile();
      if (success) {
        await previewer.useExternal("rust");
        if (await compiler_rust.run()) {
          await previewer.open();
        } else {
          await previewer.useInternal();
        }
      }
    } else if (language === "Python") {
      builder_python = builder_python || PythonBuilder({ session });
      await previewer.useExternal("python");
      if (await builder_python.run()) {
        await previewer.open();
      } else {
        await previewer.useInternal();
      }
    }
  }

  const action_run = new Gio.SimpleAction({
    name: "run",
  });
  action_run.connect("activate", () => {
    runCode().catch(console.error);
  });
  window.add_action(action_run);
  application.set_accels_for_action("win.run", ["<Control>Return"]);

  const action_format = new Gio.SimpleAction({
    name: "format",
  });
  action_format.connect("activate", () => {
    formatCode();
  });
  window.add_action(action_format);
  application.set_accels_for_action("win.format", ["<Control><Shift>Return"]);

  const action_close = new Gio.SimpleAction({
    name: "close",
  });
  action_close.connect("activate", () => {
    window.close();
  });
  window.add_action(action_close);
  application.set_accels_for_action("win.close", ["<Control>W"]);

  window.connect("close-request", () => {
    onCloseSession({ session, window }).catch(console.error);
    return true;
  });

  window.add_action(settings.create_action("safe-mode"));
  window.add_action(settings.create_action("auto-preview"));

  window.present();

  const documents = Object.values(langs).map((lang) => lang.document);
  async function load() {
    panel_ui.stop();
    previewer.stop();
    documents.forEach((document) => document.stop());

    await Promise.all([
      document_javascript.load(),
      document_rust.load(),
      document_vala.load(),
      document_python.load(),
      document_blueprint.load(),
      document_xml.load(),
      document_css.load(),
    ]);

    await previewer.useInternal();

    term_console.clear();
    panel_ui.start();
    await panel_ui.update();
    previewer.start();
    await previewer.update(true);

    documents.forEach((document) => {
      document.start();
    });

    term_console.scrollToEnd();
  }

  return { load, window, runCode };
}

async function setGtk4PreferDark(dark) {
  const settings_path = GLib.build_filenamev([
    GLib.get_user_config_dir(),
    "gtk-4.0/settings.ini",
  ]);
  GLib.mkdir_with_parents(GLib.path_get_dirname(settings_path), 0o777);
  const settings = new GLib.KeyFile();
  try {
    settings.load_from_file(settings_path, GLib.KeyFileFlags.NONE);
  } catch (err) {
    if (!err.matches(GLib.FileError, GLib.FileError.NOENT)) {
      throw err;
    }
  }
  settings.set_boolean("Settings", "gtk-application-prefer-dark-theme", dark);
  settings.save_to_file(settings_path);
}

function close(window) {
  quitOnLastWindowClose(window);
  window.destroy();
}

async function onCloseSession({ session, window }) {
  if (session.isProject()) {
    removeFromRecentProjects(session.file.get_path());
    return close(window);
  }

  if (!session.settings.get_boolean("edited")) {
    await deleteSession(session);
    return close(window);
  }

  const [response, location] = await promptSessionClose({ window });
  if (response === "cancel") return;

  if (response === "discard") {
    await deleteSession(session);
  } else if (response === "save") {
    await saveSessionAsProject(session, location);
  }

  close(window);
}

async function promptSessionClose({ window }) {
  const builder = Gtk.Builder.new_from_resource(resource);
  const dialog = builder.get_object("alert_dialog_save_project");
  dialog.present(window);

  let location;

  const row_project_location = builder.get_object("row_project_location");
  const button_location = builder.get_object("button_location");
  row_project_location.add_suffix(button_location);
  button_location.connect("clicked", () => {
    selectLocation().catch(console.error);
  });

  const row_project_name = builder.get_object("row_project_name");
  function updateSaveButton() {
    if (!row_project_name.text) {
      dialog.set_response_enabled("save", false);
      return;
    }

    if (!location) {
      dialog.set_response_enabled("save", false);
      return;
    }

    dialog.set_response_enabled("save", true);
  }
  row_project_name.connect("notify::text", () => {
    updateSaveButton();
  });

  async function selectLocation() {
    const file_dialog = new Gtk.FileDialog();
    location = await file_dialog.select_folder(window, null);
    row_project_location.subtitle = location.get_basename();
    updateSaveButton();
  }

  const response = await dialog.choose(window, null);
  return [
    response,
    location?.get_child_for_display_name(row_project_name.text),
  ];
}

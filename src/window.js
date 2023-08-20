import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Vte from "gi://Vte";
import { gettext as _ } from "gettext";

import * as xml from "./langs/xml/xml.js";
import { languages } from "./util.js";
import Document from "./Document.js";
import PanelUI from "./PanelUI.js";
import PanelCode from "./PanelCode.js";
import PanelStyle from "./PanelStyle.js";
import Devtools from "./Devtools.js";

import prettier from "./lib/prettier.js";
import prettier_babel from "./lib/prettier-babel.js";
import prettier_postcss from "./lib/prettier-postcss.js";
import Previewer from "./Previewer/Previewer.js";
import Compiler from "./langs/vala/Compiler.js";
import ThemeSelector from "../troll/src/widgets/ThemeSelector.js";

import resource from "./window.blp";

import "./icons/re.sonny.Workbench-beaker.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-code-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-placeholder-symbolic.svg" with {
  type: "icon",
};
import "./icons/re.sonny.Workbench-preview-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-ui-symbolic.svg" with { type: "icon" };
import "./icons/re.sonny.Workbench-screenshot-symbolic.svg" with {
  type: "icon",
};

import "./widgets/Modal.js";
import "./widgets/CodeView.js";
import { deleteSession, saveSessionAsProject } from "./sessions.js";

const style_manager = Adw.StyleManager.get_default();

export default function Window({ application, session }) {
  const langs = Object.fromEntries(
    languages.map((lang) => [lang.id, { ...lang }]),
  );

  const { file, settings } = session;

  Vte.Terminal.new();

  const builder = Gtk.Builder.new_from_resource(resource);

  const window = builder.get_object("window");
  if (__DEV__) {
    window.add_css_class("devel");
  }
  window.set_application(application);

  // Popover menu theme switcher
  const button_menu = builder.get_object("button_menu");
  const popover = button_menu.get_popover();
  popover.add_child(new ThemeSelector(), "themeswitcher");

  const output = builder.get_object("output");

  const panel_preview = builder.get_object("panel_preview");
  const panel_placeholder = builder.get_object("panel_placeholder");

  const { term_console } = Devtools({ application, window, builder, settings });

  let compiler = null;

  if (!file.get_child("main.xml").query_exists(null)) {
    settings.set_int("ui-language", 1);
  }

  const document_javascript = Document({
    code_view: builder.get_object("code_view_javascript"),
    file: file.get_child("main.js"),
    lang: langs.javascript,
    session,
  });
  langs.javascript.document = document_javascript;

  const document_vala = Document({
    code_view: builder.get_object("code_view_vala"),
    file: file.get_child("main.vala"),
    lang: langs.vala,
    session,
  });
  langs.vala.document = document_vala;

  const document_blueprint = Document({
    code_view: builder.get_object("code_view_blueprint"),
    file: file.get_child("main.blp"),
    lang: langs.blueprint,
    session,
  });
  langs.blueprint.document = document_blueprint;

  const document_xml = Document({
    code_view: builder.get_object("code_view_xml"),
    file: file.get_child("main.ui"),
    lang: langs.xml,
    session,
  });
  langs.xml.document = document_xml;

  const document_css = Document({
    code_view: builder.get_object("code_view_css"),
    file: file.get_child("main.css"),
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

  PanelStyle({ builder, document_css, settings });

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
    document_vala,
    document_javascript,
    settings,
  });

  previewer.setPanelCode(panel_code);

  const button_run = builder.get_object("button_run");
  const button_preview = builder.get_object("button_preview");
  const button_inspector = builder.get_object("button_inspector");

  function updateStyle() {
    // For Platform Tools
    setGtk4PreferDark(style_manager.dark).catch(logError);
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
    previewer.openInspector().catch(logError);
  });

  function format(code_view, formatter) {
    let code;

    const { buffer } = code_view;

    try {
      code = formatter(buffer.text.trim());
    } catch (err) {
      logError(err);
      return;
    }

    const { cursor_position } = buffer;

    code_view.replaceText(code, false);
    buffer.place_cursor(buffer.get_iter_at_offset(cursor_position));

    return code;
  }

  function formatCode() {
    if (panel_code.panel.visible && panel_code.language === "JavaScript") {
      format(langs.javascript.document.code_view, (text) => {
        return prettier.format(text, {
          parser: "babel",
          plugins: [prettier_babel],
          trailingComma: "all",
        });
      });
    }

    if (builder.get_object("panel_style").visible) {
      format(langs.css.document.code_view, (text) => {
        return prettier.format(text, {
          parser: "css",
          plugins: [prettier_postcss],
        });
      });
    }

    if (panel_ui.panel.visible) {
      format(langs.xml.document.code_view, (text) => {
        return xml.format(text, 2);
      });
    }
  }

  async function runCode({ format }) {
    button_run.set_sensitive(false);

    term_console.clear();
    previewer.stop();
    panel_ui.stop();

    const { language } = panel_code;
    try {
      await panel_ui.update();

      if (format) {
        formatCode();
      }

      if (language === "JavaScript") {
        await previewer.update(true);

        // We have to create a new file each time
        // because gjs doesn't appear to use etag for module caching
        // ?foo=Date.now() also does not work as expected
        // TODO: File a bug
        const [file_javascript] = Gio.File.new_tmp("workbench-XXXXXX.js");
        await file_javascript.replace_contents_async(
          new GLib.Bytes(document_javascript.code_view.buffer.text || " "),
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
            .catch(logError);
        }
        previewer.setSymbols(exports);
      } else if (language === "Vala") {
        compiler = compiler || Compiler({ session });
        const success = await compiler.compile();
        if (success) {
          await previewer.useExternal();
          if (await compiler.run()) {
            await previewer.open();
          } else {
            await previewer.useInternal();
          }
        }
      }
    } catch (err) {
      // prettier xml errors are not instances of Error
      if (err instanceof Error || err instanceof GLib.Error) {
        logError(err);
      } else {
        console.error(err);
      }
    }

    previewer.start();
    panel_ui.start();

    button_run.set_sensitive(true);
    term_console.scrollToEnd();
  }

  const action_run = new Gio.SimpleAction({
    name: "run",
  });
  action_run.connect("activate", () => {
    runCode({ format: true }).catch(logError);
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
    onCloseSession({ session, window }).catch(logError);
    return true;
  });

  window.add_action(settings.create_action("safe-mode"));
  window.add_action(settings.create_action("auto-preview"));

  window.present();

  const documents = Object.values(langs).map((lang) => lang.document);
  async function load({ run }) {
    panel_ui.stop();
    previewer.stop();
    documents.forEach((document) => document.stop());

    await Promise.all([
      document_javascript.load(),
      document_vala.load(),
      document_blueprint.load(),
      document_xml.load(),
      document_css.load(),
    ]);

    await previewer.useInternal();

    if (run) {
      await runCode({ format: false });
    } else {
      term_console.clear();
      panel_ui.start();
      await panel_ui.update();
      previewer.start();
      await previewer.update(true);
    }

    documents.forEach((document) => {
      document.start();
    });

    term_console.scrollToEnd();
  }

  return { load, window };
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
    if (err.code !== GLib.FileError.NOENT) throw err;
  }
  settings.set_boolean("Settings", "gtk-application-prefer-dark-theme", dark);
  settings.save_to_file(settings_path);
}

async function onCloseSession({ session, window }) {
  if (session.is_project()) {
    window.destroy();
    return;
  }

  if (!session.settings.get_boolean("edited")) {
    await deleteSession(session);
    window.destroy();
    return;
  }

  const builder = Gtk.Builder.new_from_resource(resource);
  const dialog = builder.get_object("message_dialog_save_project");

  dialog.set_transient_for(window);
  dialog.present();

  let location;

  const row_project_location = builder.get_object("row_project_location");
  const button_location = builder.get_object("button_location");
  row_project_location.add_suffix(button_location);
  button_location.connect("clicked", () => {
    selectLocation().catch(logError);
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

  const response = await dialog.choose(null);
  if (response === "cancel") return;

  if (response === "discard") {
    await deleteSession(session);
  } else if (response === "save") {
    const destination = location.get_child_for_display_name(
      row_project_name.text,
    );
    await saveSessionAsProject(session, destination);
  }

  window.destroy();
}

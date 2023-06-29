import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Vte from "gi://Vte";
import { gettext as _ } from "gettext";

import * as xml from "./langs/xml/xml.js";
import {
  settings,
  createDataDir,
  getLanguageForFile,
  languages,
} from "./util.js";
import Document from "./Document.js";
import PanelUI from "./PanelUI.js";
import PanelCode from "./PanelCode.js";
import PanelStyle from "./PanelStyle.js";
import Devtools from "./Devtools.js";

import prettier from "./lib/prettier.js";
import prettier_babel from "./lib/prettier-babel.js";
import prettier_postcss from "./lib/prettier-postcss.js";
import Library, { readDemo } from "./Library/Library.js";
import DocumentationViewer from "./DocumentationViewer.js";
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

const style_manager = Adw.StyleManager.get_default();

const langs = Object.fromEntries(languages.map((lang) => [lang.id, lang]));

export default function Window({ application }) {
  Vte.Terminal.new();

  const data_dir = createDataDir();

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

  const { term_console } = Devtools({ application, window, builder });

  const toast_overlay = builder.get_object("toast_overlay");

  let compiler = null;

  const placeholders = readDemo("Welcome");

  const document_javascript = Document({
    code_view: builder.get_object("code_view_javascript"),
    placeholder: placeholders.javascript,
    file: Gio.File.new_for_path(GLib.build_filenamev([data_dir, "state.js"])),
  });
  langs.javascript.document = document_javascript;

  const document_vala = Document({
    code_view: builder.get_object("code_view_vala"),
    placeholder: placeholders.vala,
    file: Gio.File.new_for_path(GLib.build_filenamev([data_dir, "state.vala"])),
  });
  langs.vala.document = document_vala;

  const document_blueprint = Document({
    code_view: builder.get_object("code_view_blueprint"),
    placeholder: placeholders.blueprint,
    file: Gio.File.new_for_path(GLib.build_filenamev([data_dir, "state.blp"])),
  });
  langs.blueprint.document = document_blueprint;

  const document_xml = Document({
    code_view: builder.get_object("code_view_xml"),
    placeholder: placeholders.xml,
    file: Gio.File.new_for_path(GLib.build_filenamev([data_dir, "state.xml"])),
  });
  langs.xml.document = document_xml;

  const document_css = Document({
    code_view: builder.get_object("code_view_css"),
    placeholder: placeholders.css,
    file: Gio.File.new_for_path(GLib.build_filenamev([data_dir, "state.css"])),
  });
  langs.css.document = document_css;

  const panel_ui = PanelUI({
    application,
    builder,
    langs,
    data_dir,
    term_console,
    document_xml,
    document_blueprint,
  });

  PanelStyle({ builder, document_css });

  const previewer = Previewer({
    output,
    builder,
    window,
    application,
    data_dir,
    panel_ui,
    term_console,
  });

  const panel_code = PanelCode({
    builder,
    previewer,
    data_dir,
    document_vala,
    document_javascript,
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

  async function runCode(prettify = true) {
    button_run.set_sensitive(false);

    term_console.clear();
    previewer.stop();
    panel_ui.stop();

    const { language } = panel_code;
    try {
      await panel_ui.update();

      if (prettify) {
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
        compiler = compiler || Compiler(data_dir);
        const success = await compiler.compile(
          langs.vala.document.code_view.buffer.text,
        );
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
    runCode().catch(logError);
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

  const undo_action = new Gio.SimpleAction({
    name: "workbench_undo",
    parameter_type: new GLib.VariantType("s"),
  });
  undo_action.connect("activate", (_self, target) => {
    const updated = JSON.parse(target.unpack()).updated;
    languages.forEach(({ id, document }) => {
      if (updated.includes(id)) document.code_view.buffer.undo();
    });

    const panels = JSON.parse(target.unpack()).panels;
    settings.set_boolean("show-code", panels[0]);
    settings.set_boolean("show-style", panels[1]);
    settings.set_boolean("show-ui", panels[2]);
    settings.set_boolean("show-preview", panels[3]);

    const langs = JSON.parse(target.unpack()).langs;
    settings.set_int("code-language", langs[0]);
    settings.set_int("ui-language", langs[1]);
  });
  window.add_action(undo_action);

  async function openDemo(demo_name) {
    const documents = languages.map((language) => language.document);

    const demo = readDemo(demo_name);
    const { javascript, css, xml, blueprint, panels, autorun } = demo;
    let { vala } = demo;

    if (!!javascript && !vala) {
      settings.set_int("code-language", 0);
      vala = "// Sorry, this demo is not available in Vala yet.";
    }

    panel_ui.stop();
    previewer.stop();
    documents.forEach((document) => document.stop());

    settings.set_string("selected-demo", demo_name);

    document_javascript.code_view.replaceText(javascript);
    document_vala.code_view.replaceText(vala);
    settings.set_boolean("show-code", panels.includes("code"));

    document_css.code_view.replaceText(css);
    settings.set_boolean("show-style", panels.includes("style"));

    document_blueprint.code_view.replaceText(blueprint);
    document_xml.code_view.replaceText(xml);
    settings.set_boolean("show-ui", panels.includes("ui"));
    settings.set_boolean("show-preview", panels.includes("preview"));

    // Until we have proper inline errors
    // let's always show the console
    // in the future we may let each demo decide
    settings.set_boolean("show-console", true);

    await previewer.useInternal();

    if (panel_code.language === "JavaScript" && autorun === true) {
      await runCode(false);
    } else {
      term_console.clear();
      panel_ui.start();
      await panel_ui.update();
      previewer.start();
      await previewer.update(true);
    }

    documents.forEach((document) => {
      document.save();
      document.start();
    });

    term_console.scrollToEnd();

    toast_overlay.add_toast(
      new Adw.Toast({
        title: _("The demo has been loaded"),
        button_label: _("Undo"),
        action_name: "win.workbench_undo",
        action_target: GLib.Variant.new_string(
          JSON.stringify({
            updated: ["javascript", "css", "xml", "blueprint", "vala"],
            panels: [
              settings.get_boolean("show-code"),
              settings.get_boolean("show-style"),
              settings.get_boolean("show-ui"),
              settings.get_boolean("show-preview"),
            ],
            langs: [
              settings.get_int("code-language"),
              settings.get_int("ui-language"),
            ],
          }),
        ),
      }),
    );
  }

  Library({
    openDemo,
    window,
    application,
  });

  DocumentationViewer({ application });

  const text_decoder = new TextDecoder();
  async function openFile(file) {
    const language = getLanguageForFile(file);
    if (!language) {
      const toast = new Adw.Toast({
        title: _("This file cannot be loaded"),
      });
      toast_overlay.add_toast(toast);
      return;
    }

    let data;

    try {
      [, data] = file.load_contents(null);
      data = text_decoder.decode(data);
    } catch (err) {
      logError(err);
      return;
    }

    const {
      document: { code_view },
    } = language;
    code_view.replaceText(data);

    settings.set_boolean(`show-${language.panel}`, true);

    if (language.id === "xml") {
      settings.set_int("ui-language", 0);
    } else if (language.id === "blueprint") {
      settings.set_int("ui-language", 1);
    } else if (language.id === "javascript") {
      settings.set_int("code-language", 0);
    } else if (language.id === "vala") {
      settings.set_int("code-language", 1);
    }

    if (language.panel === "ui") {
      settings.set_boolean("show-preview", true);
    }

    toast_overlay.add_toast(
      new Adw.Toast({
        title: _("The file has been loaded"),
        button_label: _("Undo"),
        action_name: "win.workbench_undo",
        action_target: GLib.Variant.new_string(
          JSON.stringify({
            updated: [language.id],
            panels: [
              settings.get_boolean("show-code"),
              settings.get_boolean("show-style"),
              settings.get_boolean("show-ui"),
              settings.get_boolean("show-preview"),
            ],
            langs: [
              settings.get_int("code-language"),
              settings.get_int("ui-language"),
            ],
          }),
        ),
      }),
    );
  }
  return { window, openFile };
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

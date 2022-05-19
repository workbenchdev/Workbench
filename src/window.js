import Gtk from "gi://Gtk";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Source from "gi://GtkSource?version=5";
import Adw from "gi://Adw?version=1";
import Vte from "gi://Vte?version=3.91";
import { gettext as _ } from "gettext";

import { confirm, settings, createDataDir } from "./util.js";
import Document from "./Document.js";
import PanelUI from "./PanelUI.js";
import PanelCode from "./PanelCode.js";
import Devtools from "./Devtools.js";

import prettier from "./lib/prettier.js";
import prettier_babel from "./lib/prettier-babel.js";
import prettier_postcss from "./lib/prettier-postcss.js";
import prettier_xml from "./lib/prettier-xml.js";
import Library, { readDemo } from "./Library/Library.js";
import Previewer from "./Previewer.js";
import Compiler from "./Compiler.js";
import logger from "./logger.js";

const scheme_manager = Source.StyleSchemeManager.get_default();
const style_manager = Adw.StyleManager.get_default();

export default function Window({ application }) {
  Vte.Terminal.new();

  const data_dir = createDataDir();

  const builder = Gtk.Builder.new_from_resource(
    "/re/sonny/Workbench/window.ui"
  );

  const window = builder.get_object("window");
  // window.add_css_class("devel");
  window.set_application(application);

  const output = builder.get_object("output");

  const panel_style = builder.get_object("panel_style");
  const panel_preview = builder.get_object("panel_preview");
  const panel_placeholder = builder.get_object("panel_placeholder");

  const { console } = Devtools({ application, window, builder });

  let compiler = null;

  const placeholders = readDemo("Welcome");

  const document_javascript = Document({
    source_view: builder.get_object("source_view_javascript"),
    lang: "js",
    placeholder: placeholders.js,
    ext: "js",
    data_dir,
  });

  const document_vala = Document({
    source_view: builder.get_object("source_view_vala"),
    lang: "vala",
    placeholder: placeholders.vala,
    ext: "vala",
    data_dir,
  });

  const document_blueprint = Document({
    source_view: builder.get_object("source_view_blueprint"),
    lang: "blueprint",
    placeholder: placeholders.blueprint,
    ext: "blp",
    data_dir,
  });

  const document_xml = Document({
    source_view: builder.get_object("source_view_xml"),
    lang: "xml",
    placeholder: placeholders.xml,
    ext: "ui",
    data_dir,
  });

  const document_css = Document({
    source_view: builder.get_object("source_view_css"),
    lang: "css",
    placeholder: placeholders.css,
    ext: "css",
    data_dir,
  });

  const panel_ui = PanelUI({
    builder,
    document_blueprint,
    document_xml,
    data_dir,
  });

  const previewer = Previewer({
    output,
    builder,
    document_css,
    window,
    application,
    data_dir,
    panel_ui,
  });

  const panel_code = PanelCode({
    builder,
    document_javascript,
    document_blueprint,
    previewer,
  });

  const documents = [
    document_javascript,
    document_vala,
    document_css,
    document_blueprint,
    document_xml,
  ];

  const button_run = builder.get_object("button_run");
  const button_style = builder.get_object("button_style");
  const button_preview = builder.get_object("button_preview");
  const button_inspector = builder.get_object("button_inspector");
  const button_light = builder.get_object("button_light");
  const button_dark = builder.get_object("button_dark");
  button_dark.set_group(button_light);

  function updateStyle() {
    const { dark } = style_manager;
    const scheme = scheme_manager.get_scheme(dark ? "Adwaita-dark" : "Adwaita");
    documents.forEach(({ buffer }) => {
      buffer.set_style_scheme(scheme);
    });

    button_dark.active = dark;
    button_light.active = !dark;

    // For Platform Tools
    setGtk4PreferDark(dark).catch(logError);
  }
  updateStyle();
  style_manager.connect("notify::dark", updateStyle);

  button_light.connect("toggled", () => {
    settings.set_int("color-scheme", Adw.ColorScheme.PREFER_LIGHT);
  });
  button_dark.connect("toggled", () => {
    settings.set_int("color-scheme", Adw.ColorScheme.PREFER_DARK);
  });

  settings.bind(
    "show-style",
    button_style,
    "active",
    Gio.SettingsBindFlags.DEFAULT
  );
  button_style.bind_property(
    "active",
    panel_style,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
  );

  settings.bind(
    "show-preview",
    button_preview,
    "active",
    Gio.SettingsBindFlags.DEFAULT
  );
  button_preview.bind_property(
    "active",
    panel_preview,
    "visible",
    GObject.BindingFlags.SYNC_CREATE
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
    Gtk.Window.set_interactive_debugging(true);
  });

  function format(buffer, formatter) {
    const code = formatter(buffer.text.trim());

    const { cursor_position } = buffer;

    replaceBufferText(buffer, code);
    buffer.place_cursor(buffer.get_iter_at_offset(cursor_position));

    return code;
  }

  async function runCode() {
    button_run.set_sensitive(false);

    console.clear();
    previewer.stop();
    panel_ui.stop();

    const { language } = panel_code;
    try {
      await panel_ui.update();

      if (language === "JavaScript") {
        format(document_javascript.buffer, (text) => {
          return prettier.format(text, {
            parser: "babel",
            plugins: [prettier_babel],
            trailingComma: "all",
          });
        });
      }

      format(document_css.buffer, (text) => {
        return prettier.format(text, {
          parser: "css",
          plugins: [prettier_postcss],
        });
      });

      format(document_xml.buffer, (text) => {
        return prettier.format(text, {
          parser: "xml",
          plugins: [prettier_xml],
          // xmlWhitespaceSensitivity: "ignore",
          // breaks the following
          // <child>
          //   <object class="GtkLabel">
          //     <property name="label">Edit Style and UI to reload the Preview</property>
          //     <property name="justify">center</property>
          //   </object>
          // </child>
          // by moving the value of the property label to a new line
          // <child>
          //   <object class="GtkLabel">
          //     <property name="label">
          //       Edit Style and UI to reload the Preview
          //     </property>
          //     <property name="justify">center</property>
          //   </object>
          // </child>
        });
      });

      previewer.update();

      if (language === "JavaScript") {
        // We have to create a new file each time
        // because gjs doesn't appear to use etag for module caching
        // ?foo=Date.now() also does not work as expected
        // TODO: File a bug
        const [file_javascript] = Gio.File.new_tmp("workbench-XXXXXX.js");
        file_javascript.replace_contents(
          document_javascript.buffer.text || "\n",
          null,
          false,
          Gio.FileCreateFlags.NONE,
          null
        );
        await import(`file://${file_javascript.get_path()}`);
      } else if (language === "Vala") {
        compiler = compiler || Compiler(data_dir);
        previewer.updateStyle();
        await compiler.compile(document_vala.buffer.text);
      }
    } catch (err) {
      // prettier xml errors are not instances of Error
      if (err instanceof Error) {
        logError(err);
      } else {
        logger.error(err);
      }
    }

    // setTimeout(() => {
    previewer.start();
    panel_ui.start();
    // });

    button_run.set_sensitive(true);
    console.scrollToEnd();
  }

  const action_run = new Gio.SimpleAction({
    name: "run",
    parameter_type: null,
  });
  action_run.connect("activate", () => {
    runCode().catch(logError);
  });
  window.add_action(action_run);
  application.set_accels_for_action("win.run", ["<Control>Return"]);

  async function openDemo(demo_name) {
    const agreed = await confirmDiscard();
    if (!agreed) return;

    function load({ buffer }, str) {
      replaceBufferText(buffer, str);
      buffer.place_cursor(buffer.get_start_iter());
    }

    const { js, css, xml, blueprint, vala, panels } = readDemo(demo_name);

    panel_ui.stop();
    previewer.stop();
    documents.forEach((doc) => doc.stop());

    settings.set_string("selected-demo", demo_name);

    load(document_javascript, js);
    load(document_vala, vala);
    settings.set_boolean("show-code", panels.includes("code"));

    load(document_css, css);
    settings.set_boolean("show-style", panels.includes("style"));

    load(document_blueprint, blueprint);
    load(document_xml, xml);
    settings.set_boolean("show-ui", panels.includes("ui"));
    settings.set_boolean("show-preview", panels.includes("preview"));

    // Until we have proper inline errors
    // let's always show the console
    // in the future we may let each demo decide
    settings.set_boolean("show-console", true);

    await runCode();

    documents.forEach((doc) => doc.save());

    settings.set_boolean("has-edits", false);

    documents.forEach((doc) => doc.start());
  }

  Library({ flap: builder.get_object("flap"), openDemo, window, application });

  async function confirmDiscard() {
    if (!settings.get_boolean("has-edits")) return true;
    const agreed = await confirm({
      transient_for: application.get_active_window(),
      text: _("Are you sure you want to discard your changes?"),
    });
    if (agreed) {
      settings.set_boolean("has-edits", false);
    }
    return agreed;
  }

  const text_decoder = new TextDecoder();
  function openFile(file) {
    let content_type;

    try {
      const info = file.query_info(
        "standard::content-type",
        Gio.FileQueryInfoFlags.NONE,
        null
      );
      content_type = info.get_content_type();
    } catch (err) {
      logError(err);
    }

    if (!content_type) {
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

    async function load({ buffer }, data) {
      const agreed = await confirmDiscard();
      if (!agreed) return;
      replaceBufferText(buffer, data);
      buffer.place_cursor(buffer.get_start_iter());
    }

    if (content_type.includes("/javascript")) {
      load(document_javascript, data);
    } else if (content_type.includes("text/css")) {
      load(document_css, data);
    } else if (content_type.includes("application/x-gtk-builder")) {
      load(document_xml, data);
      settings.set_string("ui-lang", "xml");
    } else if (file.get_basename().endsWith(".blp")) {
      load(document_blueprint, data);
      settings.set_string("ui-lang", "blueprint");
    }
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
    // eslint-disable-next-line no-empty
  } catch (err) {
    if (err.code !== GLib.FileError.NOENT) throw err;
  }
  settings.set_boolean("Settings", "gtk-application-prefer-dark-theme", dark);
  settings.save_to_file(settings_path);
}

function replaceBufferText(buffer, text) {
  buffer.begin_user_action();
  buffer.delete(buffer.get_start_iter(), buffer.get_end_iter());
  buffer.insert(buffer.get_start_iter(), text, -1);
  buffer.end_user_action();
}

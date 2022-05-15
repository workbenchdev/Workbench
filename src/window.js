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
import Devtools from "./Devtools.js";

import prettier from "./lib/prettier.js";
import prettier_babel from "./lib/prettier-babel.js";
import prettier_postcss from "./lib/prettier-postcss.js";
import prettier_xml from "./lib/prettier-xml.js";
import Library, { loadDemo } from "./Library.js";
import Previewer from "./Previewer.js";
import { once } from "./troll/src/util.js";

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

  const panel_code = builder.get_object("panel_code");
  const panel_style = builder.get_object("panel_style");
  const panel_preview = builder.get_object("panel_preview");
  const panel_placeholder = builder.get_object("panel_placeholder");

  const { console } = Devtools({ application, window, builder });

  const placeholders = loadDemo("Welcome");

  const source_view_javascript = builder.get_object("source_view_javascript");
  Document({
    source_view: source_view_javascript,
    lang: "js",
    placeholder: placeholders.js,
    ext: "js",
    data_dir,
  });

  const source_view_blueprint = builder.get_object("source_view_blueprint");
  Document({
    source_view: source_view_blueprint,
    lang: "blueprint",
    placeholder: placeholders.blueprint,
    ext: "blp",
    data_dir,
  });

  const source_view_xml = builder.get_object("source_view_xml");
  Document({
    source_view: source_view_xml,
    lang: "xml",
    placeholder: placeholders.xml,
    ext: "ui",
    data_dir,
  });

  const source_view_css = builder.get_object("source_view_css");
  Document({
    source_view: source_view_css,
    lang: "css",
    placeholder: placeholders.css,
    ext: "css",
    data_dir,
  });

  const panel_ui = PanelUI({
    builder,
    source_view_blueprint,
    source_view_xml,
    data_dir,
  });

  const source_views = [
    source_view_javascript,
    source_view_css,
    source_view_blueprint,
    source_view_xml,
  ];

  const button_run = builder.get_object("button_run");
  const button_code = builder.get_object("button_code");
  const button_style = builder.get_object("button_style");
  const button_preview = builder.get_object("button_preview");
  const button_inspector = builder.get_object("button_inspector");
  const button_light = builder.get_object("button_light");
  const button_dark = builder.get_object("button_dark");
  button_dark.set_group(button_light);

  function updateStyle() {
    const { dark } = style_manager;
    const scheme = scheme_manager.get_scheme(dark ? "Adwaita-dark" : "Adwaita");
    source_views.forEach(({ buffer }) => {
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
    settings.set_boolean("toggle-color-scheme", button_light.active);
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

  const previewer = Previewer({
    output,
    builder,
    source_view_css,
    window,
    application,
    data_dir,
    panel_ui,
  });

  panel_ui.connect("changed", previewer.update);
  source_view_css.buffer.connect_after("changed", previewer.update);
  previewer.update();

  function format(buffer, formatter) {
    const code = formatter(buffer.text.trim());

    const { cursor_position } = buffer;

    replaceBufferText(buffer, code);
    buffer.place_cursor(buffer.get_iter_at_offset(cursor_position));

    return code;
  }

  async function run() {
    button_run.set_sensitive(false);

    console.clear();

    try {
      format(source_view_javascript.buffer, (text) => {
        return prettier.format(source_view_javascript.buffer.text, {
          parser: "babel",
          plugins: [prettier_babel],
          trailingComma: "all",
        });
      });

      format(source_view_css.buffer, (text) => {
        return prettier.format(text, {
          parser: "css",
          plugins: [prettier_postcss],
        });
      });

      format(source_view_xml.buffer, (text) => {
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

      // We have to create a new file each time
      // because gjs doesn't appear to use etag for module caching
      // ?foo=Date.now() also does not work as expected
      // TODO: File a bug
      const [file_javascript] = Gio.File.new_tmp("workbench-XXXXXX.js");
      file_javascript.replace_contents(
        source_view_javascript.buffer.text || "\n",
        null,
        false,
        Gio.FileCreateFlags.NONE,
        null
      );
      await import(`file://${file_javascript.get_path()}`);
    } catch (err) {
      // prettier xml errors are not instances of Error
      if (err instanceof Error) {
        logError(err);
      } else {
        console.error(err);
      }
    } finally {
      button_run.set_sensitive(true);
      console.scrollToEnd();
    }
  }

  const action_run = new Gio.SimpleAction({
    name: "run",
    parameter_type: null,
  });
  action_run.connect("activate", run);
  window.add_action(action_run);
  application.set_accels_for_action("win.run", ["<Control>Return"]);

  async function openDemo(demo_name) {
    const agreed = await confirmDiscard();
    if (!agreed) return;

    function load(buffer, str) {
      replaceBufferText(buffer, str);
      buffer.place_cursor(buffer.get_start_iter());
    }

    const { js, css, xml, blueprint, panels } = loadDemo(demo_name);

    settings.set_string("selected-demo", demo_name);

    load(source_view_javascript.buffer, js);
    settings.set_boolean("show-code", panels.includes("code"));

    load(source_view_css.buffer, css);
    settings.set_boolean("show-style", panels.includes("style"));

    load(source_view_blueprint.buffer, blueprint);
    load(source_view_xml.buffer, xml);
    settings.set_boolean("show-ui", panels.includes("ui"));
    settings.set_boolean("show-preview", panels.includes("preview"));

    // Until we have proper inline errors
    // let's always show the console
    // in the future we may let each demo decide
    settings.set_boolean("show-console", true);

    settings.set_boolean("has-edits", false);

    if (xml || blueprint) {
      once(panel_ui, "changed").then(run);
    } else {
      run();
    }
  }

  const action_library = new Gio.SimpleAction({
    name: "library",
    parameter_type: null,
  });
  action_library.connect("activate", () => {
    Library({ window, builder, openDemo });
  });
  window.add_action(action_library);
  application.set_accels_for_action("win.library", ["<Control><Shift>O"]);

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

    async function load(buffer, data) {
      const agreed = await confirmDiscard();
      if (!agreed) return;
      replaceBufferText(buffer, data);
      buffer.place_cursor(buffer.get_start_iter());
    }

    if (content_type.includes("/javascript")) {
      load(source_view_javascript.buffer, data);
    } else if (content_type.includes("text/css")) {
      load(source_view_css.buffer, data);
    } else if (content_type.includes("application/x-gtk-builder")) {
      load(source_view_xml.buffer, data);
      settings.set_string("ui-lang", "xml");
    } else if (file.get_basename().endsWith(".blp")) {
      load(source_view_blueprint.buffer, data);
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

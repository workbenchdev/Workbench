import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Source from "gi://GtkSource?version=5";
import Adw from 'gi://Adw?version=1'
import Vte from 'gi://Vte?version=4-2.91'
import GLib from 'gi://GLib'

import { relativePath } from "./util.js";
import Shortcuts from "./Shortcuts.js";

const settings = new Gio.Settings({
  schema_id: "re.sonny.Workbench",
  path: "/re/sonny/Workbench/",
});

Source.init();

const scheme_manager = Source.StyleSchemeManager.get_default()
const language_manager = Source.LanguageManager.get_default();
const style_manager = Adw.StyleManager.get_default();

export default function Window({ application }) {
  Vte.Terminal.new()
  const builder = Gtk.Builder.new_from_file(relativePath("./window.ui"));

  const devtools = builder.get_object('devtools')
  const terminal = devtools.get_first_child()
  terminal.set_cursor_blink_mode(Vte.CursorBlinkMode.ON)
  terminal.spawn_sync(
            Vte.PtyFlags.DEFAULT,
            '/',
            ['/bin/tail', '-f', '/tmp/workbench'],
            [],
            GLib.SpawnFlags.DO_NOT_REAP_CHILD,
            null,
            null
        )

  const window = builder.get_object("window");
  if (__DEV__) window.add_css_class("devel");
  window.set_application(application);

  const output = builder.get_object('output')

  const source_view_javascript = builder.get_object("source_view_javascript");
  source_view_javascript.buffer.set_language(
    language_manager.get_language("js"),
  );
  source_view_javascript.buffer.set_text(`
console.log('Welcome to Workbench!')

const builder = workbench.builder;

workbench.append(builder.get_object('main'));
`.trim(), -1)

  const source_view_ui = builder.get_object("source_view_ui");
  source_view_ui.buffer.set_language(language_manager.get_language("xml"));
  source_view_ui.buffer.set_text(`
<?xml version="1.0" encoding="UTF-8" ?>
<interface>
  <requires lib="gtk" version="4.0"/>
  <requires lib="adw" version="1.0"/>
  <object class="GtkBox" id="main">
    <child>
      <object class="GtkLabel">
        <property name="label">Welcome to Workbench!</property>
      </object>
    </child>
  </object>
</interface>`.trim(), -1);

  const source_view_css = builder.get_object("source_view_css");
  source_view_css.buffer.set_language(language_manager.get_language("css"));
  source_view_css.buffer.set_text(``.trim(), -1)

  const button_javascript = builder.get_object("button_javascript");
  const button_ui = builder.get_object("button_ui");
  const button_css = builder.get_object("button_css");
  const button_output = builder.get_object("button_output");
  const button_devtools = builder.get_object("button_devtools");
  const button_style_mode = builder.get_object("button_style_mode")

  const source_views = [source_view_javascript, source_view_ui, source_view_css]

  function updateStyle() {
    const {dark} = style_manager;
    const scheme = scheme_manager.get_scheme(dark ? "Adwaita-dark" : "Adwaita");
    source_views.forEach(({buffer}) => {
      buffer.set_style_scheme(scheme)
    });

    if (dark) {
      button_style_mode.icon_name = 'weather-clear-symbolic'
    } else {
      button_style_mode.icon_name = 'weather-clear-night-symbolic'
    }
  }
  updateStyle()
  style_manager.connect('notify::dark', updateStyle)

  button_style_mode.connect(
    "clicked", () => {
      settings.set_boolean('toggle-color-scheme', !settings.get_boolean('toggle-color-scheme'));
    }
  )

  function setColorScheme() {
    const toggle_color_scheme = settings.get_boolean('toggle-color-scheme');
    if (toggle_color_scheme) {
      style_manager.set_color_scheme(style_manager.dark ? Adw.ColorScheme.FORCE_LIGHT : Adw.ColorScheme.FORCE_DARK)
    } else {
      style_manager.set_color_scheme(Adw.ColorScheme.DEFAULT)
    }
  }
  setColorScheme()
  settings.connect('changed::toggle-color-scheme', setColorScheme)

  settings.bind(
    "show-ui",
    button_ui,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  settings.bind(
    "show-css",
    button_css,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  settings.bind(
    "show-javascript",
    button_javascript,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  settings.bind(
    "show-output",
    button_output,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );
  settings.bind(
    "show-devtools",
    button_devtools,
    "active",
    Gio.SettingsBindFlags.DEFAULT,
  );

  button_ui.bind_property(
    "active",
    source_view_ui.parent,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_css.bind_property(
    "active",
    source_view_css.parent,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_javascript.bind_property(
    "active",
    source_view_javascript.parent,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_output.bind_property(
    "active",
    output,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_devtools.bind_property(
    "active",
    devtools,
    "reveal-child",
    GObject.BindingFlags.SYNC_CREATE,
  );

  source_view_ui.buffer.connect("changed", updatePreview);
  source_view_css.buffer.connect("changed", updatePreview);
  source_view_javascript.buffer.connect("changed", updatePreview);

  const workbench = globalThis.workbench = output;

  function updatePreview() {
    while (output.get_first_child()) {
      output.remove(output.get_first_child())
    }

    workbench.builder = new Gtk.Builder()

    const text = source_view_ui.buffer.text
    if (!text) return

    try {
      workbench.builder.add_from_string(text, -1)
    } catch (err) {
      logError(err)
    }

    eval(source_view_javascript.buffer.text)
  }
  updatePreview();

  window.present();

  Shortcuts({ window, application });

  return { window };
}

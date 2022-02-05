import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Source from "gi://GtkSource?version=5";
import Adw from 'gi://Adw?version=1'
import Vte from 'gi://Vte?version=4-2.91'
import GLib from 'gi://GLib'

import { relativePath, settings } from "./util.js";
import Shortcuts from "./Shortcuts.js";
import * as ltx from './lib/ltx.js';
import prettier from './lib/prettier.js';
import prettier_babel from "./lib/prettier-babel.js";
import prettier_postcss from "./lib/prettier-postcss.js";
import prettier_xml from './lib/prettier-xml.js';
import postcss from './lib/postcss.js';

Source.init();

const scheme_manager = Source.StyleSchemeManager.get_default()
const language_manager = Source.LanguageManager.get_default();
const style_manager = Adw.StyleManager.get_default();

export default function Window({ application, data }) {
  Vte.Terminal.new()
  const builder = Gtk.Builder.new_from_file(relativePath("./window.ui"));

  const devtools = builder.get_object('devtools');
  const terminal = builder.get_object('terminal')
  terminal.set_cursor_blink_mode(Vte.CursorBlinkMode.ON);
  terminal.spawn_sync(
    Vte.PtyFlags.DEFAULT,
    '/',
    // +2 so we skip the line written by "script"
    // Script started on ...
    ['/bin/tail', '-f', '-n', '+2', '/var/tmp/workbench'],
    [],
    GLib.SpawnFlags.DO_NOT_REAP_CHILD,
    null,
    null
  );

  const window = builder.get_object("window");
  if (__DEV__) window.add_css_class("devel");
  window.set_application(application);

  const output = builder.get_object('output')

  const panel_javascript = builder.get_object('panel_javascript');
  const panel_css = builder.get_object('panel_css');
  const panel_ui = builder.get_object('panel_ui');

  const source_view_javascript = builder.get_object("source_view_javascript");
  source_view_javascript.buffer.set_language(
    language_manager.get_language("js"),
  );
  source_view_javascript.buffer.set_text(data.js, -1)

  const source_view_ui = builder.get_object("source_view_ui");
  source_view_ui.buffer.set_language(language_manager.get_language("xml"));
  source_view_ui.buffer.set_text(data.xml, -1);

  const source_view_css = builder.get_object("source_view_css");
  source_view_css.buffer.set_language(language_manager.get_language("css"));
  source_view_css.buffer.set_text(data.css, -1)

  const button_run = builder.get_object('button_run');
  const button_javascript = builder.get_object("button_javascript");
  const button_ui = builder.get_object("button_ui");
  const button_css = builder.get_object("button_css");
  const button_output = builder.get_object("button_output");
  const button_devtools = builder.get_object("button_devtools");
  const button_inspector = builder.get_object("button_inspector");
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

  button_ui.bind_property(
    "active",
    panel_ui,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_css.bind_property(
    "active",
    panel_css,
    "visible",
    GObject.BindingFlags.SYNC_CREATE,
  );

  button_javascript.bind_property(
    "active",
    panel_javascript,
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

  button_inspector.connect('clicked', () =>{
    Gtk.Window.set_interactive_debugging(true);
  });

  source_view_ui.buffer.connect("changed", updatePreview);
  source_view_css.buffer.connect("changed", updatePreview);
  // We do not support auto run of JavaScript ATM
  // source_view_javascript.buffer.connect("changed", updatePreview);

  const workbench = globalThis.workbench = output;
  workbench.window = window;

  let css_provider = null

  function updatePreview() {
    while (output.get_first_child()) {
      output.remove(output.get_first_child())
    }

    workbench.builder = new Gtk.Builder()

    let text = source_view_ui.buffer.text.trim();
    if (!text) return;
    let target_id

    try {
      [target_id, text] = targetBuildable(text);
    } catch (err) {
      // logError(err);
    }

    if (!target_id) return;

    try {
      workbench.builder.add_from_string(text, -1)
    } catch (err) {
      logError(err)
      return
    }

    // Update preview with UI
    if (workbench.builder.get_object(target_id)) {
      workbench.append(workbench.builder.get_object(target_id));
    }

    // Update preview with CSS
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(output.get_display(), css_provider);
      css_provider = null;
    }
    let style = source_view_css.buffer.text;
    if (!style) return;

    try {
      style = scopeStylesheet(style);
    } catch (err) {
      // logError(err);
    }

    css_provider = new Gtk.CssProvider();
    css_provider.load_from_data(style);
    // Unfortunally this styles the widget to which the style_context belongs to only
    // so the only option is to style the whole display (app)
    // would be cool if the preview was its own display but I don't know if that's possible
    // but actually as Tobias pointed out - we can prefix all selectors with an id or something
    // workbench.get_style_context().add_provider(
    //   css_provider,
    //   Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION,
    // );
    Gtk.StyleContext.add_provider_for_display(
      output.get_display(),
      css_provider,
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION,
    );
  }
  updatePreview();

  function run() {
    // auto format code
    source_view_javascript.buffer.text = prettier.format(source_view_javascript.buffer.text, {parser: "babel", plugins: [prettier_babel], trailingComma: "all"});
    source_view_css.buffer.text = prettier.format(source_view_css.buffer.text, {parser: "css", plugins: [prettier_postcss]});
    source_view_ui.buffer.text = prettier.format(source_view_ui.buffer.text, {parser: "xml", plugins: [prettier_xml], xmlWhitespaceSensitivity: "ignore"});

    button_run.set_sensitive(false);

    updatePreview();

    const code = source_view_javascript.buffer.text;
    if (!code.trim()) return;

    // We have to create a new file each time
    // because gjs doesn't appear to use etag for module caching
    // ?foo=Date.now() also does not work as expected
    // TODO: File a bug
    const [file_javascript] = Gio.File.new_tmp('workbench-XXXXXX.js');
    file_javascript.replace_contents(code, null, false, Gio.FileCreateFlags.NONE, null);
    import(`file://${file_javascript.get_path()}`).catch(logError).finally(() => {
      button_run.set_sensitive(true);
    })
  }

  const runAction = new Gio.SimpleAction({
    name: "run",
    parameter_type: null,
  });
  runAction.connect("activate", run);
  window.add_action(runAction);

  Shortcuts({ window, application });

  window.present();

  return { window };
}

// We are using postcss because it's also a dependency of prettier
// it would be great to keep the ast around and pass that to prettier
// so there is no need to re-parse but that's not supported yet
// https://github.com/prettier/prettier/issues/9114
// We are not using https://github.com/pazams/postcss-scopify
// because it's not compatible with postcss 8
function scopeStylesheet(style) {
  const ast = postcss.parse(style);

   for (const node of ast.nodes) {
     node.selector = ".workbench_output " + node.selector;
   }

  let str = ''
  postcss.stringify(ast, (s) => {
    str += s
  });
  return str;
}

function targetBuildable(code) {
  const tree = ltx.parse(code);

  const child = tree.children.find((child) => {
    if (typeof child === 'string') return false

    const class_name = child.attrs.class;
    if (!class_name) return false;

    const split = class_name.split(/(?=[A-Z])/);
    if (split.length < 2) return false;

    const [ns, ...rest] = split;
    const klass = imports.gi[ns]?.[rest.join('')];
    if (!klass) return false;

    // TODO: Figure out a better way to find out if a klass
    // inherits from GtkWidget
    const instance = new klass()
    if (typeof instance.get_parent !== 'function') return false

    return true;
  })

  if (!child) {
    return [null, '']
  }

  if (!child.attrs.id) {
    child.attrs.id = 'workbench_target';
  }

  return [child.attrs.id, tree.toString()]
}

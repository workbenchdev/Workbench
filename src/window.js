import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import Gio from "gi://Gio";
import Source from "gi://GtkSource?version=5";
import Adw from 'gi://Adw?version=1'
import Vte from 'gi://Vte?version=4-2.91'
import GLib from 'gi://GLib'

import { relativePath, settings } from "./util.js";
import Shortcuts from "./Shortcuts.js";

import * as csstree from './csstree.js'

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

  button_inspector.connect('clicked', () =>{
    Gtk.Window.set_interactive_debugging(true);
  });

  source_view_ui.buffer.connect("changed", updatePreview);
  source_view_css.buffer.connect("changed", updatePreview);
  // We do not support auto run of JavaScript ATM
  // source_view_javascript.buffer.connect("changed", updatePreview);

  const workbench = globalThis.workbench = output;

  let css_provider = null

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
      return
    }

    // Update preview with UI
    if (workbench.builder.get_object('main')) {
      workbench.append(workbench.builder.get_object('main'));
    }

    // Update preview with CSS
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(output.get_display(), css_provider);
      css_provider = null;
    }
    let style = source_view_css.buffer.text;
    if (!style) return;

    style = scopeStylesheet(style);
    log(style);


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


// console.log(csstree)

const scoping_selector = {
  "type": "ClassSelector",
  "loc": null,
  "name": "workbench_output"
}

function scopeStylesheet(style) {
  const ast = csstree.parse(style, {
    positions: true,
    flename: 'cool.css',
  });

  csstree.walk(ast, (node) => {
    if (node.type !== 'Selector') return;
    node.children.unshift(scoping_selector);
  });

  const result = csstree.generate(ast, {sourceMap: true, mode: 'spec'});
  console.log(result);

  return result.css;
}

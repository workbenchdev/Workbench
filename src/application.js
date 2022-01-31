import Gio from "gi://Gio";
import Adw from "gi://Adw";
import GLib from 'gi://GLib';

import Window from "./window.js";
import Actions from './actions.js';
import { relativePath, loadStyleSheet, settings } from "./util.js";

const style_manager = Adw.StyleManager.get_default();

export default function Application({ version, datadir }) {
  const application = new Adw.Application({
    application_id: "re.sonny.Workbench",
    flags: Gio.ApplicationFlags.HANDLES_OPEN,
  });

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

  application.connect('open', (self, files, hint) => {
    for (const file of files) {
      Window({
        application,
        data: readFile(file)
      });
    }
  });

  application.connect("activate", () => {
    Window({
      application,
      data: default_data
    });
  });

  application.connect("startup", () => {
    loadStyleSheet(relativePath("./style.css"));
  });

  application.set_option_context_description("<https://workbench.sonny.re>");
  application.set_option_context_parameter_string("[files…]");
  // TODO: Add examples
  // application.set_option_context_summary("");

  Actions({application, datadir, version});

  return application;
}

const text_decoder = new TextDecoder();
function readFile(file) {
  let content_type

  // Here is how you can build a x-gjs uri
  // const uri = GLib.Uri.build(GLib.UriFlags.NONE, 'x-gjs', null, null, null, 'console.log("hello")', null, null)
  // console.log(uri.to_string())
  if (file.has_uri_scheme("x-gjs")) {
    let uri
    try {
      uri = GLib.Uri.parse(file.get_uri(), GLib.UriFlags.NONE)
    } catch (err) {
      logError(err);
      return default_data;
    }

    return {
      css: '',
      js: uri.get_path(),
      xml: ''
    };
  }

   try {
      const info = file.query_info(
        "standard::content-type",
        Gio.FileQueryInfoFlags.NONE,
        null,
      );
      content_type = info.get_content_type();
    } catch (err) {
      logError(err);
    }

    if (!content_type) {
      return default_data
    }

  let data

  try {
    [,data] = file.load_contents(null);
    data = text_decoder.decode(data);
  } catch (err) {
    logError(err)
    return default_data
  }

  const js = content_type.includes('/javascript') ? data : '';
  const css = content_type.includes('text/css') ? data : '';
  const xml = content_type.includes('application/x-gtk-builder') ? data : '';

  if (!js && !css && !xml) return default_data

  return {
    js,
    css,
    xml
  }
}

const placeholder_js = `
console.log('Welcome to Workbench!');
`.trim()

const placeholder_css = `
box > label {
  color: #e66100;
}
`.trim()

const placeholder_xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<interface>
  <object class="GtkBox" id="main">
    <child>
      <object class="GtkLabel">
        <property name="label">Welcome to Workbench!</property>
      </object>
    </child>
  </object>
</interface>
`.trim()

const default_data = {
  js: placeholder_js,
  css: placeholder_css,
  xml: placeholder_xml
}


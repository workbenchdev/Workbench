import Gtk from "gi://Gtk";
import GObject from "gi://GObject";
import GLib from "gi://GLib";
import Gio from "gi://Gio";

import * as ltx from "../lib/ltx.js";
import * as postcss from "../lib/postcss.js";

import logger from "../logger.js";
import {
  getLanguage,
  connect_signals,
  disconnect_signals,
  settings,
} from "../util.js";

import Internal from "./Internal.js";
import External from "./External.js";
import { getClassNameType } from "../overrides.js";

import { assertBuildable, getObjectClass } from "./utils.js";

// Workbench always defaults to in-process preview now even if Vala is selected.
// Workbench will switch to out-of-process preview when Vala is run
// Workbench will switch back to inline preview if any of the following happens
//  • When a demo is selected
//  • When the out-of-process preview Window closed
//  • When switching language

export default function Previewer({
  output,
  builder,
  panel_ui,
  window,
  application,
  data_dir,
  term_console,
}) {
  let panel_code;

  let current;

  const dropdown_preview_align = builder.get_object("dropdown_preview_align");
  // TODO: File a bug libadwaita
  // flat does nothing on GtkDropdown or GtkComboBox or GtkComboBoxText
  dropdown_preview_align
    .get_first_child()
    .get_style_context()
    .add_class("flat");

  const internal = Internal({
    onWindowChange(open) {
      if (current !== internal) return;
      if (open) {
        stack.set_visible_child_name("close_window");
      } else {
        stack.set_visible_child_name("open_window");
      }
    },
    output,
    builder,
    window,
    application,
    dropdown_preview_align,
  });
  const external = External({
    onWindowChange(open) {
      if (current !== external) return;
      if (open) {
        stack.set_visible_child_name("close_window");
      } else {
        useInternal();
      }
    },
    output,
    builder,
  });

  const buffer_css = getLanguage("css").document.buffer;

  let handler_id_ui = null;
  let handler_ids_css = null;
  let handler_id_button_open;
  let handler_id_button_close;

  const stack = builder.get_object("stack_preview");
  const button_open = builder.get_object("button_open_preview_window");
  const button_close = builder.get_object("button_close_preview_window");

  settings.bind(
    "preview-align",
    dropdown_preview_align,
    "selected",
    Gio.SettingsBindFlags.DEFAULT
  );
  dropdown_preview_align.connect("notify::selected", setPreviewAlign);
  function setPreviewAlign() {
    const alignment =
      dropdown_preview_align.selected === 1 ? Gtk.Align.CENTER : Gtk.Align.FILL;
    output.halign = alignment;
    output.valign = alignment;
  }
  setPreviewAlign();

  function start() {
    stop();
    if (handler_id_ui === null) {
      handler_id_ui = panel_ui.connect("updated", update);
    }
    if (handler_ids_css === null) {
      // cannot use "changed" signal as it triggers many time for pasting
      handler_ids_css = connect_signals(buffer_css, {
        "end-user-action": update,
        undo: update,
        redo: update,
      });
    }
  }

  function stop() {
    if (handler_id_ui) {
      panel_ui.disconnect(handler_id_ui);
      handler_id_ui = null;
    }

    if (handler_ids_css) {
      disconnect_signals(buffer_css, handler_ids_css);
      handler_ids_css = null;
    }
  }

  // Using this custom scope we make sure that previewing UI definitions
  // with signals doesn't fail - in addition, checkout registerSignals
  const BuilderScope = GObject.registerClass(
    {
      Implements: [Gtk.BuilderScope],
    },
    class BuilderScope extends GObject.Object {
      noop() {}
      // https://docs.gtk.org/gtk4/vfunc.BuilderScope.create_closure.html
      vfunc_create_closure(builder, function_name, flags, object) {
        if (
          panel_code.panel.visible &&
          panel_code.language === "JavaScript" &&
          flags & Gtk.BuilderClosureFlags.SWAPPED
        ) {
          logger.warning('Signal flag "swapped" is unsupported in JavaScript.');
        }
        return this[function_name] || this.noop;
      }
    }
  );

  let symbols = null;
  function update() {
    const builder = new Gtk.Builder();
    const scope = new BuilderScope();
    builder.set_scope(scope);

    let text = panel_ui.xml.trim();
    let target_id;
    let tree;
    let original_id;
    let template;

    if (!text) return;

    try {
      tree = ltx.parse(text);
      ({ target_id, text, original_id, template } = targetBuildable(tree));
    } catch (err) {
      // logError(err);
      logger.debug(err);
    }

    if (!target_id) return;

    try {
      assertBuildable(tree);
    } catch (err) {
      logger.critical(err.message);
      return;
    }

    registerSignals({ tree, scope, symbols, template });

    try {
      // For some reason this log warnings twice
      builder.add_from_string(text, -1);
    } catch (err) {
      // The following while being obviously invalid
      // does no produce an error - so we will need to strictly validate the XML
      // before constructing the builder
      // prettier-xml throws but doesn't give a stack trace
      // <style>
      //   <class name="title-1"
      // </style>
      logError(err);
      return;
    }

    term_console.clear();

    const object_preview = builder.get_object(target_id);
    if (!object_preview) return;

    if (!dropdown_preview_align.visible) {
      dropdown_preview_align.selected = template ? 1 : 0;
    }
    dropdown_preview_align.visible = !!template;

    current.updateXML({
      xml: text,
      builder,
      object_preview,
      target_id,
      original_id,
      template,
    });
    current.updateCSS(buffer_css.text);
    symbols = null;
  }

  function useExternal() {
    if (current === external) return;
    stack.set_visible_child_name("open_window");
    setPreviewer(external);
  }

  function useInternal() {
    if (current === internal) return;
    setPreviewer(internal);
    update();
  }

  function setPreviewer(previewer) {
    if (handler_id_button_open) {
      button_open.disconnect(handler_id_button_open);
    }
    if (handler_id_button_close) {
      button_close.disconnect(handler_id_button_close);
    }

    current?.stop();
    current?.closeInspector();
    current = previewer;

    handler_id_button_open = button_open.connect("clicked", () => {
      current.open();
      stack.set_visible_child_name("close_window");
    });

    handler_id_button_close = button_close.connect("clicked", () => {
      current.close();
      stack.set_visible_child_name("open_window");
    });

    current.start();
  }

  builder.get_object("button_screenshot").connect("clicked", () => {
    current.screenshot({ window, data_dir });
  });

  setPreviewer(internal);
  start();

  return {
    start,
    stop,
    update,
    open() {
      current.open();
    },
    close() {
      current.close();
    },
    openInspector() {
      current.openInspector();
    },
    useExternal,
    useInternal,
    setPanelCode(v) {
      panel_code = v;
    },
    setSymbols(_symbols) {
      symbols = _symbols;
    },
  };
}

// We are using postcss because it's also a dependency of prettier
// it would be great to keep the ast around and pass that to prettier
// so there is no need to re-parse but that's not supported yet
// https://github.com/prettier/prettier/issues/9114
// We are not using https://github.com/pazams/postcss-scopify
// because it's not compatible with postcss 8
export function scopeStylesheet(style) {
  const ast = postcss.parse(style);

  for (const node of ast.nodes) {
    if (node.selector) {
      node.selector = "#workbench_output " + node.selector;
    }
  }

  let str = "";
  postcss.stringify(ast, (s) => {
    str += s;
  });

  return str;
}

const text_encoder = new TextEncoder();

function getTemplate(tree) {
  const template = tree.getChild("template");
  if (!template) return;

  const { parent } = template.attrs;
  if (!parent) return;

  const klass = getObjectClass(parent);
  if (!klass) return;

  // Error: Cannot instantiate abstract type GtkWidget
  if (parent !== "GtkWidget") {
    if (!GObject.type_is_a(klass, Gtk.Widget)) return;
  }

  template.attrs.class = getClassNameType(template.attrs.class);
  const original = tree.toString();
  tree.remove(template);

  const target_id = makeWorkbenchTargetId();
  const el = new ltx.Element("object", {
    class: parent,
    id: target_id,
  });
  template.children.forEach((child) => {
    el.cnode(child);
  });
  tree.cnode(el);

  return {
    target_id: el.attrs.id,
    text: tree.toString(),
    original_id: undefined,
    template: text_encoder.encode(original),
  };
}

function findPreviewable(tree) {
  for (const child of tree.getChildren("object")) {
    const class_name = child.attrs.class;
    if (!class_name) continue;

    const klass = getObjectClass(class_name);
    if (!klass) continue;

    if (GObject.type_is_a(klass, Gtk.Widget)) return child;
  }
}

function targetBuildable(tree) {
  const template = getTemplate(tree);
  if (template) return template;

  const child = findPreviewable(tree);
  if (!child) {
    return [null, ""];
  }

  const original_id = child.attrs.id;
  const target_id = makeWorkbenchTargetId();
  child.attrs.id = target_id;

  return { target_id, text: tree.toString(), original_id, template: null };
}

function makeSignalHandler(
  { name, handler, after, id, type },
  { symbols, template }
) {
  return function (object, ...args) {
    const symbol = symbols?.[handler];
    const registered_handler = typeof symbol === "function";
    if (registered_handler) {
      symbol(object, ...args);
    }

    const object_name = `${type}${id ? "$" + id : ""}`;
    // const object_name = object.toString(); // [object instance wrapper GIName:Gtk.Button jsobj@0x2937abc5c4c0 native@0x55fbfe53f620]
    const handler_type = (() => {
      if (template) return "Template";
      if (registered_handler) return "Registered";
      return "Unregistered";
    })();
    const handler_when = after ? "after" : "for";

    logger.log(
      `${handler_type} handler "${handler}" triggered ${handler_when} signal "${name}" on ${object_name}`
    );
  };
}

function registerSignals({ tree, scope, symbols, template }) {
  try {
    const signals = findSignals(tree);
    for (const signal of signals) {
      scope[signal.handler] = makeSignalHandler(signal, { symbols, template });
    }
  } catch (err) {
    logError(err);
  }
}

function findSignals(tree, signals = []) {
  for (const object of tree.getChildren("object")) {
    const signal_elements = object.getChildren("signal");
    signals.push(
      ...signal_elements.map((el) => {
        let id = object.attrs.id;
        if (id && isWorkbenchTargetId(id)) id = "";
        return {
          id,
          type: object.attrs.class,
          ...el.attrs,
        };
      })
    );

    for (const child of object.getChildren("child")) {
      findSignals(child, signals);
    }
  }
  return signals;
}

const target_id_prefix = "workbench_";
function makeWorkbenchTargetId() {
  return target_id_prefix + GLib.uuid_string_random();
}
function isWorkbenchTargetId(id) {
  return id.startsWith(target_id_prefix);
}

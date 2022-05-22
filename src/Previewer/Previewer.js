import Gtk from "gi://Gtk";
import GObject from "gi://GObject";

import * as ltx from "../lib/ltx.js";
import * as postcss from "../lib/postcss.js";

import logger from "../logger.js";
import { getLanguage, connect_signals, disconnect_signals } from "../util.js";

import Internal from "./Internal.js";
import External from "./External.js";

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
}) {
  let panel_code;

  let current;

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

  function update() {
    const builder = new Gtk.Builder();
    const scope = new BuilderScope();
    builder.set_scope(scope);

    let text = panel_ui.xml.trim();
    let target_id;
    let tree;
    // let template;

    try {
      tree = ltx.parse(text);
      [target_id, text] = targetBuildable(tree);
    } catch (err) {
      logError(err);
      logger.debug(err);
    }

    if (!target_id) return;

    try {
      assertBuildable(tree);
    } catch (err) {
      logger.critical(err.message);
      return;
    }

    registerSignals(tree, scope);

    try {
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

    const object_preview = builder.get_object(target_id);
    if (!object_preview) return;

    current.updateXML({ xml: text, builder, object_preview, target_id });
    current.updateCSS(buffer_css.text);
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
    useExternal,
    useInternal,
    setPanelCode(v) {
      panel_code = v;
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

function getTemplate(tree) {
  const template = tree.getChild("template");
  if (!template) return;

  const { parent } = template.attrs;
  if (!parent) return;

  const klass = getObjectClass(parent);
  if (!klass) return;

  const object = new klass();
  if (!(object instanceof Gtk.Widget)) return;

  tree.remove(template);

  const el = new ltx.Element("object", {
    class: parent,
    id: "workbench_target",
  });
  template.children.forEach((child) => {
    el.cnode(child);
  });

  tree.cnode(el);

  return [el.attrs.id, tree.toString()];
}

function findPreviewable(tree) {
  for (const child of tree.getChildren("object")) {
    const class_name = child.attrs.class;
    if (!class_name) continue;

    const klass = getObjectClass(class_name);
    if (!klass) continue;

    const object = new klass();
    if (object instanceof Gtk.Widget) return child;
    // if (object instanceof Gtk.Widget && !(object instanceof Gtk.Root))
    //   return child;
  }
}

function getObjectClass(class_name) {
  const split = class_name.split(/(?=[A-Z])/);
  if (split.length < 2) return;

  const [ns, ...rest] = split;
  return imports.gi[ns]?.[rest.join("")];
}

function targetBuildable(tree) {
  const template = getTemplate(tree);
  if (template) return template;

  const child = findPreviewable(tree);
  if (!child) {
    return [null, ""];
  }

  if (!child.attrs.id) {
    child.attrs.id = "workbench_target";
  }

  return [child.attrs.id, tree.toString()];
}

// TODO: GTK Builder shouldn't crash when encountering a non buildable
// https://github.com/sonnyp/Workbench/issues/49
function assertBuildable(tree) {
  for (const child of tree.getChildren("object")) {
    const klass = getObjectClass(child.attrs.class);
    if (!klass) continue;
    const object = new klass();
    if (!(object instanceof Gtk.Buildable)) {
      throw new Error(`${child.attrs.class} is not a GtkBuildable`);
    }
    const _child = child.getChild("child");
    if (_child) assertBuildable(_child);
  }
}

function makeSignalHandler({ name, handler, after, id, type }) {
  return function (object) {
    const object_name = `${type}${id ? "$" + id : ""}`;
    // const object_name = object.toString()
    logger.log(
      `Handler "${handler}" triggered ${
        after ? "after" : "for"
      } signal "${name}" on ${object_name}`
    );
  };
}

function registerSignals(tree, scope) {
  try {
    const signals = findSignals(tree);
    for (const signal of signals) {
      scope[signal.handler] = makeSignalHandler(signal);
    }
  } catch (err) {
    logError(err);
  }
}

function findSignals(tree, signals = []) {
  for (const child of tree.getChildren("object")) {
    const signal_elements = child.getChildren("signal");
    signals.push(
      ...signal_elements.map((el) => {
        return {
          id: child.attrs.id,
          type: child.attrs.class,
          ...el.attrs,
        };
      })
    );
    const _child = child.getChild("child");
    if (_child) findSignals(_child, signals);
  }
  return signals;
}

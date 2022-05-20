import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import * as postcss from "../lib/postcss.js";
import GLib from "gi://GLib";
import Graphene from "gi://Graphene";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

import logger from "../logger.js";
import { portal } from "../util.js";

export default function Internal({
  onWindowChange,
  output,
  builder,
  window,
  application,
}) {
  const stack = builder.get_object("stack_preview");

  const workbench = (globalThis.workbench = {
    window,
    application,
  });

  let css_provider = null;
  let object_root = null;

  function start() {
    builder.get_object("button_screenshot").visible = true;
  }

  function open() {
    if (!object_root) return;
    object_root.present_with_time(Gdk.CURRENT_TIME);
    onWindowChange(true);
  }

  function close() {
    object_root?.close();
  }

  function stop() {
    close();
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(
        output.get_display(),
        css_provider
      );
      css_provider = null;
    }
    object_root?.destroy();
    object_root = null;
  }

  function updateXML({ builder, object_preview }) {
    workbench.builder = builder;
    if (object_preview instanceof Gtk.Root) {
      updateBuilderRoot(object_preview);
    } else {
      updateBuilderNonRoot(object_preview);
    }
  }

  function updateBuilderRoot(object_preview) {
    stack.set_visible_child_name("open_window");
    if (!object_root) {
      object_root = object_preview;
      object_root.set_hide_on_close(true);
      object_root.connect("close-request", () => {
        stack.set_visible_child_name("open_window");
        onWindowChange(false);
      });
    }
    adoptChild(object_preview, object_root);
  }

  function updateBuilderNonRoot(object_preview) {
    object_root?.destroy();
    object_root = null;

    stack.set_visible_child_name("inline");
    output.set_child(object_preview);
  }

  function updateCSS(css) {
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(
        output.get_display(),
        css_provider
      );
      css_provider = null;
    }

    let style = css;
    if (!style) return;
    try {
      style = scopeStylesheet(style);
    } catch (err) {
      logger.debug(err);
      // logError(err);
    }

    css_provider = new Gtk.CssProvider();
    css_provider.load_from_data(style);
    Gtk.StyleContext.add_provider_for_display(
      output.get_display(),
      css_provider,
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    );
  }

  start();

  return {
    start,
    open,
    close,
    stop,
    updateXML,
    updateCSS,
    screenshot({ window, data_dir }) {
      screenshot({ widget: object_root || output, window, data_dir });
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

export function adoptChild(old_parent, new_parent) {
  const child = getChild(old_parent);
  setChild(old_parent, null);
  setChild(new_parent, child);
}

function getChild(object) {
  if (typeof object.get_content === "function") {
    return object.get_content();
  } else {
    return object.get_child();
  }
}

function setChild(object, child) {
  if (typeof object.set_content === "function") {
    object.set_content(child);
  } else {
    object.set_child(child);
  }
}

function screenshot({ widget, window, data_dir }) {
  const paintable = new Gtk.WidgetPaintable({ widget });
  const width = widget.get_allocated_width();
  const height = widget.get_allocated_height();

  const snapshot = Gtk.Snapshot.new();
  paintable.snapshot(snapshot, width, height);

  const node = snapshot.to_node();

  if (!node) {
    console.log("Could not get node snapshot", { width, height });
  }

  const renderer = widget.get_native().get_renderer();
  const rect = new Graphene.Rect({
    origin: new Graphene.Point({ x: 0, y: 0 }),
    size: new Graphene.Size({ width, height }),
  });
  const texture = renderer.render_texture(node, rect);

  const path = GLib.build_filenamev([data_dir, `Workbench screenshot.png`]);
  texture.save_to_png(path);

  const parent = XdpGtk.parent_new_gtk(window);

  portal.open_uri(
    parent,
    `file://${path}`,
    Xdp.OpenUriFlags.NONE, // flags
    null, // cancellable
    (self, result) => {
      portal.open_uri_finish(result);
    }
  );
}

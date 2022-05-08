import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import * as ltx from "./lib/ltx.js";
import postcss from "./lib/postcss.js";
import GLib from "gi://GLib";
import Graphene from "gi://Graphene";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";

import logger from "./logger.js";

export default function Preview({
  output,
  builder,
  button_preview,
  panel_preview,
  source_view_ui,
  source_view_css,
  window,
  application,
  data_dir,
  documents,
}) {
  const workbench = (globalThis.workbench = {
    window,
    application,
  });

  const preview_window = builder.get_object("preview_window");
  const preview_window_button = builder.get_object("preview_window_button");

  let css_provider = null;
  let object_root = null;

  preview_window_button.connect("clicked", () => {
    if (!object_root) return;
    object_root.present_with_time(Gdk.CURRENT_TIME);
  });

  async function update() {
    const builder = new Gtk.Builder();
    workbench.builder = builder;

    // let text = source_view_ui.buffer.text.trim();
    let text;
    try {
      text = await documents[1].get_text();
      // eslint-disable-next-line no-empty
    } catch {}
    if (!text) return;
    let target_id;
    let tree;

    try {
      tree = ltx.parse(text);
      [target_id, text] = targetBuildable(tree);
    } catch (err) {
      logger.debug(err);
    }

    if (!target_id) return;

    try {
      assertBuildable(tree);
    } catch (err) {
      logger.critical(err.message);
      return;
    }

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

    // Update preview with UI
    const object_preview = builder.get_object(target_id);
    if (object_preview) {
      if (object_preview instanceof Gtk.Root) {
        output.set_child(preview_window);
        if (!object_root) {
          object_root = object_preview;
          object_root.set_hide_on_close(true);
        }
        adoptChild(object_preview, object_root);
      } else {
        output.set_child(object_preview);
        object_root?.destroy();
        object_root = null;
      }
    }

    // Update preview with CSS
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(
        output.get_display(),
        css_provider
      );
      css_provider = null;
    }
    let style = source_view_css.buffer.text;
    if (!style) return;

    try {
      style = scopeStylesheet(style);
    } catch (err) {
      logger.debg(err);
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

  builder.get_object("button_screenshot").connect("clicked", () => {
    screenshot({ widget: object_root || output, window, data_dir });
  });

  return { update };
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

export function targetBuildable(tree) {
  const child = findPreviewable(tree);
  if (!child) {
    return [null, ""];
  }

  if (!child.attrs.id) {
    child.attrs.id = "workbench_target";
  }

  return [child.attrs.id, tree.toString()];
}

const portal = new Xdp.Portal();

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
  // log(path);
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

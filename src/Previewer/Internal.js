import Gtk from "gi://Gtk";
import Gdk from "gi://Gdk";
import * as postcss from "../lib/postcss.js";
import GLib from "gi://GLib";
import Graphene from "gi://Graphene";
import Xdp from "gi://Xdp";
import XdpGtk from "gi://XdpGtk4";
import GObject from "gi://GObject";

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

  function updateXML({ builder, object_preview, target_id, original_id }) {
    globalThis.workbench = {
      window,
      application,
      builder,
    };

    let obj;
    if (object_preview instanceof Gtk.Root) {
      obj = updateBuilderRoot(object_preview, builder, original_id);
    } else {
      obj = updateBuilderNonRoot(object_preview);
    }

    if (original_id) {
      builder.expose_object(original_id, obj);
    }
  }

  function setObjectRoot(object) {
    object_root = object;
    object_root.set_hide_on_close(true);
    object_root.connect("close-request", () => {
      onWindowChange(false);
    });
  }

  function updateBuilderRoot(object_preview, builder, original_id) {
    stack.set_visible_child_name("open_window");

    if (!object_root) {
      setObjectRoot(object_preview);
    } else if (
      object_root.constructor.$gtype !== object_preview.constructor.$gtype
    ) {
      object_root.destroy();
      setObjectRoot(object_preview);
    } else {
      for (const prop of object_root.constructor.list_properties()) {
        if (!(prop.flags & GObject.ParamFlags.WRITABLE)) continue;
        if (!(prop.flags & GObject.ParamFlags.READABLE)) continue;
        if (prop.flags & GObject.ParamFlags.CONSTRUCT_ONLY) continue;

        const prop_name = prop.get_name();
        if (
          [
            // The new window does not have "csd" at this time
            "css-classes",
            // Triggers
            // Gtk-CRITICAL Widget of type “GtkApplicationWindow” already has an accessible role of type “GTK_ACCESSIBLE_ROLE_WIDGET”
            "accessible-role",
            // These properties override current window size
            "default-width",
            "default-height",
          ].includes(prop_name)
        ) {
          continue;
        }

        const new_value = object_preview[prop_name];
        if (new_value instanceof Gtk.Widget) {
          // Remove parent widget to prevent
          // Can't set new parent  0x5649879daa40 on widget GtkHeaderBar 0x564987790d90, which already has parent GtkApplicationWindow 0x564988f31a40
          object_preview[prop_name] = null;
        }

        const old_value = object_root[prop_name];
        if (!old_value !== new_value) {
          object_root[prop_name] = new_value;
        }
      }
    }

    return object_root;
  }

  function updateBuilderNonRoot(object_preview) {
    object_root?.destroy();
    object_root = null;

    stack.set_visible_child_name("inline");
    output.set_child(object_preview);
    return object_preview;
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
    openInspector() {
      Gtk.Window.set_interactive_debugging(true);
    },
    closeInspector() {
      Gtk.Window.set_interactive_debugging(false);
    },
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

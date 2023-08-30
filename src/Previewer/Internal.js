import Gtk from "gi://Gtk";
import * as postcss from "../lib/postcss.js";
import Graphene from "gi://Graphene";
import GObject from "gi://GObject";
import Adw from "gi://Adw";

import { once } from "../../troll/src/async.js";

const { addSignalMethods } = imports.signals;

export default function Internal({
  onWindowChange,
  output,
  builder,
  window,
  application,
  dropdown_preview_align,
  panel_ui,
  session,
}) {
  const bus = {};
  addSignalMethods(bus);

  const stack = builder.get_object("stack_preview");

  let css_provider = null;
  let object_root = null;

  async function open() {
    // The flow for internal preview is complicated after the window has been destroyed (on close)
    // Internal cannot rebuild it on its own so it calls panel_ui.update which will endup trigering internal.updateXML.
    // instead - Internal could work like the Vala previwer and take a XML string that it can parse whenever it needs
    if (!object_root) {
      try {
        await panel_ui.update();
        await once(bus, "object_root", { timeout: 5000 });
      } catch (err) {
        logError(err);
        return;
      }
    }

    object_root.present();
    onWindowChange(true);
  }

  async function close() {
    object_root?.close();
  }

  function stop() {
    close();
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(
        output.get_display(),
        css_provider,
      );
      css_provider = null;
    }
    object_root?.destroy();
    object_root = null;
  }

  function preview(object) {
    output.set_child(object);
  }

  async function updateXML({ builder, object_preview, original_id, template }) {
    globalThis.workbench = {
      window,
      application,
      builder,
      template,
      resolve(path) {
        return session.file.resolve_relative_path(path).get_uri();
      },
      preview(object) {
        dropdown_preview_align.visible = false;
        dropdown_preview_align.selected = 0;
        preview(object);
      },
    };

    let obj;
    if (object_preview instanceof Gtk.Root) {
      obj = updateBuilderRoot(object_preview);
    } else {
      obj = updateBuilderNonRoot(object_preview);
    }

    if (original_id) {
      builder.expose_object(original_id, obj);
    }
  }

  function setObjectRoot(object) {
    object_root = object;
    object_root.connect("close-request", () => {
      object_root = null;
      onWindowChange(false);
    });
    bus.emit("object_root");
  }

  function updateBuilderRoot(object_preview) {
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
        // AdwWindow and AdwApplicationWindow have child and titlebar properties but do not support setting them
        // "Using gtk_window_get_titlebar() and gtk_window_set_titlebar() is not supported and will result in a crash."
        // https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/class.Window.html
        // https://github.com/sonnyp/Workbench/issues/130
        if (
          (object_preview instanceof Adw.Window ||
            object_preview instanceof Adw.ApplicationWindow) &&
          ["child", "titlebar"].includes(prop_name)
        ) {
          continue;
        }

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

      // Toplevel windows returned by these functions will stay around
      // until the user explicitly destroys them with gtk_window_destroy().
      // https://docs.gtk.org/gtk4/class.Builder.html
      if (object_preview instanceof Gtk.Window) {
        object_preview.destroy();
      }
    }

    if (!object_root.name) {
      object_root.name = "workbench_output";
    }

    return object_root;
  }

  function updateBuilderNonRoot(object_preview) {
    object_root?.destroy();
    object_root = null;

    stack.set_visible_child_name("inline");
    preview(object_preview);
    return object_preview;
  }

  async function updateCSS(css) {
    if (css_provider) {
      Gtk.StyleContext.remove_provider_for_display(
        output.get_display(),
        css_provider,
      );
      css_provider = null;
    }

    let style = css;
    if (!style) return;
    // Workaround https://github.com/sonnyp/Workbench/issues/147
    if (style.match(/#$/g)) return;

    try {
      style = scopeStylesheet(style, object_root?.name);
    } catch (err) {
      console.debug(err);
      // logError(err);
    }

    css_provider = new Gtk.CssProvider();
    css_provider.load_from_data(style, -1);
    Gtk.StyleContext.add_provider_for_display(
      output.get_display(),
      css_provider,
      Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION,
    );
  }

  return {
    async start() {},
    open,
    close,
    stop,
    updateXML,
    updateCSS,
    async openInspector() {
      Gtk.Window.set_interactive_debugging(true);
    },
    async closeInspector() {
      Gtk.Window.set_interactive_debugging(false);
    },
    async screenshot({ path }) {
      return screenshot({ widget: object_root || output, path });
    },
  };
}

// We are using postcss because it's also a dependency of prettier
// it would be great to keep the ast around and pass that to prettier
// so there is no need to re-parse but that's not supported yet
// https://github.com/prettier/prettier/issues/9114
// We are not using https://github.com/pazams/postcss-scopify
// because it's not compatible with postcss 8
export function scopeStylesheet(style, id) {
  const ast = postcss.parse(style);
  id = id || "workbench_output";

  for (const node of ast.nodes) {
    if (node.selector === "window") {
      node.selector = `window#${id}`;
    } else if (node.selector) {
      node.selector = `#${id} ${node.selector}`;
    }
  }

  let str = "";
  postcss.stringify(ast, (s) => {
    str += s;
  });

  return str;
}

function screenshot({ widget, path }) {
  const paintable = new Gtk.WidgetPaintable({ widget });
  const width = widget.get_allocated_width();
  const height = widget.get_allocated_height();

  const snapshot = Gtk.Snapshot.new();
  paintable.snapshot(snapshot, width, height);

  const node = snapshot.to_node();

  if (!node) {
    console.log("Could not get node snapshot", { width, height });
    return false;
  }

  const renderer = widget.get_native().get_renderer();
  const rect = new Graphene.Rect({
    origin: new Graphene.Point({ x: 0, y: 0 }),
    size: new Graphene.Size({ width, height }),
  });
  const texture = renderer.render_texture(node, rect);

  texture.save_to_png(path);

  return true;
}

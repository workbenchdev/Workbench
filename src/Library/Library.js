import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const byteArray = imports.byteArray;

// let widget_library;

const prefix = "/re/sonny/Workbench/Library";

export default function Library({ window, openDemo }) {
  // if (widget_library) {
  //   return widget_library.present();
  // }

  const builder = Gtk.Builder.new_from_resource(`${prefix}/Library.ui`);
  const widget = builder.get_object("library");

  widget.get_first_child().get_child().vexpand = true;
  widget.get_first_child().get_child().valign = Gtk.Align.FILL;

  widget.get_first_child().get_child().get_parent().vexpand = true;
  widget.get_first_child().get_child().get_parent().valign = Gtk.Align.FILL;

  // window_library = builder.get_object("library");
  // window_library.set_transient_for(window);

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new Adw.ActionRow({
      title: demo.name,
      subtitle: demo.description,
      activatable: true,
    });
    const check = new Gtk.CheckButton({});
    check.get_style_context().add_class("selection-mode");
    widget.set_activatable_widget(check);
    widget.add_suffix(check);

    check.connect("toggled", () => {
      if (!check.active) return;
      openDemo(demo.name).catch(logError);
    });

    builder.get_object(`library_${demo.category}`).add(widget);
  });

  return widget;
}

function getDemos() {
  return Gio.resources_enumerate_children(
    `${prefix}/demos`,
    Gio.ResourceLookupFlags.NONE
  ).map((child) => {
    const bytes = byteArray.fromGBytes(
      Gio.resources_lookup_data(
        `${prefix}/demos/${child}main.json`,
        Gio.ResourceLookupFlags.NONE
      )
    );
    return JSON.parse(new TextDecoder().decode(bytes));
  });
}

export function loadDemo(demo_name) {
  const js = getDemoFile(demo_name, "main.js");
  const css = getDemoFile(demo_name, "main.css");
  const xml = getDemoFile(demo_name, "main.ui");
  const blueprint = getDemoFile(demo_name, "main.blp");
  const vala = getDemoFile(demo_name, "main.vala");
  const json = JSON.parse(getDemoFile(demo_name, "main.json"));

  return { ...json, js, css, xml, blueprint, vala };
}

export function getDemoFile(demo_name, file_name) {
  let str;

  try {
    str = new TextDecoder().decode(
      byteArray.fromGBytes(
        Gio.resources_lookup_data(
          `${prefix}/demos/${demo_name}/${file_name}`,
          Gio.ResourceLookupFlags.NONE
        )
      )
    );
  } catch (err) {
    if (err.code !== Gio.ResourceError.NOT_FOUND) {
      throw err;
    }
    str = "";
  }

  return str;
}

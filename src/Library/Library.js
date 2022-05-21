import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const byteArray = imports.byteArray;

const prefix = "/re/sonny/Workbench/Library";

export default function Library({ flap, openDemo, window, application }) {
  const builder = Gtk.Builder.new_from_resource(`${prefix}/Library.ui`);
  const widget = builder.get_object("library");

  flap.set_flap(widget);

  function toggleFlap() {
    flap.reveal_flap = !flap.reveal_flap;
  }

  const status_page = widget.get_first_child();
  status_page.get_child().vexpand = true;
  status_page.get_child().valign = Gtk.Align.FILL;
  status_page.get_child().get_parent().vexpand = true;
  status_page.get_child().get_parent().valign = Gtk.Align.FILL;

  let last_selected;

  flap.connect("notify::reveal-flap", () => {
    last_selected?.grab_focus();
  });

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new Adw.ActionRow({
      title: demo.name,
      subtitle: demo.description,
      activatable: true,
    });
    if (demo.name === "Welcome") last_selected = widget;
    widget.add_suffix(
      new Gtk.Image({
        icon_name: "go-next-symbolic",
      })
    );
    widget.connect("activated", () => {
      last_selected = widget;
      openDemo(demo.name).then(toggleFlap).catch(logError);
    });

    builder.get_object(`library_${demo.category}`).add(widget);
  });

  const action_library = new Gio.SimpleAction({
    name: "library",
    parameter_type: null,
  });
  action_library.connect("activate", toggleFlap);
  window.add_action(action_library);
  application.set_accels_for_action("win.library", ["<Control><Shift>O"]);

  return widget;
}

export function readDemo(demo_name) {
  const javascript = readDemoFile(demo_name, "main.js");
  const css = readDemoFile(demo_name, "main.css");
  const xml = readDemoFile(demo_name, "main.ui");
  const blueprint = readDemoFile(demo_name, "main.blp");
  const vala = readDemoFile(demo_name, "main.vala");
  const json = JSON.parse(readDemoFile(demo_name, "main.json"));

  return { ...json, javascript, css, xml, blueprint, vala };
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

function readDemoFile(demo_name, file_name) {
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

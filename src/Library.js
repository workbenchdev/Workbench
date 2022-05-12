import Gio from "gi://Gio";
import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

const byteArray = imports.byteArray;

let window_library;

export default function Library({ window, builder, loadDemo }) {
  if (window_library) {
    return window_library.present();
  }

  window_library = builder.get_object("window_library");
  window_library.set_transient_for(window);

  const demos = getDemos();
  demos.forEach((demo) => {
    const widget = new Adw.ActionRow({
      title: demo.name,
      subtitle: demo.description,
      activatable: true,
    });

    const image = new Gtk.Image({
      icon_name: "go-next-symbolic",
    });
    widget.add_suffix(image);

    widget.connect("activated", () => {
      loadDemo(demo.name).catch(logError);
    });

    builder.get_object(`library_${demo.category}`).add(widget);
  });

  window_library.present();
}

function getDemos() {
  return Gio.resources_enumerate_children(
    "/re/sonny/Workbench/demos",
    Gio.ResourceLookupFlags.NONE
  ).map((child) => {
    const bytes = byteArray.fromGBytes(
      Gio.resources_lookup_data(
        "/re/sonny/Workbench/demos/" + child + "main.json",
        Gio.ResourceLookupFlags.NONE
      )
    );
    return JSON.parse(new TextDecoder().decode(bytes));
  });
}

export function getDemoSources(demo_name) {
  const js = getDemoFile(demo_name, "main.js");
  const css = getDemoFile(demo_name, "main.css");
  const ui = getDemoFile(demo_name, "main.ui");
  let vala;
  try {
    vala = getDemoFile(demo_name, "main.vala");
  } catch {
    vala = "";
  }

  return { js, css, ui, vala };
}

export function getDemoFile(demo_name, file_name) {
  let str;

  try {
    str = new TextDecoder().decode(
      byteArray.fromGBytes(
        Gio.resources_lookup_data(
          `/re/sonny/Workbench/demos/${demo_name}/${file_name}`,
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

import Gio from "gi://Gio";
import Adw from "gi://Adw";

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
  const xml = getDemoFile(demo_name, "main.ui");
  const blueprint = getDemoFile(demo_name, "main.blp");
  const vala = getDemoFile(demo_name, "main.vala");

  return { js, css, xml, blueprint, vala };
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

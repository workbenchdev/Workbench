import GLib from "gi://GLib";

["adwaita-1-demo", "gtk4-demo", "gtk4-widget-factory"].forEach((tool) => {
  workbench.builder.get_object(tool).connect("clicked", () => spawn(tool));
});

function spawn(name) {
  try {
    GLib.spawn_command_line_async(`sh -c "/bin/${name} > /dev/null 2>&1"`);
  } catch (err) {
    logError(err);
  }
}
